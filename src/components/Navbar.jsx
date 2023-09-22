import { Avatar } from "@mui/material";
import { useNavigate } from "react-router";
import "../css/navbar.css"
import Logo from "../assets/transparentlogo.png"
import Avatar1 from "../assets/resimm.jpg"

function Navbar() {
    const navigate = useNavigate();
    const handleLinkClick = (url) => {
        navigate(url);
      };
  return (
    <div className="navbar">
    <img style={{width:"7vh",height:"7vh"}} src={Logo}/>
    <button style={{backgroundColor:"transparent",boxShadow:"none"}}   onClick={()=>handleLinkClick("/about")}>Hakkımızda</button>
    <button  onClick={()=>handleLinkClick("/contact")}>İletişim</button>
    <button  onClick={()=>handleLinkClick("/register")}>Kaydol/Giriş Yap</button>
    <Avatar alt="Beyza Nur TURAN" src={Avatar1}/>


  </div>
  )
  

}

export default Navbar;
