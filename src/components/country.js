import React from 'react'
import './country.css'
function Item(props){
    return(
        <div style={{display:'flex',flexDirection:'row',justifyContent:"inherit"}}>
            <p style={{marginBottom:"-10px",fontWeight:"550",fontSize:"100%",color:"hsl(200, 15%, 8%)",}}>
                {props.tag}:{"  "}
            </p>
            <p style={{marginBottom:"-10px",fontWeight:"300",fontSize:"100%",color:"hsl(200, 15%, 8%)"}}>
                {props.value}
            </p>
        </div>
    )
}
export default function Country(props){
    return(
        <div className="Country">
            <img src={props.flag} style={{width:"100%",height:"40%",objectFit:"cover"}}/>
            <div className="detail">
                <h style={{fontSize:"120%",fontWeight:"800",marginBottom:"-20px"}}>{props.name}</h>
                <Item tag={"Population"} value={props.population}/>
                <Item tag={"Region"} value={props.region}/>
                <Item tag={"Capital"} value={props.capital}/>
               
            </div>
        </div>
    )
}
