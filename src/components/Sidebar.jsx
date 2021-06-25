import React, { PureComponent } from 'react'
import Icon from './Icon'
import "../CSS/Sidebar.css"

class Sidebar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isChannelDropdown: true,
            isDirectMessageDropdown: true,
        }
    }

    handleChannelDropdown = () => {
        this.setState({
            isChannelDropdown: !this.state.isChannelDropdown
        })
    }

    handleDirectMessageDropdown = () => {
        this.setState({
            isDirectMessageDropdown: !this.state.isDirectMessageDropdown
        })
    }
    

    render() {
        return (
            <div className="sidebarWrapper">
                <div className="userInfo">
                    <label>Deepak Pawar</label>
                    <Icon cssClassName="fa fa-edit" />
                </div>
                <hr />
                <div className="sidebarinnerSection">
                    <ul>
                        <li>Mentions & Seactions</li>
                        <li>Drafts</li>
                        <li>Saved items</li>
                        <li>People</li>
                        <li>Apps</li>
                        <li>Files</li>
                        <li>Show Less</li>
                    </ul>
                </div>
                <hr />
                <div className="sidebar-dropdown">
                    <div className="channelList">
                        <Icon cssClassName= { !this.state.isChannelDropdown ? "fa fa-caret-up" : "fa fa-caret-down" } />
                        <label onClick = { this.handleChannelDropdown }>Channels</label>
                        <Icon cssClassName="fa fa-plus plusIcon" />
                    </div>
                    {
                        this.state.isChannelDropdown &&
                        <ul>
                            <li>Channel 1</li>
                            <li>Channel 2</li>
                            <li>Channel 3</li>
                            <li>Channel 4</li>
                        </ul>
                    }
                </div>
                <hr />
                <div className="sidebar-dropdown">
                    <div className="channelList">
                        <Icon cssClassName= { !this.state.isDirectMessageDropdown ? "fa fa-caret-up" : "fa fa-caret-down" } />
                        <label onClick = { this.handleDirectMessageDropdown }>Direct Messages</label>
                        <Icon cssClassName="fa fa-plus plusIcon" />
                    </div>
                    {
                        this.state.isDirectMessageDropdown &&
                        <ul>
                            <li>Direct Messages 1</li>
                            <li>Direct Messages 2</li>
                            <li>Direct Messages 3</li>
                            <li>Direct Messages 4</li>
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

export default Sidebar