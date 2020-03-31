import { debounce } from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';

class SearchHeader extends Component {
  searchBooks = debounce(event => {
    const value = event.target.value.trim()
    this.props.searchBooks(value)
  }, 200)

  render() {
    return (
      <AppBar color="transparent" position="fixed">
        <Toolbar>
          <Link to="/">
            <IconButton aria-label="search" color="inherit">
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <FormControl fullWidth>
            <TextField
              id="search-input"
              label="Search a Book"
              onChange={
                (event) => { event.persist(); this.searchBooks(event) }
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Toolbar>
      </AppBar>
    )
  }
}

export default SearchHeader