import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProjectCard({ title, description, img, alt, link }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        // "& .MuiTypography-body2": {
        //   color: "var(--primary_color",
        // },
      }}
      // style={{
      //   backgroundColor: "var(--bg_color)",
      //   color: "var(--primary_color",
      // }}
    >
      <CardActionArea href={link} target="_blank">
        <CardMedia component="img" height="140" image={img} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// paper root background color

// mui typography root color
