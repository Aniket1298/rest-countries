import {useState,useEffect} from "react"
import color from './colors'
export default function Detail(props){
    const [data, setData] = useState([])
    const [theme,setTheme]=useState("")
    
    return(
        <div className="Detail">
            <div className="back">

            </div>
            <div className="country">
                <img src={props.flag} style={{width:"100%",height:"40%",objectFit:"cover"}}/>
            </div>
        </div>
    )
}