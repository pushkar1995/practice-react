import { useContext } from "react"
import { MyBioContext } from "../ContextAPI/index"

const Home = () => {
    const {myName, myAge}  = useContext(MyBioContext)
  return (
    <div>Calling Context API Here! Hello Context API. My name is {myName}.I am {myAge} years old. </div>
  )
}

export default Home