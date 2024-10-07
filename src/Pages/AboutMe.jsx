import { useContext } from "react"
import { MyBioContext } from "../ContextAPI/index"

const AboutMe = () => {
    const {myName, myAge}  = useContext(MyBioContext)
  return (
    <div>Calling Context API Here! Hello Context API. 
        <br />
        My name is {myName}.I am {myAge} years old. 
    </div>
  )
}

export default AboutMe