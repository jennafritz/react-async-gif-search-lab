import React, {Component} from 'react'

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit = {event => {
                event.preventDefault()
                this.props.handleSubmit(this.state.search)
            }}
            >
                <input onChange = {(event) => this.handleChange(event)} type = 'text' name = 'search' value = {this.state.search}/>
                <input type = 'submit'/>
            </form>
        )
    }
}