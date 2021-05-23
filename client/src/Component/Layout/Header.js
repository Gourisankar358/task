import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import { checkAuth } from '../../utils/auth';

function Header(props) {
    const signout = () => {
        checkAuth.signout();
        localStorage.removeItem('uToken');
        localStorage.removeItem('uName');
        localStorage.removeItem('uEmail');
        localStorage.removeItem('u_id');
        props.history.push('/');
        window.location.reload();
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    {!checkAuth.isAuthenticated ?
                        <Link to="/login" style={{ "color": "white" }}><b>Login</b></Link>
                        :
                        <Button style={{ "color": "white" }} onClick={(e) => {
                            e.preventDefault();
                            signout()
                        }}><b>Logout</b></Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default withRouter(Header);