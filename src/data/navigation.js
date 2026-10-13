/**
 * Top-level routes, in the order they appear in the nav bar.
 * `external` items leave the app instead of routing through the router.
 *
 * Music and art are held back for now: both routes and pages are still live,
 * so uncommenting a line below is all it takes to bring either back. Art is
 * out because its gallery is empty and renders a placeholder.
 */
const navigation = [
  { label: "about", to: "/about" },
  { label: "projects", to: "/projects" },
  { label: "experience", to: "/experience" },
  // { label: "music", to: "/music" },
  // { label: "art", to: "/art" },
  { label: "blog", href: "https://joshuaachorn.com/blog/", external: true },
];

export default navigation;
