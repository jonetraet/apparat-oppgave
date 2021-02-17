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

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        <Link href="https://google.com" color="inherit" className={classes.link}>
                            Threads
                        </Link>
                        <Link href="https://youtube.com" color="inherit" className={classes.link}>
                            Register
                        </Link>
                        <Link href="https://finn.no" color="inherit" className={classes.link}>
                            Contact us
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

    )
}
export default Navbar;