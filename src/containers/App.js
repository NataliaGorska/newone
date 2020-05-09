import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../components/robots';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
        
    }
    componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(users => { this.setState({robots: users })});
        
    }

onSearchchange = (event) => {
    this.setState( {searchfield: event.target.value })
}
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return !robots.length ? 
             <h1>Loading</h1> :
        (
            <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchchange}/>
            <Scroll>
             <CardList robots={filteredRobots}/>
            </Scroll>

            </div>
        )
        }
    }


export default App;
