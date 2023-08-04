import { Link, useParams } from "react-router-dom"
import useCreateContext from "./hooks/useCreateContext"

const BlogPost = () => {
  const { posts, handleClick } = useCreateContext()
  const { id } = useParams()
  const post = posts.filter((post) => (post.id).toString() === id)

  return (
    <div>
      { post?.length ? post.map((post) => (
        <ul key={post.id}>
          <li>
            <div className="rounded-xl mx-3 my-2 overflow-hidden h-64 flex flex-col ">
              <p className="flex justify-end pr-6 bg-gray-700 p-2">{post.date}</p>
              <div className='overflow-y-auto bg-blue-600 flex-grow flex-cols-2 pt-3 gap-3'>
              <p className="flex justify-center px-2 text-black border-b border-white border-dotted">{post.title}</p>
              <p className="p-2 flex place-items-start">{post.message}</p>
              </div>
                <form  className="flex justify-start pr-6 bg-gray-700 p-2 gap-4 pl-7 py-3">
                  <button onClick={() => handleClick(post.id)} className={post.like ? "text-blue-500" : ""}>{post.like ? "Liked" : "Like"}</button>
                  <input type="text" autoFocus className="mx-5 text-black"/>
                  <button type="submit">submit</button>
                  <b><Link to={"/home"} className="">back</Link></b>
                </form>
              </div>
          </li>
        </ul>
      )) :
      (
        <div>
          <b className="text-white">no post to display</b>
        </div>
      )
      }
    </div>
      
  )
}

export default BlogPost
