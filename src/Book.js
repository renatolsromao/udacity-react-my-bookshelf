import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import BookShelfButton from './BookShelfButton'

const genericBookThumbnail = 'https://rmnetwork.org/newrmn/wp-content/uploads/2011/11/generic-book-cover.jpg'

const styles = theme => ({
  bookCard: {
    height: '100%',
    display: 'flex',
    'flex-direction': 'column',
  },
  bookCardActions: {
    'margin-top': 'auto',
  }
})

class Book extends Component {
  render() {
    const { classes, data, shelf } = this.props
    const thumbnailLink = data.imageLinks !== undefined ? data.imageLinks.thumbnail : genericBookThumbnail

    return (
      <Card className={classes.bookCard}>
        <CardMedia
          style={{ paddingTop: '100%' }}
          image={thumbnailLink}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.authors ? data.authors.join(', ') : ''}
          </Typography>
        </CardContent>
        <CardActions className={classes.bookCardActions}>
          <BookShelfButton
            data={data}
            shelfName='currentlyReading'
            currentShelf={shelf}
            text='Reading'
            updateBookShelf={this.props.updateBookShelf}
          />
          <BookShelfButton
            data={data}
            shelfName='wantToRead'
            currentShelf={shelf}
            text='Want to Read'
            updateBookShelf={this.props.updateBookShelf}
          />
          <BookShelfButton
            data={data}
            shelfName='read'
            currentShelf={shelf}
            text='Read'
            updateBookShelf={this.props.updateBookShelf}
          />
          <BookShelfButton
            data={data}
            shelfName='none'
            currentShelf={shelf}
            text='None'
            updateBookShelf={this.props.updateBookShelf}
          />
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(Book)