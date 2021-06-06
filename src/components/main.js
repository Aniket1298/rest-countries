import {useEffect,useState} from 'react'
import Country from './country'
import './main.css'
import {Dropdown,DropdownButton} from 'react-bootstrap'

var style={width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}

export default function Main(props){
    const [data, setData] = useState([])
    const [theme,setTheme]=useState("")

    const url= "https://restcountries.eu/rest/v2/all"
    var filtered
    useEffect(() => {
        //setTheme("hsl(207, 26%, 17%)")
        fetch(url).then(response => response.text().then(text => setData(JSON.parse(text))))
         filtered = data
    },[])

    const country = data.slice(3).map((d) => <Country name={d.name} region ={d.region} population ={""+d.population} flag={d.flag} capital={d.capital}/>)
    return(
        <div style={{paddingLeft: "3%",color:"hsl(0, 0%, 98%)"}}>
            
            <div className="search">
                <input type="text" placeholder="Search for a country" ></input>
            </div>
            
            <div className="main">
             {country}
            </div>
        </div>
        
    )
}