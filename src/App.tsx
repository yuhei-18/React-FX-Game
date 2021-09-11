import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';

class App extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <Router>
          <Route exact path='/' component={Home} />
        </Router>
      </ChakraProvider>
    )
  }
}

export default App;
