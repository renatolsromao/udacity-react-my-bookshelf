import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'
import Shelf from './Shelf'

class MainPage extends Component {
    render() {
        const currentlyReadingBooks = this.props.shelvesBooks.filter((book) => book.shelf === 'currentlyReading')
        const wantToReadBooks = this.props.shelvesBooks.filter((book) => book.shelf === 'wantToRead')
        const ReadBooks = this.props.shelvesBooks.filter((book) => book.shelf === 'read')
        return (
            <div>
                <DefaultHeader />
                <Shelf 
                    name='Currently Reading'
                    books={currentlyReadingBooks} 
                    shelvesBooks={this.props.shelvesBooks}
                    updateBookShelf={this.props.updateBookShelf} 
                />
                <Shelf 
                    name='Want to Read'
                    books={wantToReadBooks} 
                    shelvesBooks={this.props.shelvesBooks}
                    updateBookShelf={this.props.updateBookShelf} 
                />
                <Shelf 
                    name='Read'
                    books={ReadBooks} 
                    shelvesBooks={this.props.shelvesBooks}
                    updateBookShelf={this.props.updateBookShelf} 
                />
            </div>
        )
    }
}

export default MainPage