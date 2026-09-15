import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 * The site's standard link: an arrow prefix, accent colour, underline on hover.
 * Routes internally when given `to`, opens a new tab when given `href`.
 */
const ArrowLink = ({ to, href, children, sx, ...props }) => {
  const routing = Boolean(to);

  return (
    <Link
      {...(routing
        ? { component: RouterLink, to }
        : { href, target: "_blank", rel: "noreferrer" })}
      sx={{
        fontSize: "clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)",
        whiteSpace: "nowrap",
        "&::before": { content: '"\\2192\\00a0\\00a0"' },
        "&:focus-visible": { outline: "2px solid", outlineColor: "primary.main", outlineOffset: 3 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ArrowLink;
