import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Project = ({ project }) => {
  return (
    <Box sx={{ mb: 15 }}>
      <Grid container spacing={4}>
        <Grid
          container
          item
          xs="12"
          sm="6"
          gap={2}
          order={{ xs: 2, sm: 1 }}
          alignContent={"start"}
        >
          <Typography variant="h5" textAlign={"left"}>
            {project.title}
          </Typography>

          <Grid container spacing={0} gap={1}>
            {project.techUsed.map((tech) => (
              <Button sx={{ textTransform: "none" }} size="small">
                {tech}
              </Button>
            ))}
          </Grid>
          <Typography textAlign={"left"} sx={{ color: "text.secondary" }}>
            {project.description}
          </Typography>

          <Button variant="outlined" target="_blank" href={project.ghLink}>
            view github
          </Button>
          {project.liveLink && (
            <Button variant="outlined" target="_blank" href={project.liveLink}>
              live example
            </Button>
          )}
        </Grid>
        <Grid item xs="12" sm="6" order={{ xs: 1, sm: 2 }}>
          <Card
            sx={{
              width: "100%",
              height: 350,
              borderRadius: { sm: 1, md: 4 },
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={project.image}
              sx={{ objectFit: "cover" }}
              alt="project image"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
