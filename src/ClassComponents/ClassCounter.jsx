import React, { Component } from 'react'

class ClassCounter extends Component {
    state = {
        count: 0
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>Count { this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
