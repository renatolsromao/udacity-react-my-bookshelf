import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { Grid, Divider } from '@material-ui/core'
import Book from './Book'

const styles = theme => ({
    root: {
        padding: '70px 30px 0',
        flexGrow: 1,
    },
})

class Shelf extends Component {
    render() {
        const { classes, shelvesBooks } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h2>{this.props.name}</h2>
                        <Divider />
                    </Grid>
                
                    {this.props.books.map((book) => {
                        let bookShelf = shelvesBooks.filter((shelvesBook) => shelvesBook.id === book.id)
                        bookShelf = bookShelf[0] && bookShelf[0].shelf
                        return (
                            <Grid item xs={12} sm={4} md={3} key={book.id}>
                                <Book data={book} shelf={bookShelf} updateBookShelf={this.props.updateBookShelf} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Shelf)