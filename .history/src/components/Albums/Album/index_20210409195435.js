import React from "react";
import { withStyles } from "@material-ui/core";

class Album extends React.Component {
  render() {
    let { classes } = this.props;
    let cover = require("../../../assets/images/tourguide.jpg");
    let vinyl = require("../../../assets/images/vinyl.png");
    let link =
      "https://open.spotify.com/album/2lXw9UDPCJFWSD0aHyeYOI?highlight=spotify:track:2Bkd7kn4fPPupJlovelIDf";

    const openInNewTab = () => {
      const newWindow = window.open(link, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    };
    return (
      <div className={classes.albumContainer}>
        <div className={classes.album} onClick={openInNewTab}>
          <img className={classes.cover} src={this.props.cover} />
          <img className={classes.vinyl} src={vinyl} />
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  albumContainer: {
    // border: "solid 1px #ff0000",
    width: "400px",
    overflow: "visible",
    height: "400px",
  },
  album: {
    width: "400px",
    height: "400px",
    position: "relative",
    transition: "500ms",
    top: "0",

    "&:hover": {
      width: "550px",
      cursor: "pointer",
      top: "-10px",
    },
  },
  cover: {
    borderRadius: "2.5px",
    height: "100%",
    position: "absolute",
    float: "left",
  },
  vinyl: {
    height: "100%",
    float: "right",
  },
});

export default withStyles(styles)(Album);
