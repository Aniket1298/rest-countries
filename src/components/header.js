import React, { useEffect, useState } from "react"
import "./style.css"
import moon from '../design/moon.svg'
import color from './colors'

export default function Header(props){
    const [theme,setTheme] = useState(color.lightitem);
    function changetheme(){
        if(props.mode=="light"){
          setTheme(color.darkitem)
        }
        else{setTheme(color.lightitem)}
      }
    return(
        <div className="header" style={{backgroundColor:theme}}>
            <h3  style={{color: props.mode=="dark" ? "white":"black"}}>
                Where in the world?
            </h3>
            <div className="darkmode" onClick={() => {props.changetheme();changetheme()}}>
            <img src={moon} className="App-logo" alt="logo"  />
                <h3 style={{color: props.mode=="dark" ? "white":"black"}}>
                    Dark Mode
                </h3>
            </div>
            
        </div>
    )
}