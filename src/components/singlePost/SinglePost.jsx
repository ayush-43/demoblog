import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div> 
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Ayush</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam ut nisi mollitia adipisci dolorum saepe sunt, debitis est, iure recusandae impedit possimus consequatur ullam officiis necessitatibus aliquid inventore veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae labore aut error sequi quis sapiente obcaecati amet, dignissimos saepe! Explicabo magni fugiat sint dolorum autem corporis consequatur tenetur, delectus assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis ex voluptates sapiente vitae, aut porro id. Eligendi, quis? Laboriosam reiciendis debitis accusamus iusto laudantium veniam animi ipsum id pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae, facere eaque at dolore perferendis rerum sed? Quasi atque rem earum necessitatibus. Nemo recusandae expedita eveniet laboriosam neque, voluptate fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore nobis ut dolore laborum dignissimos ratione mollitia consectetur odit neque. Earum libero ducimus facere pariatur sed? Rem saepe accusantium repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestiae dolores quod doloremque molestias culpa, provident tenetur quaerat, cum eos corrupti non eius alias ipsum enim laboriosam, iure possimus optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem enim reprehenderit.</p>
        </div>
    </div>
  )
}
