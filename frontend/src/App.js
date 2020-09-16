import React from 'react';
import './App.css';
import AppRouter from "./Components/RouterComponent.jsx";
import NavBar from "./Components/Navbar/Navbar.jsx";
import Container from '@material-ui/core/Container';

import { ApolloProvider } from 'react-apollo';
import apolloClient from './Services/Apollo';

function App() {
  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <NavBar/>
          <Container>
            <AppRouter/>
          </Container>
      </ApolloProvider>
    </div>
  );
}

export default App;
