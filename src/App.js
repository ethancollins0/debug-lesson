import React, { Component } from 'react'

import './App.css'
import SearchBar from './components/SearchBar'
import Card from './components/Card'

export default class App extends Component {

  state = {
    characters: [],
    display: [],
    filter: ' '
  }

  updateSearch = (input) => {
    this.setState({
      filter: input
    })
    this.searchFilter()
  }

  searchFilter = () => {
    let results = this.state.characters.filter(char => {
      return char.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
    this.setState({
        display: results
      })
  }

  componentDidMount = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(resp => resp.json())
      .then(chars => this.setState({
        characters: chars.results,
        display: chars.results
      }))
  }

  cardsForDisplay = () => {
    return this.state.display.map(char => {
      return <Card character={char} />
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar updateSearch={this.updateSearch} />
        {this.cardsForDisplay()}
      </div>
    )
  }
}

