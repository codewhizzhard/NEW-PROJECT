import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import   {faCoins, faHomeAlt, faShoppingBasket, faMoneyBillAlt, faCommenting, faCartPlus, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import useCreateContext from './hooks/useCreateContext'

const Navbar = ({ handleColorMode, colorMode, state}) => {


  return (
    <>
    { state && 
    <div className='bg-red-700 w-52 flex flex-col gap-10 h-full relative'>
      <div className='card border-t-0 hover:border-slate-600 shadow-xl shadow-slate-950'>
        <Link to={"/home"}>
          <span className='mr-2 font-bold text-xl pl-5'>HOME</span>
          <FontAwesomeIcon icon={faHomeAlt}  size='lg' className='text-white font'/>
        </Link> 
      </div>
      <div className='card hover:border-slate-600 shadow-xl shadow-slate-950'>
        <Link to={"/bank"}>
          <span className='mr-2 font-bold text-xl  pl-5'>BANK</span>
          <FontAwesomeIcon icon={faCoins}  size='xl' className='text-white fa-flip'/>
        </Link>
      </div>
      <div className='drop'>
        <div className='card hover:border-slate-600 shadow-xl shadow-slate-950 border-t'>
          <Link to={"/market"}>
            <span className='mr-2 font-bold text-xl  pl-5'>MARKET</span>
            <FontAwesomeIcon icon={faShoppingBasket}  size='xl' className='text-white font'/>
          </Link>
        </div>
        <div className='dropdown shadow-xl shadow-slate-950'>
          <ul >
            <Link to={"market/buyer"}>
              <li className='hover:underline hover:text-gray-800' >
                BUYER
                <FontAwesomeIcon icon={faCartPlus} />
              </li>
            </Link>
            <Link to={"market/seller"}>
              <li className='hover:underline hover:text-gray-800' >
                SELLER
                <FontAwesomeIcon icon={faShoppingCart} />
                </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className='card hover:border-slate-600 shadow-xl shadow-slate-950'>
        <Link to={"/trade"}>
          <span className='mr-2 font-bold text-xl pl-5'>TRADE</span>
          <FontAwesomeIcon icon={faMoneyBillAlt}  size='xl' className='text-white font'/>
        </Link>
      </div>
      <div className='card hover:border-slate-600 shadow-xl shadow-slate-950'>
        <Link to={"/chat"}>
          <span className='mr-2 font-bold text-xl  pl-5'>CHAT</span>
          <FontAwesomeIcon icon={faCommenting}  size='xl' className='text-white font '/>
        </Link>        
      </div>
        <div className='card border-slate-600 absolute bottom-0 w-full  shadow-xl shadow-slate-950 ' onClick={handleColorMode}>
          <span className='mr-2 font-bold text-xl pl-5'>Dark mode</span>
          <span className={colorMode ? "modebtn" : "colormode"}>
            <span className={colorMode ? "dark" : "white"}></span>
          </span>
        </div> 
    </div> 
    }</>
  )
}

export default Navbar
