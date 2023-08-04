import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import   {faCaretRight, faCircle} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import Post from './Post'
import useCreateContext from './hooks/useCreateContext'

const Home = () => {
  const { posts, setState, setColorMode, setMount } = useCreateContext()

  const navigate = useNavigate("/")
  const logOut = () => {
    alert("you are about to log out")
    setState(false)
    setColorMode(true)
    setMount(false)
    navigate("/")
  }
  return (
     <main className='flex flex-col h-full'>
      <section className='flex relative'>
        <article  className="homeicon">
          <b className="homeicon-info">INFO</b>
          <ul className="home-dropicon w-[103.62px] rounded-b-2xl overflow-hidden ml-1">
            <li className='list'>Sign up</li>
            <li className='list' onClick={logOut}>Log out</li>
          </ul>
        </article>
        <article className="homeicon">
          <b className="homeicon-info">STATUS</b>
          <ul className="home-dropicon w-[126.5px] rounded-b-2xl overflow-hidden">
            <li className='list'>
              <Link to={"setting"}>Settings</Link>
              </li>
            <li className='list relative'>
              <span className='message rounded-full w-6 h-6 bg-red-700 place-content-center absolute top-0 right-0 text-sm drop-shadow-sm'>10</span>
              Notify
              </li>
            <li className='list'><Link to={"/dev"}>Dev Blog</Link></li>
          </ul>
        </article>
        <article className="homeicon">
        <b  className="homeicon-info">ABOUT</b>
        <ul className="home-dropicon rounded-2xl overflow-hidden mr-10">
          <li className='border-dotted border-b w-full flex justify-center aboutlist'>
            <h1>RHEACT LOGIN</h1>
          </li>
          <li className='border-dotted border-b p-[1.5rem] '>
            <p className='h-full'>
            This is a web application that makes you type in post to the home section, you can delete, edit it in the dev part of the home, and the home component is the only component that works better for now, most of it is still under construction even the darkmode button, but the construction is still going on perfectly
            </p>
          </li>
            <li className='p-[0.5rem] bg-white text-black border-dotted border-b w-full flex justify-end'>
              <p>
                READ MORE
                <Link to={"/about"}>
                  <FontAwesomeIcon icon={faCaretRight} size='xl'  className='ml-5 hover:text-red-700'/>
                </Link>
              </p>
            </li>
          </ul>
        </article>
      </section>
      <section className='bg-slate-400 flex-grow mt-2 border-dotted border-white border rounded-2xl flex flex-col'>
        <blockquote className='border-b border-dashed p-2'>
          <span className='w-10 h-full rounded-full mr-2'>
            <FontAwesomeIcon icon={faCircle} size='sm'/>
          </span>
          <span className='w-10 h-10 rounded-full mr-2'>
            <FontAwesomeIcon icon={faCircle} size='sm'/>
          </span>
          <span className='rounded-full mr-2'>
            <FontAwesomeIcon icon={faCircle} size='sm'/>
          </span>
        </blockquote>
        <blockquote className='overflow-y-auto flex-grow h-10 max-h-full flex flex-col'>
          <article className='pt-2'>
            {posts.length ? <Post posts={posts}/> : <div className='flex justify-center'><b className='grid place-items-center'>No posts to display, go to the dev blog, in the status to post, or check your internet connection to access your post</b></div>}
          </article>
        </blockquote>
      </section>
    </main>
  )
}

export default Home