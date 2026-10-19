import { useEffect, useRef } from "react";
import framesUrl from "~/assets/foundry-pour-frames.png";

const STILL_ICON = "/favicon.png";
const FRAME_SIZE = 32;
const FRAME_COUNT = 72;
const COLUMNS = 12;
const FRAME_INTERVAL = 1000 / 12;

/** The approved six-second ladle pour, shared by every page's browser tab. */
export function AnimatedFavicon() {
  const iconRef = useRef<HTMLLinkElement>(null);

  useEffect(() => {
    const icon = iconRef.current;
    if (!icon) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sprite = new Image();
    let frames: string[] | undefined;
    let timer: number | undefined;
    let frame = 0;
    let loading = false;
    let failed = false;
    let disposed = false;

    function stop() {
      window.clearInterval(timer);
      timer = undefined;
      // This also leaves a useful icon in inactive tabs and saved bookmarks.
      icon!.href = STILL_ICON;
    }

    function syncPlayback() {
      stop();
      if (disposed || failed || document.hidden || reducedMotion.matches) return;

      if (!frames) {
        if (!loading) {
          loading = true;
          sprite.src = framesUrl;
        }
        return;
      }

      const readyFrames = frames;
      const advance = () => {
        icon!.href = readyFrames[frame];
        frame = (frame + 1) % readyFrames.length;
      };
      advance();
      timer = window.setInterval(advance, FRAME_INTERVAL);
    }

    sprite.onload = () => {
      if (disposed) return;
      // Slice the small sprite once. Playback reuses URLs without rendering
      // the detailed artwork or issuing a network request for every frame.
      try {
        const canvas = document.createElement("canvas");
        canvas.width = canvas.height = FRAME_SIZE;
        const context = canvas.getContext("2d");
        if (
          !context ||
          sprite.naturalWidth !== COLUMNS * FRAME_SIZE ||
          sprite.naturalHeight !== Math.ceil(FRAME_COUNT / COLUMNS) * FRAME_SIZE
        ) {
          failed = true;
          return;
        }

        frames = Array.from({ length: FRAME_COUNT }, (_, index) => {
          context.clearRect(0, 0, FRAME_SIZE, FRAME_SIZE);
          context.drawImage(
            sprite,
            (index % COLUMNS) * FRAME_SIZE,
            Math.floor(index / COLUMNS) * FRAME_SIZE,
            FRAME_SIZE,
            FRAME_SIZE,
            0,
            0,
            FRAME_SIZE,
            FRAME_SIZE,
          );
          return canvas.toDataURL("image/png");
        });
        syncPlayback();
      } catch {
        failed = true;
        stop();
      }
    };
    sprite.onerror = () => {
      failed = true;
      stop();
    };

    document.addEventListener("visibilitychange", syncPlayback);
    reducedMotion.addEventListener("change", syncPlayback);
    syncPlayback();

    return () => {
      disposed = true;
      stop();
      sprite.onload = sprite.onerror = null;
      document.removeEventListener("visibilitychange", syncPlayback);
      reducedMotion.removeEventListener("change", syncPlayback);
    };
  }, []);

  return <link ref={iconRef} rel="icon" type="image/png" sizes="32x32" href={STILL_ICON} />;
}
