import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const Logincontext = createContext();

export const Loginprovider = (props) => {
    const [islogged, setlogged] = useState(false);
    useEffect(() => {

        const logcheck =  async () => {
            await axios.get("http://localhost:8080", { withCredentials: true })
        }
    }, [])
    return (

        <Logincontext.Provider>
            {props.children}
        </Logincontext.Provider>)
}