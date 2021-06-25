import React, { PureComponent } from 'react'
import Icon from './Icon'

class SearchBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            searchText: "",
        }
    }

    handleSearch = (e) => {
        this.setState({
            searchText: e.target.value
        })
        this.props.handleSearch(e.target.value)
    }

    render() {
        return (
            <div className="searchContainer">
                <form>
                    <input type="text" placeholder="Search..." value = { this.state.searchText} onChange= { this.handleSearch} />
                    <Icon cssClassName="fa fa-search" />
                </form>
            </div>
        ) 
    }
}

export default SearchBar