import { Link} from "react-router-dom"
import useCreateContext from "./hooks/useCreateContext"

const PostBlog = ({post}) => {
  const { handleClick } = useCreateContext()
  
  return (
    <li>
      <div className="rounded-xl mx-28 my-2 overflow-hidden h-80 flex flex-col ">
        <p className="flex justify-end pr-6 bg-gray-700 p-2">{post.date}</p>
          <div className='overflow-y-auto bg-blue-600 flex-grow flex-cols-2 pt-3 gap-3'>
            <p className="flex justify-center px-2 text-black border-b border-white border-dotted">{post.title}</p>
            <p className="p-2 flex place-items-start">{post.message}</p>
          </div>
          <div className="flex justify-start pr-6 bg-gray-700 p-2 gap-4 pl-7 py-3">
            <button onClick={() => handleClick(post.id)} className={post.like ? "text-blue-500" : ""}>{post.like ? "Liked" : "Like"}</button>
            <button><Link to={`/home/${post.id}`}>Comment</Link></button>
        </div>
      </div>
    </li>
  )
}

export default PostBlog
