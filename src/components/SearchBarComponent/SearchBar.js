// Import library for making a component
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './SearchBar.scss';

// Create a component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'A star is born BSO' };
    }

    render() {
        return (
            <TextField
                id="inputSearch"
                label="Buscador"
                type="search"
                margin="normal"
                variant="outlined"
                style = {{ width: '75%' }}
                value={ this.state.term }
                onChange={ event => this.onInputChange(event.target.value) }
                />
        )
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
    
}

// Functional Component
// const SearchBar = () => {
//     return <input />
// }

// Make the component available to other parts of the app
export default SearchBar;