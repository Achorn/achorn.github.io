/**
 * Top-level routes, in the order they appear in the nav bar.
 * `external` items leave the app instead of routing through the router.
 *
 * Music is hidden from the nav for now — the /music route and its page are
 * still live, so uncommenting the line below is all it takes to bring it back.
 */
const navigation = [
  { label: "about", to: "/about" },
  { label: "projects", to: "/projects" },
  { label: "experience", to: "/experience" },
  // { label: "music", to: "/music" },
  { label: "art", to: "/art" },
  { label: "blog", href: "https://joshuaachorn.com/blog/", external: true },
];

export default navigation;
