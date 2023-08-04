import HomeHeader from "./HomeHeader"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import useCreateContext from "./hooks/useCreateContext"


const Layout = () => {
  const {colorMode, handleColorMode, state, handleState, mount} = useCreateContext()
  return (
    <div className="flex flex-col h-screen">
      <div>
        <HomeHeader handleState={handleState} mount={mount}/>
      </div>
      <div className="flex flex-grow h-[88vh]">
        <div><Navbar handleColorMode={handleColorMode} colorMode={colorMode} state={state}/></div>
        <div className={colorMode ? "mod" : "mod-col"}><Outlet /></div>
      </div>
    </div>
  )
}

export default Layout
