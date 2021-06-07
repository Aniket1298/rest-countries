import React, { useEffect, useState } from "react"
import "./style.css"
import moon from '../design/moon.svg'
import color from './colors'
function Modeicon(props){
    if (props.mode=="light"){
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
</svg>
        )
    }
    return(
        <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="20" fill="white" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
</svg>
    )
}
export default function Header(props){
    const [theme,setTheme] = useState(color.lightitem);
    const [moon,setMoon] = useState()
    function changetheme(){
        if(props.mode=="light"){
          setTheme(color.darkitem)
        }
        else{setTheme(color.lightitem)}
      }
    return(
        <div className="header" style={{backgroundColor:theme}}>
            <h4  style={{color: props.mode=="dark" ? "white":"black"}}>
                Where in the world?
            </h4>
            <div className="darkmode" onClick={() => {props.changetheme();changetheme()}}>
            <Modeicon mode={props.mode}/>
                <h4 style={{color: props.mode=="dark" ? "white":"black"}}>
                    Dark Mode
                </h4>
            </div>
            
        </div>
    )
}