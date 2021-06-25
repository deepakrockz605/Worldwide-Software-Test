import React, { PureComponent } from 'react'
import SearchBar from "./SearchBar"
import Icon from './Icon'
import "../CSS/Header.css"

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    handleSearch = (value) => {
        this.props.handleSearch(value)
    }

    render() {
        return (
            <div className="headerWrapper">
                <div className="statusIcon">
                    <Icon cssClassName="fa fa-clock-o" />
                </div>
                <SearchBar handleSearch = { this.handleSearch } />
                <div className="infoIcon rightAlign">
                    <Icon cssClassName="fa fa-question-circle" />
                </div>
            </div>
        )
    }
}

export default Header