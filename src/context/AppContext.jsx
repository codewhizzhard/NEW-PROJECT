import { createContext } from "react";
import { useState, useEffect } from "react";
import api from "../api";
import { format } from "date-fns"

const AppContext = createContext({})

export const ContextProvider = ({children}) => {
  const [state, setState] = useState(false)
  const [mount, setMount] = useState(false)

  const [posts, setPosts] = useState([])
  const [getError, setGetError] = useState(null)
  
  const [colorMode, setColorMode] = useState(true)

  const [message, setMessage] = useState("")
  const [title, setTitle] = useState("")

  const [editMessage, setEditMessage] = useState("")
  const [editTitle, setEditTitle] = useState("")
  
  const [prompt, setPrompt] = useState()
  const [username, setUsername] = useState("")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/posts")
        setPosts(response.data)
      } catch(err) {
        console.log(err.status)
      }
    }
    fetchData()
  }, [])

  const login = () => {
    setState(true)    
    setUsername("")
    setEmail("")
    setPassword("")
    setMount(true)
  }
  const handleState = () => {
    setState((state) => !state)}

  const handleColorMode = () => {
    setColorMode(value => !value)
  }
  const handleCheck = () => {
    console.log("still working on it")
  }
  const handleDelete = async(id) => {
    const deletePost = posts.filter((post) =>post.id !== id)
    setPosts(deletePost)
    await api.delete(`/posts/${id}`)
    
  }
  const handlePrompt = () => {
    setPrompt((prompt) => !prompt)
  }
  const handleEdit = async(id) => {
    const date = format(new Date(), "MMMM dd, yyyy pp")
    const edit = {id, date, title: editTitle, message:editMessage, like: false, comment: {}}
    try {
      const response = await api.put(`/posts/${id}`, edit)
      setPosts(posts.map((post) => post.id === id ? {...response.data} : post))
    } catch(err) {

    } finally {
      setPrompt(false)
    }
  }
  const handleClick = async(id) => {
    const post = posts.map((post) => (
      post.id === id ? {...post, like: !post.like}: post 
    ))
    setPosts(post)
    try {
      const myLike = post.filter((post) => post.id === id)
      const response = await api.patch(`/posts/${id}`,{like: myLike[0].like})
    } catch (err) {}
  }
  const addPost = async() => {
    const id = posts.length ? posts[posts.length -1].id + 1 : 1 
    const date = format(new Date(), "MMMM dd, yyyy pp")
    const addedPost = {id, date, title, message, like: false, Comment:{}}
    try {
      const response = await api.post("/posts", addedPost)
      const result = [...posts, response.data]
      setPosts(result) } 
      catch(err) {
        if (err.response) {
        setGetError(err.response)
        alert("Check your network\n POST ERROR!!!")}
        if (!err.response) alert("your post has been sent successfully")
      }
    }

  const values = {colorMode, handleColorMode, title, message, setMessage, setTitle, posts, setPosts, addPost, state, setState, handleState, handleClick, handleDelete, editTitle, editMessage, setEditMessage, setEditTitle, handleEdit, handlePrompt, prompt, login, username, setUsername, email, setEmail, password, setPassword, setColorMode, mount, setMount}

  return (
    <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContext