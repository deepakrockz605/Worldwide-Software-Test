import React, { PureComponent } from 'react'

class Icon extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <i className = { this.props.cssClassName } aria-hidden="true"></i>
            </div>
        )
    }
}

export default Icon