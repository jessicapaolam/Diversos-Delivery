import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const style = {
  flexGrow: 1,
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
}

export default function NavBar() {
  return (
    <div>
      <AppBar position="static" style={style}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Diversos Delivery
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}