import "../App.css";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.css";
import { tags, videos } from "../mock/mock";
import { Link } from "react-router-dom";

function App() {
  const tagLimit =
    window.innerWidth < 480 ? 6 : window.innerWidth < 750 ? 14 : tags.length;

  const renderVideos = (title) =>{
    return <div className="videoContainer">
        <span>{title}</span>
        <div
          className="videoList"
          style={
            window.innerWidth < 500
              ? { justifyContent: "center" }
              : { justifyContent: "left" }
          }
        >
          {videos.filter((v,i)=>(window.innerWidth < 480 && i<3) || (v && window.innerWidth > 480 && i<20)).map((video, index) => (
              <Link
                className="video"
                style={
                  window.innerWidth < 500
                    ? { minWidth: "90%" }
                    : { minWidth: "250px" }
                }
                to={`vid/${video.id}`}
                key={index}
              >
                <img className="videoImg" src={video.img} />
                <p className="videoTitle">{video.title}</p>
                <p className="videoContent">Views: {video.views}</p>
                <p className="videoContent">{video.uploaded}</p>
                <p className="videoDuration">{video.duration} min</p>
              </Link>
          ))}
        </div>
      </div>
  }
  return (
    <div>
      <Nav />
      <div className="tagContainer">
        {tags.map(
          (tag, index) =>
            index < tagLimit && (
                <Link key={index} className="tag" to={`/tag/${tag.name.toLowerCase()}`}>{tag.name}</Link>
            )
        )}
      </div>
      {renderVideos('Most popular')}
      {renderVideos('Latest')}
    </div>
  );
}

export default App;
