import React from 'react'
import { useEffect, useState } from "react";

const Test = (props: any) => {

    const handleShow = () =>{
      window.scrollTo(window.scrollX, window.scrollY + 2)
    }
    useEffect( () =>{

        window.addEventListener("scroll", handleShow );

    }, []);
    
      return (
      <>{props.children}</>
      )
}

export default Test