import React, { Component } from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import FavoriteIcon from '@material-ui/icons/Favorite'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'

class BookShelfButton extends Component {
  render() {
    const { data, shelfName, currentShelf, text } = this.props
    const inShelf = currentShelf === shelfName
    return (
      <Tooltip title={text}>
        <IconButton
          size='medium'
          aria-label={text}
          color={inShelf ? 'primary' : 'default'}
          onClick={() => this.props.updateBookShelf(data, shelfName)}
        >
          {shelfName === 'currentlyReading' ? <ImportContactsIcon /> :
            shelfName === 'wantToRead' ? <FavoriteIcon /> :
              shelfName === 'read' ? <CheckIcon /> :
                <CloseIcon />}
        </IconButton>
      </Tooltip>
    )
  }
}

export default BookShelfButton