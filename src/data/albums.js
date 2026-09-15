import redVinyl from "../assets/img/albums/redVinyl.png";
import blackVinyl from "../assets/img/albums/vinyl.png";
import tourGuideCover from "../assets/img/albums/tourguide.jpg";
import wallsCover from "../assets/img/albums/top.jpeg";
import fallingDownCover from "../assets/img/albums/fallingDown.png";

/** Records, newest first. Each links straight out to Spotify. */
const albums = [
  {
    id: "tour-guide",
    title: "Tour Guide",
    year: "2022",
    cover: tourGuideCover,
    vinyl: redVinyl,
    link: "https://open.spotify.com/album/597CokgLwfbNduqCmb5WRD?si=jpjmjznJRDGkkXZsbYjUog",
  },
  {
    id: "walls",
    title: "Walls",
    year: "2022",
    cover: wallsCover,
    vinyl: blackVinyl,
    link: "https://open.spotify.com/album/0hd6tcy3eXIruVQ1T4mXA0?si=IWtPffkeSDCzNEL2VeZYiw",
  },
  {
    id: "falling-down",
    title: "Falling Down",
    year: "2020",
    cover: fallingDownCover,
    vinyl: blackVinyl,
    link: "https://open.spotify.com/album/2lXw9UDPCJFWSD0aHyeYOI?si=zMKUG1apR6OXw-yMRRsxrQ",
  },
];

export default albums;
