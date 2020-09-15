import React from 'react';
import './App.css';
import AppRouter from "./Components/RouterComponent.jsx";
import NavBar from "./Components/Navbar/Navbar.jsx";
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
      <NavBar/>
        <Container>
          <AppRouter/>
        </Container>
    </div>
  );
}

export default App;
