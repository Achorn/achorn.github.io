import aircoverImg from "../assets/img/aircover.png";
import nighTechnologiesImg from "../assets/img/nigh-technologies.png";
import myadcenterImg from "../assets/img/myadcenter.jpg";
import cuBoulderImg from "../assets/img/cu-boulder.png";

/** Professional history, most recent first. Rendered as a timeline on /experience. */
export const jobs = [
  {
    id: "aircover",
    company: "Aircover",
    title: "Full-Stack Engineer",
    date: "Sep 2021 - May 2023 · 1 yr 9 mos",
    image: aircoverImg,
    description:
      "Translated Figma designs into web pages with reusable, maintainable components. Implemented the MVVM pattern to separate UI, models, and controllers. Wrote unit and integration tests alongside all new features and updates.",
  },
  {
    id: "nigh-technologies",
    company: "Nigh Technologies",
    title: "Software Developer",
    date: "Jan 2021 - Jun 2021 · 6 mos",
    image: nighTechnologiesImg,
    description:
      "Designed pages for both web and mobile apps in Figma, then built them with React for the web app and Flutter for iOS and Android. Using Jira and Scrum, I ran weekly sprints and kept our team of six on target.",
  },
  {
    id: "myadcenter",
    company: "Myadcenter",
    title: "SE Intern",
    date: "May 2020 - Sep 2020 · 5 mos",
    image: myadcenterImg,
    description:
      "Created reusable components with React and Material UI, using Redux to manage application state. Customized existing HTML/CSS to match design mocks in Figma.",
  },
  {
    id: "cu-boulder-ca",
    company: "CU Boulder",
    title: "Data Structures CA",
    date: "Jan 2019 - May 2019 · 5 mos",
    image: cuBoulderImg,
    description:
      "Reinforced data structures fundamentals by helping students work through their assignments.",
  },
];

export default jobs;
