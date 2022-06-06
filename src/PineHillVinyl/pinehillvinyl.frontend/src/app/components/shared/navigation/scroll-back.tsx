import { useEffect } from "react";
import { useLocation } from "react-router";


// React Router Dom no longer ships default scroll management.
// Scroll restoration needs to be handled.

const ScrollBack = (props : any) => {
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [useLocation()]);
  
    return (
    <>{props.children}</>
    )
}

export default ScrollBack


