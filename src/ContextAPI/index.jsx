/* eslint-disable react/prop-types */
import { createContext } from "react";

// 1st Step
export const MyBioContext = createContext()

// 2nd Step
export const BioProvider = ({ children }) => { 

    const myName = "Puskar";
    const myAge = 30;
    console.log(children)
    return <MyBioContext.Provider value={{ myName, myAge }}>{children}</MyBioContext.Provider>
}