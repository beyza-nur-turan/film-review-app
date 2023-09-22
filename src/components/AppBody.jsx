
import bodypicture from "../assets/body.jpg"
function AppBody() {
  return (
    <div>
      <img style={{backgroundRepeat:"no-repeat",backgroundPosition:"center top", width:"100%",height:"50vh",top:0,position:"relative",objectFit:"revert" ,zIndex:"-1px",left:0,backgroundSize:"cover"}} src={bodypicture}/>
    </div>
  )
}

export default AppBody;
