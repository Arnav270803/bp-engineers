import { type RouteConfig, index, route } from "@react-router/dev/routes";

// One route per page of the original site. ARCHITECTURE.md lists the original
// file each address replaces.
export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("products", "routes/products.tsx"),
  route("gallery", "routes/gallery.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog-article.tsx"),
  route("contact", "routes/contact.tsx"),
  route("quote", "routes/quote.tsx"),
] satisfies RouteConfig;
