
import video from "../assets/video.mp4";
import "../css/appBody.css";
function AppBody() {

  
  return (
    <div className="bodyContainer">
      <div className="video-container">
        video alanııı
        <video
          loop
          muted
          autoPlay
          src={video}
          type="video/mp4"
        />
      </div>
      <div className="bodyContent">contentt</div>
      <div className="bodyLower">lowerrr</div>
    </div>
  );
}

export default AppBody;
