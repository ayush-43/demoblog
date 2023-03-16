import "./sidebar.css"

export default function Sidebar() {
    return (
        // <div className="sidebar">
        //     sidebar
        // </div>
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="aboutimage" src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto ipsa obcaecati sequi vitae sit harum, quod nesciunt quam, illo ab quis veritatis ex molestiae quidem magni sint cupiditate? Odio?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
