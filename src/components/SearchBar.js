import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleChange = (event) => {
        event.persist()
        this.props.updateSearch(event.target.value)
    }

    render() {
        return (
            <div>
                <label htmlFor="name" name="name" > Name </label>
                <input type="text" name="name" id="name" onChange={this.handleChange} />
            </div>
        )
    }
}
