import "./Topic.css";

export default function Topic() {
  return (
    <div className="Topic-container">
      <div className="Topic-image-container"></div>
      <div className="Topic-words-container">
        <h2>Title</h2>
        <div className="Description-container">
          <h3>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut r
            sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."
          </h3>
        </div>
        <div className="Learn-more-container">
          <div>acorn</div>

          <p>Learn more</p>
          <div>arrow</div>
        </div>
      </div>
    </div>
  );
}
