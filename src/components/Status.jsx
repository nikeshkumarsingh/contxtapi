import React,{useContext}from"react";
import {AuthContext}from "../context/AuthContext";
export const Status=()=>{
    const {token,isAuth}=useContext(AuthContext)
    return(
        <div>
            user Status:{isAuth&&token ? "Success":"Failed"}
            <p>Token:{token ? token:"NONE"}</p>
        </div>
    )
}