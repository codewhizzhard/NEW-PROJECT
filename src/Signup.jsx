import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div>
      <form className="grid place-content-center gap-8 pt-10">
        <blockquote>
          <label htmlFor="username" className="block">username:</label>
          <input type="text" id="username" required autoFocus autoComplete="off" />
        </blockquote>
        <blockquote>
          <label htmlFor="email" className="block">email:</label>
          <input type="email" id="email" required autoComplete="off" />
        </blockquote>
        <blockquote>
          <label htmlFor="password" className="block">password:</label>
          <input type="password" id="password" required />
        </blockquote>
        <blockquote>
          <label htmlFor="passcode" className="block">password:</label>
          <input type="password" id="passcode" required />
        </blockquote>
        <button className="hover:text-red-300"><Link to={"/"}>Obtain membership</Link></button>
      </form>
    </div>
  )
}

export default Signup
