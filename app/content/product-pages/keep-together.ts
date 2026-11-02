/**
 * Returns the value with every piece of text adjusted so that a line never
 * breaks inside "0.1 mm", "45–60" or "B.P. Engineers".
 */
export function keepTogether<T>(value: T): T {
  if (typeof value === "string") {
    return value
      .replace(/(\d) (mm|HRC|days|sets)\b/g, "$1 $2")
      .replace(/(\d)–(\d)/g, "$1⁠–⁠$2")
      .replace(/B\.P\. Engineers/g, "B.P. Engineers") as T;
  }
  if (Array.isArray(value)) return value.map((item: unknown) => keepTogether(item)) as T;
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, keepTogether(item)])) as T;
  }
  return value;
}
