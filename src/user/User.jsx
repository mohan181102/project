import React from "react";
import { useParams } from "react-router-dom";
import './User.css'


function User(){
    const {useid} = useParams("")
    return(
        <>
        
        <div className="user"> User:{useid} </div>

        </>
    )
}

export default User