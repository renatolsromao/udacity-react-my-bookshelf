import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import { Route } from 'react-router-dom'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

import * as BooksApi from './services/BooksApi'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
})

class App extends Component {
  state = {
    shelvesBooks: []
  }

  componentDidMount() {
    this.getBooksOnShelves()
  }

  getBooksOnShelves = () => {
    BooksApi.getAll()
      .then((shelvesBooks) => {
        shelvesBooks = shelvesBooks.length > 0 ? shelvesBooks : []
        this.setState(() => ({
          shelvesBooks
        }))
      })
  }

  updateBookShelf = (book, shelf) => {
    BooksApi.update(book, shelf)
      .then(() => {
        this.getBooksOnShelves()
      })
  }

  render() {
    const { classes } = this.props

    const MainPageComponent = (
      <MainPage
        shelvesBooks={this.state.shelvesBooks}
        updateBookShelf={this.updateBookShelf}
      />
    )
    const SearchPageComponent = (
      <SearchPage
        shelvesBooks={this.state.shelvesBooks}
        updateBookShelf={this.updateBookShelf}
      />
    )

    return (
      <div className={classes.root}>
        <Route exact path="/" render={() => MainPageComponent} />
        <Route path="/search" render={() => SearchPageComponent} />
      </div>
    )
  }
}

export default withStyles(styles)(App)
