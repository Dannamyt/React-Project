import React,{ Component } from "react";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
class App extends Component {
  constructor(){
    super()
    
  console.log('constructor')
   
   this.state = {
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    console.log('componentMount')
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json() )
    .then((users)=> this.setState(()=>{
      return {monsters: users}
    }))
    }
  
  render(){
    console.log('render')
    const filteredMonster = this.state.monsters.filter((monster)=>
      {return monster.name.toLowerCase().includes(this.state.searchField)
      })
    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="search monsters"
        
        onChange={(event) =>{       
          const searchField = event.target.value.toLowerCase()
         
        this.setState(()=>{
          return {searchField}
        })
  }}/>
      
      
       {filteredMonster.map((monster) => {
          return <div key={monster.id}>
            <h1>{monster.name}</h1>
            <p>{monster.email}</p>
          </div>;
        })}
      </div>
    )
  
  }
}
export default App
