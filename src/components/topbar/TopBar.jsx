import { useNavigate } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
  const navigate= useNavigate()
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem" onClick={()=>navigate("/")}>HOME</li>
                <li className="topListItem" onClick={()=>navigate("/about")}>ABOUT</li>
                <li className="topListItem" onClick={()=>navigate("/contact")}>CONTACT</li>
                <li className="topListItem" onClick={()=>navigate("/write")}>WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" onClick={()=>navigate("/register")}/>
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
