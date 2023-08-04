import Home from "./Home"
import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Bank from "./Bank"
import Market from "./Market"
import Buyer from "./Buyer"
import Seller from "./Seller"
import Trade from "./Trade"
import Chat from "./Chat"
import Missing from "./Missing"
import About from "./About"
import Dev from "./Dev"
import Setting from "./Setting"
import BlogPost from "./BlogPost"
import Edit from "./Edit"
import Login from "./Login"
import Signup from "./Signup"

function App() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />}/> 
          <Route path="home/:id"  element={<BlogPost />}/>
          <Route path="setting" element={<Setting />} />
          <Route path="dev" element={<Dev />} />
          <Route path="dev/:checkId" element={<Edit />} />
          <Route path="about" element={<About />} />
          <Route path="bank" element={<Bank />} />
          <Route path="market">
            <Route index element={<Market />} />
            <Route path="buyer" element={<Buyer />} />
            <Route path="seller" element={<Seller />} />
          </Route>
          <Route path="trade" element={<Trade />} />
          <Route path="chat" element={<Chat />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes> 
  
  )
}

export default App
