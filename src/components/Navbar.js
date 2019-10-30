import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
link: {
    margin: theme.spacing(1),
    color: red,
    },
}));

const Navbar = () => {
const classes = useStyles();
const preventDefault = event => event.preventDefault();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        <Link href="https://google.com" onClick={preventDefault} color="inherit" className={classes.link}>
                            Threads
                        </Link>
                        <Link href="https://youtube.com" onClick={preventDefault} color="inherit" className={classes.link}>
                            Register
                        </Link>
                        <Link href="https://finn.no" onClick={preventDefault} color="inherit" className={classes.link}>
                            Contact us
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

    )
}
export default Navbar;