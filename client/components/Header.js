import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import Icon from '../../dist/templogo.png';





const Header = () => {

    return (
        <div>
          <AppBar position="static" style={{ boxShadow: 'none', background: 'transparent'}} >
            <img src={Icon} style={{maxHeight: 200, maxWidth: 200, padding: 5}}/>
          </AppBar>
        </div>)
};

export default Header;