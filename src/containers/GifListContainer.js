import React, {Component} from 'react'
import GifList from '/Users/jennafritz/Development/Code/Module2/react-async-gif-search-lab/src/components/GifList.js'
import GifSearch from '/Users/jennafritz/Development/Code/Module2/react-async-gif-search-lab/src/components/GifSearch.js'

class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }
    
    handleSubmit = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=QxGCkdTPBaRObCOsZqh7nY7CfOFQSXTp&rating=g`)
            .then(res => res.json())
            .then(gifsObj => this.setState({
                gifs: [gifsObj.data[0], gifsObj.data[1], gifsObj.data[2]]
            }))
    }

    render(){
        return(
            <div>
                <GifList gifs = {this.state.gifs}/>
                <GifSearch handleSubmit = {this.handleSubmit}/>
            </div>
        )
    }
}

export default GifListContainer