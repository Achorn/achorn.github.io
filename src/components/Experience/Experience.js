import React from "react";
import "./experience.css";

import myadcenterImg from "../../assets/img/myadcenter.jpg";
import nighTechnologiesImg from "../../assets/img/nigh-technologies.png";
import cuBoulderImg from "../../assets/img/cu-boulder.png";
import aircoverImg from "../../assets/img/aircover.png";
import { Box, Grid, Typography } from "@mui/material";

const Experience = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <JobComponent
        date={"Sep 2021 - May 2023 · 1 yr 9 mos"}
        className="Job-component"
        image={aircoverImg}
        company={"Aircover"}
        title={"Junior Software Engineer"}
        description={
          "Translate Figma designs into web pages with reusable maintainable components. Implemented MVVM design pattern on projects to separate the UI, models, and controllers. Wrote unit and integration tests alongside all new features and updates."
        }
      />
      <ConnectorLine />
      <JobComponent
        date={"Jan 2021 - Jun 2021 · 6 mos"}
        className="Job-component"
        image={nighTechnologiesImg}
        company={"Nigh Technologies"}
        title={"Software Developer"}
        description={
          "Designed pages for both web and mobile apps using figma. Developing apps with React (Javascript) for our web app and Flutter (Dart) for our mobile app (iOS and Android). Using Jira and Scrum methodology, I ran weekly sprints and kept our team of 6 on target. "
        }
      />
      <ConnectorLine />
      <JobComponent
        date={"May 2020 - Sep 2020 · 5 mos"}
        className="Job-component"
        image={myadcenterImg}
        company={"Myadcenter"}
        title={"SE Intern"}
        description={
          "Created Reusable Components using React Javascript and Material UI, Including Redux to easily manage out application state. Customized existing HMTL/CSS to match design mocks on Figma."
        }
      />
      <ConnectorLine />
      <JobComponent
        className="Job-component"
        date={"Jan 2019 - May 2019 · 5 mos"}
        image={cuBoulderImg}
        company={"CU Boulder"}
        title={"Data Structures CA"}
        description={
          "A great experience learning how to communicate code in order to help students with their assignments. "
        }
      />
      {/* </div> */}
    </Box>
  );
};

function JobComponent({ date, image, company, title, description }) {
  return (
    <div>
      <div className="Job-component">
        <div className="Job-image-container">
          <img src={image} className="Job-image" alt="logo" />
        </div>
        <div className="Job-title-description">
          <Grid container gap={1}>
            <Grid
              container
              sx={{
                textAlign: "left",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 1, sm: 2 },
              }}
            >
              <Typography fontWeight={700}>{company.toUpperCase()}</Typography>
              <Typography sx={{ textAlign: "left" }}>{title}</Typography>
            </Grid>
            <Typography sx={{ textAlign: "left" }}> {date}</Typography>
            <Typography
              sx={{
                color: "text.secondary",
                textAlign: "left",
              }}
            >
              {description}
            </Typography>
          </Grid>
        </div>
      </div>
    </div>
  );
}

function ConnectorLine() {
  return <div className="Connector-line"></div>;
}

export default Experience;
