import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name] : value
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onRetriveForm(this.state.term);
    }
    render() {
        const {term} = this.state;
        return (
            <div className="search-bar ui segment" style={{marginTop: '20px'}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label>Youtube Search</label>
                    <input 
                    type="text"
                    name="term"
                    value={term}
                    placeholder="Tìm kiếm"
                    onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
