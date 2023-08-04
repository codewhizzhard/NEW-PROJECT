import { useParams } from "react-router-dom"
import useCreateContext from "./hooks/useCreateContext"

const Edit = () => {

  const { checkId } = useParams()
  const { posts, handleDelete, editTitle, editMessage, setEditMessage, setEditTitle, handleEdit, prompt, handlePrompt } = useCreateContext()
  const post = posts.filter((post) => (post.id).toString() === checkId)

  return (
    <div>
      { post?.length ? 
     ( post.map((post) => 
     <ul key={post.id} className="relative">
        <li>
          <div className="rounded-3xl mx-3 my-2 h-[500px] flex flex-col overflow-hidden">
            <p className="flex justify-end pr-6 bg-gray-700 p-2">{post.date}</p>
            <div className='overflow-y-auto bg-blue-600 flex-grow flex-cols-2 pt-3 gap-3 rounded-b-3xl'>
              <p className="flex justify-center px-2 text-black border-b border-white border-dotted">{post.title}</p>
              <p className="p-2 flex place-items-start">{post.message}</p>
            </div>
            <div className="grid gap-20 grid-cols-2 ml-10 mt-1">
              <b className="p-4 bg-blue-500 w-fit pr-6 rounded-xl hover:cursor-pointer" onClick={handlePrompt}>EDIT</b>
              <b className="p-4 bg-red-500 w-fit rounded-xl hover:cursor-pointer" onClick={() => handleDelete(post.id)}>DELETE</b>
            </div>
          </div>
        </li>
        {
          prompt &&
          <section className="absolute h-full bg-red-500 bottom-0 w-[70%] left-28 border-4">
          <form className="grid place-content-center pt-10" onSubmit={(e) => e.preventDefault()}>
            <article>
              <label htmlFor="edittitle" className="block">Edit Title:</label>
              <input type="text" id="edittitle" required autoFocus className="text-black" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
            </article>
            <article>
              <label htmlFor="editbody" className="block">Edit Body:</label>
              <textarea name="editbody" id="editbody" cols="30" rows="10" className="text-black" value={editMessage} onChange={(e) => setEditMessage(e.target.value)}></textarea>
            </article>
            <button type="submit" onClick={() => handleEdit(post.id)}>submit</button>
          </form>
        </section>
        }
     </ul> )) : (<div>no posts </div>)
      }
    </div>
  )
}

export default Edit
