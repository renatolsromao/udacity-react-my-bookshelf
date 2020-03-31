import React, { Component } from 'react'
import SearchHeader from './SearchHeader'
import Shelf from './Shelf'

import * as BooksApi from './services/BooksApi'

class SearchPage extends Component {
    state = {
        searchBooks: [],
    }

    searchBooks = (title) => {
        if (title === "") {
            this.setState(() => ({
                searchBooks: []
            }))
        } else {
            BooksApi.search(title)
            .then((searchBooks) => {
                searchBooks = searchBooks.length > 0  ? searchBooks : []
                this.setState(() => ({
                    searchBooks
                }))
            })
        }
    }
    
    render() {
        return (
            <div>
                <SearchHeader searchBooks={this.searchBooks} />
                <Shelf 
                    name='Search Result'
                    books={this.state.searchBooks} 
                    shelvesBooks={this.props.shelvesBooks}
                    updateBookShelf={this.props.updateBookShelf} 
                />
            </div>
        )
    }
}

export default SearchPage