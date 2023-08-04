import useCreateContext from "./hooks/useCreateContext"
import { Link, useNavigate } from "react-router-dom"

const Dev = () => {

  const { title, message, setTitle, setMessage, addPost, posts} = useCreateContext()

  const getTotal = () => {
    const total = posts.length
    return total
  }

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    addPost()
    setTitle("")
    setMessage("")
    navigate("/home")
    
  }

  return (
    <div className="flex gap-28 h-full">
    <figure className="ml-3 bg-blue-500 flex flex-col">
      <figcaption className="grid place-content-center pb-4 bg-blue-700 pt-2 px-4">{
        posts?.length ? (<>{`${getTotal()} posts in total`}</>) : <>no posts</>
        }</figcaption>
        <div className="overflow-y-auto flex-grow">
          {posts.map((post) => (
          <blockquote>
            <div className="flex m-3 gap-4">
            <span>{post.id}</span>
            <span className="flex flex-col"><Link to={`/dev/${post.id}`}>{post.title}</Link></span>
            </div>
          </blockquote>
          ))}
        </div>
      </figure>
      <form className="grid m-4 place-content-center" onSubmit={handleSubmit}>
        <div className=" my-4 w-96">
          <label htmlFor="devtitle" className="block ">Title:</label>
          <input required type="text" id="devtitle" value={title} autoFocus autoComplete="off" className="w-full bg-blue-400" onChange={(e) => setTitle((e.target.value).toUpperCase())}/>
        </div>
        <div className=" w-96">
          <label htmlFor="devtext" className="block">Message body:</label>
          <textarea required id="devtext" autoComplete="off" cols="30" rows="10" value={message} className="w-full bg-blue-400"  onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <button type="submit"  className="bg-blue-500">send</button>
      </form>
    </div>
  )
}

export default Dev