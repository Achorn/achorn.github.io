import React from "react";
import "./Album.css";

// class Album extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleImageLoaded = this.handleImageLoaded.bind(this);

//     this.state = { imageLoading: true };
//   }

//   handleImageLoaded() {
//     // this.setState({ imageLoading: false });
//     console.log("image loaded");
//   }

//   render() {
//     // let {"} = this.props;

//     const openInNewTab = () => {
//       console.log(this.props.link);
//       if (this.props.link) {
//         console.log("opening link");
//         const newWindow = window.open(
//           this.props.link,
//           "_blank",
//           "noopener,noreferrer"
//         );
//         if (newWindow) newWindow.opener = null;
//       } else alert("coming soon");
//     };
//     return (
//       <div className="Album-container">
//         <div className="Album" onClick={openInNewTab}>
//           {/* <img
//             className="Cover"
//             src={this.props.cover}
//             onLoad={this.state.handleImageLoaded}
//             alt="albumCover"
//           /> */}
//           {/* <img className="Vinyl" src={this.props.vinyl} alt="Vinyl Cover" /> */}
//         </div>
//       </div>
//     );
//   }
// }

const Album = ({ cover, vinyl, handleClick }) => {
  return (
    <div className="Album-container">
      <div className="Album">
        <img className="Vinyl" src={vinyl} alt="Vinyl Cover" />
        <img
          className="Cover"
          src={cover}
          // onLoad={this.state.handleImageLoaded}
          alt="albumCover"
        />
      </div>
    </div>
  );
};

export default Album;
