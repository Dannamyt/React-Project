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
      monsters:[]
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
    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="search monsters"
        
        onChange={(event) =>{       
          const filteredMonster = this.state.monsters.filter((monster)=>
            {return monster.name.includes(event.target.value)
            })
        this.setState(()=>{
          return {monsters:filteredMonster}
        })
  }}/>
      
      
       {this.state.monsters.map((monster) => {
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
