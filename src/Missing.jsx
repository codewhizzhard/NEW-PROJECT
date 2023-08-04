import { Link } from "react-router-dom"
const Missing = () => {
  return (
    <div>
      <b>opps! </b>
      <p>I THINK YOU LOST YOUR WAY</p>
      <p>GO BACK <b className="text-gray-500"><Link to={"/home"}>HOME</Link></b></p>
    </div>
  )
}

export default Missing
