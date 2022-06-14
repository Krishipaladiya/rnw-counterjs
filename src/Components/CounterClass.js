import React, { Component } from 'react'

class CounterClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    Decrement = () => {
        this.setState({
            count: this.state.count > 0 ? this.state.count - 1 : this.state.count
        })
    }

    Increment = () => {
        this.setState({
            count: this.state.count < 10 ? this.state.count + 1 : this.state.count
        })
    }

    render() {
        return (
            <>
                <section >
                    <div >
                        <h1 >Class Components</h1>
                        <h2 >{this.state.count}</h2>
                        <div >
                            <button onClick={this.Decrement} type="button"  disabled={this.state.count <= 0}>Decrement</button>
                            <button onClick={this.Increment} type="button"  disabled={this.state.count >= 10}>Increment</button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default CounterClass