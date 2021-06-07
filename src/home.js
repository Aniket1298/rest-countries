import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import {React,useEffect,useState} from 'react'
import Main from './components/main'
const color = require('./components/colors')
async function getCounties(){
  var country=[]
  const url= "https://restcountries.eu/rest/v2/all"
  
  var data = JSON.parse(await (await (await fetch(url)).text()))[0]
  return data
  /*
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then((responseJson) => {
    // Do something with the response
    console.log("dedfs",responseJson[0])
    country= responseJson
    return country
    console.log("FD",country)
  })
  .catch((error) => {
    console.log(error)
  });
  console.log(country)*/
}
export default function Home() {
  
  //const url= "https://restcountries.eu/rest/v2/all"
  //var country = JSON.parse(await (await (await fetch(url)).text()))
  const [theme,setTheme]=useState("hsl(0, 0%, 98%)")
  const [mode,setMode]=useState('light')
  function changetheme(){
    if(mode=="light"){
      setMode("dark")
      
      setTheme("hsl(207, 26%, 17%)")
    }
    else{setMode("light");setTheme("hsl(0, 0%, 90%)")}
  }
  return (
    <div className="App" style={{backgroundColor:theme,minHeight:window.innerHeight}}>
      <Header mode = {mode} changetheme={changetheme}/>
      <Main mode = {mode} />
    </div>
  );
}

