import { Link } from 'react-router-dom'
import useCreateContext from './hooks/useCreateContext'

const Login = () => {

  const { login, username, setUsername, email, password, setEmail, setPassword} = useCreateContext()
  const allData = username && password && email
  
  return (
    <div className='h-full bg-inherit grid place-items-center'>
      <form onSubmit={(e) => e.preventDefault()} className='bg-blue-600 h-[90%] w-[75%] rounded-full grid place-content-evenly border-8 border-gray-400'>
        <article>
          <label htmlFor="log"></label>
          <input type="text" required placeholder='wixwiz' className='text-black' value={username} onChange={(e) => setUsername(e.target.value)}/>
        </article><article>
          <label htmlFor="log"></label>
          <input type="email" required placeholder='wix@gmail.com' className='text-black' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </article>
        <article>
          <label htmlFor="log"></label>
          <input type="password" required placeholder='password' className='text-black' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </article>
        <Link to={"/home"}><button disabled={!username || !email || !password ? true : false} className={!allData ? "sub" : "sub-active"} onClick={login}> login </button> </Link>
        <p className='text-gray-400'>have no account sign up as a <Link to={"/signup"}><b className='hover:text-blue-300'>member</b></Link></p>
      </form>
    </div>
  )
}

export default Login
