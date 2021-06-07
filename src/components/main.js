import {useEffect,useState} from 'react'
import Country from './country'
import './main.css'
import color from './colors'
import Detail from './detail'
var style={width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}

export default function Main(props){
    const [data, setData] = useState([])
    const [theme,setTheme]=useState("")
    const [filtered,setFiltered]=useState([])
    const [country,setCountry]  = useState(false)
    const [searchcolor,setSearchcolor] = useState("black")
    useEffect(()=>{
        if(props.mode=="dark"){
            setSearchcolor("white")
        }
    },"black")

    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
    
    function changecountry(new_country){
        if (new_country){
            setCountry(data.find(({name,}) => name==new_country))
            
        }
        else{setCountry(false)}
        
    }
    
    
    const url= "https://restcountries.eu/rest/v2/all"
    
    useEffect(() => {
        //setTheme("hsl(207, 26%, 17%)")
        fetch(url).then(response => response.text().then(text => setData(JSON.parse(text))))
        setFiltered(data)
      
         
    },[])
    //
    function setAll(){
        setFiltered(data)
    }
    function filterByName(name){
        name=name.toLowerCase()
        if(name){
            setFiltered(data.filter(item => item.name.toLowerCase().includes(name)))
        }
    }
    function filterByRegion(region){
        console.log("region is",region)
        if(region){
            setFiltered(data.filter(item => item.region==region))
        }
    }
    console.log("filter",filtered.length)
    
    const dropmenu = regions.map((name) => <a className="dropdown-item" onClick={()=>filterByRegion(name)}>{name}</a>)
    const alldata = (filtered.length==0?data:filtered).map((d) => <Country name={d.name} region ={d.region} population ={""+d.population} flag={d.flag} capital={d.capital} changecountry={changecountry} mode={props.mode}/>)
    return(
        <div className="mainpage">
             <div style={{paddingLeft: "3%",color:"hsl(0, 0%, 98%)", display:country? "none":""}}>
            <div className="filter">
            <div className="search" style={{backgroundColor:props.mode=="light"?color.lightitem:color.darkitem,marginBottom:"3%"}}>
            &nbsp;
            &nbsp;
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            
            </svg>
            
            &nbsp;
                <input className="search-input" placeholder="Search for a country" style={{outline:"none", backgroundColor:props.mode=="light"?color.lightitem:color.darkitem,color:props.mode=="light"?"black":"white"}} onChange={(e)=> filterByName(e.target.value)} ></input>
            
            </div>
            <div class="dropdown" >
            <button className="btn btn-secondary dropdown-toggle" style={{outline:"none",border:"none", backgroundColor:(props.mode=="light") ? color.lightitem:color.darkitem,color:(props.mode=="dark"?  "white": "black"),borderColor:"white"}}  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter by region
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" onClick={()=>setAll()}>All</a>
                {dropmenu}
            </div>
            </div>
            </div>
            
            <div className="main">
             {alldata}
            </div>
            
        </div>
        {country?<Detail filterByName={filterByName} mode={props.mode} borders={country.borders} changecountry={changecountry} languages={country.languages[0].name} currencies={country.currencies[0].name} subregion={country.subregion} nativeName={country.nativeName} name={country.name} region ={country.region} population ={""+country.population} topleveldomain={country.topLevelDomain} flag={country.flag} capital={country.capital}/>:null}
        
        </div>
       
    )
}