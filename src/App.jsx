import React,{ Component } from "react";
import viteLogo from '/vite.svg'
import './App.css'
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";

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
  
 onSearchChange = (event) =>{       
      const searchField = event.target.value.toLowerCase()
     
    this.setState(()=>{
      return {searchField}
    })
}

  render(){
    console.log('render')
    const filteredMonster = this.state.monsters.filter((monster)=>
      {return monster.name.toLowerCase().includes(this.state.searchField)
      })
    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
      <SearchBox className='search-box' placeholder='search-monsters' onChangeHandler ={this.onSearchChange}/>
       {/* {filteredMonster.map((monster) => {
          return <div key={monster.id}>
            <h1>{monster.name}</h1>
            <p>{monster.email}</p>
          </div>;
        })} */}
      <CardList monsters={filteredMonster}/>

      </div>
    )
  
  }
}
export default App
