import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import navigation from "./data/navigation";
import projects from "./data/projects";
import albums from "./data/albums";
import jobs from "./data/experience";
import social, { support } from "./data/social";
import { experiencePhrase, yearsOfExperience } from "./data/profile";

const renderAt = (route) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );

describe("routing", () => {
  it.each([
    ["/", /i'm joshua/i],
    ["/about", /^about$/i],
    ["/projects", /^projects$/i],
    ["/experience", /^experience$/i],
    ["/music", /^music$/i],
    ["/art", /^art$/i],
  ])("renders %s", (route, heading) => {
    renderAt(route);
    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
  });

  it("falls back to the not-found page for an unknown route", () => {
    renderAt("/nope");
    expect(
      screen.getByRole("heading", { level: 1, name: /^404$/ })
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

  it("keeps hidden projects off the page entirely", () => {
    renderAt("/projects");
    expect(projects.some((project) => project.hidden)).toBe(false);
    expect(screen.queryByRole("heading", { name: /brik brek/i })).not.toBeInTheDocument();
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
      expect(screen.getByText(job.company)).toBeInTheDocument();
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
      screen.getByRole("heading", { level: 1, name: /^experience$/i })
    ).toBeInTheDocument();
  });

  it.each(["music", "art"])(
    "keeps %s out of the nav while its route stays reachable",
    (label) => {
      renderAt("/");
      const nav = screen.getByRole("navigation", { name: "Main" });
      expect(within(nav).queryByRole("link", { name: label })).not.toBeInTheDocument();
    }
  );

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

describe("years of experience", () => {
  it("counts whole years from the first professional role", () => {
    expect(yearsOfExperience(new Date(2026, 8, 14))).toBe(6);
  });

  it("does not claim the anniversary before it lands", () => {
    // Career starts 1 May 2020, so 30 April 2027 is still six years.
    expect(yearsOfExperience(new Date(2027, 3, 30))).toBe(6);
    expect(yearsOfExperience(new Date(2027, 4, 1))).toBe(7);
  });

  it("keeps the singular reading correctly", () => {
    expect(experiencePhrase(new Date(2021, 5, 1))).toBe("1 year");
    expect(experiencePhrase(new Date(2026, 8, 14))).toBe("6 years");
  });

  it("renders the current figure on the home page", () => {
    renderAt("/");
    const phrase = experiencePhrase();
    expect(
      screen.getByText(new RegExp(`${phrase} of\\s+experience`, "i"))
    ).toBeInTheDocument();
  });
});

describe("footer", () => {
  it("gives the coffee link a label of its own, not a bare icon", () => {
    renderAt("/");
    const link = screen.getByRole("link", { name: /buy me a coffee/i });
    expect(link).toHaveAttribute("href", support.href);
  });

  it("keeps the coffee link out of the social icons", () => {
    expect(social.map((item) => item.id)).not.toContain(support.id);
    renderAt("/");
    social.forEach((item) => {
      expect(screen.getByRole("link", { name: item.label })).toBeInTheDocument();
    });
  });
});
