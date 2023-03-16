import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet consectetur</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente sunt eum error unde possimus, et ullam totam exercitationem illum nobis labore laudantium corporis nihil numquam deleniti reiciendis dignissimos iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente sunt eum error unde possimus, et ullam totam exercitationem illum nobis labore laudantium corporis nihil numquam deleniti reiciendis dignissimos iusto.</p>
    </div>
  )
}
