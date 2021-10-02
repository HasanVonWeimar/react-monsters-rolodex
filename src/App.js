import logo from './logo.svg';
import './App.css';
import react, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import  { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();  //this calls the constructor method on Component, giving us access to state
    //setting default value for our state
    this.state = {

      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {

    //retrieve monsters as random key (users) 

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  //declaring a function as an arrow function allows it to be automatically bound in the context
  // - in which it is defined. so we do not have to define the binding inconstructor

  handleChange = e => {
  
    this.setState({searchField: e.target.value});
  };

  render() {

    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      //the state is passed down the tree, as props

      <div className="App">
       
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder='search monsters'
        handleChange = {this.handleChange} 
        />
        <CardList monsters={filteredMonsters}> {/* send monsters prop to cardlist. initially we passed this.state.monsters */}

        </CardList>
      </div>
    );
  }
}

export default App;
