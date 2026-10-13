import inteletravelImg from "../assets/img/inteletravel.webp";
import williamsSonomaImg from "../assets/img/williams-sonoma.webp";
import aircoverImg from "../assets/img/aircover.webp";
import nighTechnologiesImg from "../assets/img/nigh-technologies.webp";
import myadcenterImg from "../assets/img/myadcenter.webp";
import cuBoulderImg from "../assets/img/cu-boulder-logo.webp";

/**
 * Professional history, most recent first. Rendered as a timeline on
 * /experience.
 *
 * Dates are months, "YYYY-MM"; leave `end` null for the current role and the
 * duration keeps counting on its own. `image` and `description` are optional —
 * an entry renders correctly without either.
 */
export const jobs = [
  {
    id: "intelitravel",
    company: "InteliTravel",
    title: "Software Developer",
    start: "2025-11",
    end: null,
    image: inteletravelImg,
    description: "",
  },
  {
    id: "williams-sonoma",
    company: "Williams-Sonoma",
    title: "Software Developer",
    start: "2025-01",
    end: "2025-11",
    image: williamsSonomaImg,
    description: "",
  },
  {
    id: "aircover",
    company: "Aircover",
    title: "Full-Stack Engineer",
    start: "2021-09",
    end: "2023-05",
    image: aircoverImg,
    description:
      "Translated Figma designs into web pages with reusable, maintainable components. Implemented the MVVM pattern to separate UI, models, and controllers. Wrote unit and integration tests alongside all new features and updates.",
  },
  {
    id: "nigh-technologies",
    company: "Nigh Technologies",
    title: "Software Developer",
    start: "2021-01",
    end: "2021-06",
    image: nighTechnologiesImg,
    description:
      "Designed pages for both web and mobile apps in Figma, then built them with React for the web app and Flutter for iOS and Android. Using Jira and Scrum, I ran weekly sprints and kept our team of six on target.",
  },
  {
    id: "myadcenter",
    company: "Myadcenter",
    title: "SE Intern",
    start: "2020-05",
    end: "2020-09",
    image: myadcenterImg,
    description:
      "Created reusable components with React and Material UI, using Redux to manage application state. Customized existing HTML/CSS to match design mocks in Figma.",
  },
  {
    id: "cu-boulder-ca",
    company: "CU Boulder",
    title: "Data Structures CA",
    start: "2019-01",
    end: "2019-05",
    image: cuBoulderImg,
    description:
      "Reinforced data structures fundamentals by helping students work through their assignments.",
  },
];

export default jobs;
