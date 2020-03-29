import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
})

class DefaultHeader extends Component {
    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6">
                            My Bookshelf
                        </Typography>
                        <Link to="/search">
                            <IconButton aria-label="search" color="inherit">
                                <SearchIcon />
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(DefaultHeader)