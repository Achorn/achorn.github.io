import "./Topic.css";
import selfie from "../../assets/selfie.jpg";
import { ReactComponent as Acorn } from "../../assets/acorn.svg";
import { FiChevronRight } from "react-icons/fi";

export default function Topic() {
  return (
    <div className="Topic-container">
      <div className="Topic-image-container">
        <img src={selfie} className="Hero-image" alt="logo" />
      </div>
      <div className="Topic-words-container">
        <h2 className="Topic-title">Title</h2>
        <div className="Description-container">
          <h3 className="Topic-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut r
            sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."
          </h3>
        </div>
        <div className="Learn-more-container">
          <div>
            <Acorn height={"50px"} />
          </div>

          {/* <p>Learn more</p> */}
          <div>{<FiChevronRight height={"50px"} />}</div>
        </div>
      </div>
    </div>
  );
}
