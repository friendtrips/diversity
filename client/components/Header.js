import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';



const Header = () => {

    return (
        <div>
          <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
              <Typography variant="h6" style={{color: 'black'}}>
                friendtrips
              </Typography>
            </Toolbar>
          </AppBar>
        </div>)
};

export default Header;