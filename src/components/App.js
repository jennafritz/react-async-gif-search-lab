import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '/Users/jennafritz/Development/Code/Module2/react-async-gif-search-lab/src/containers/GifListContainer.js'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App
