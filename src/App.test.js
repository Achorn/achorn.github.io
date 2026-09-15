import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import navigation from "./data/navigation";
import projects from "./data/projects";
import albums from "./data/albums";
import jobs from "./data/experience";

const renderAt = (route) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );

describe("routing", () => {
  it.each([
    ["/", /I'm Joshua/i],
    ["/about", /^About$/],
    ["/projects", /^Projects$/],
    ["/experience", /^Experience$/],
    ["/music", /^Music$/],
    ["/art", /^Art$/],
  ])("renders %s", (route, heading) => {
    renderAt(route);
    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
  });

  it("falls back to the not-found page for an unknown route", () => {
    renderAt("/nope");
    expect(
      screen.getByRole("heading", { level: 1, name: /nothing here/i })
    ).toBeInTheDocument();
  });
});

describe("content", () => {
  it("lists every project on /projects", () => {
    renderAt("/projects");
    projects.forEach((project) => {
      expect(
        screen.getByRole("heading", { level: 2, name: project.title })
      ).toBeInTheDocument();
    });
  });

  it("lists every album on /music", () => {
    renderAt("/music");
    albums.forEach((album) => {
      expect(
        screen.getByRole("link", { name: `${album.title} on Spotify` })
      ).toBeInTheDocument();
    });
  });

  it("lists every job on /experience", () => {
    renderAt("/experience");
    jobs.forEach((job) => {
      expect(screen.getByText(job.company.toUpperCase())).toBeInTheDocument();
    });
  });
});

describe("navigation", () => {
  it("renders a nav link per entry and marks the current page active", () => {
    renderAt("/projects");
    const nav = screen.getByRole("navigation", { name: "Main" });

    navigation.forEach((item) => {
      expect(within(nav).getByRole("link", { name: item.label })).toBeInTheDocument();
    });

    expect(within(nav).getByRole("link", { name: "projects" })).toHaveClass("active");
  });

  it("navigates between pages without a reload", () => {
    renderAt("/");

    const nav = screen.getByRole("navigation", { name: "Main" });
    fireEvent.click(within(nav).getByRole("link", { name: "experience" }));

    expect(
      screen.getByRole("heading", { level: 1, name: /^Experience$/ })
    ).toBeInTheDocument();
  });

  it("keeps music out of the nav while its route stays reachable", () => {
    renderAt("/");
    const nav = screen.getByRole("navigation", { name: "Main" });
    expect(within(nav).queryByRole("link", { name: "music" })).not.toBeInTheDocument();
  });

  it("points the blog link off-site", () => {
    renderAt("/");
    const nav = screen.getByRole("navigation", { name: "Main" });
    const blog = within(nav).getByRole("link", { name: "blog" });
    expect(blog).toHaveAttribute("href", "https://joshuaachorn.com/blog/");
  });
});

describe("color mode", () => {
  it("toggles between light and dark", () => {
    renderAt("/");

    const toggle = screen.getByRole("button", { name: /switch to dark mode/i });
    fireEvent.click(toggle);

    expect(
      screen.getByRole("button", { name: /switch to light mode/i })
    ).toBeInTheDocument();
    expect(window.localStorage.getItem("color-mode")).toBe("dark");
  });
});
