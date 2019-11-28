import React, 
  {
  Component, ChangeEvent, 
  ChangeEventHandler, MouseEvent,
  MouseEventHandler
} from 'react';
import { MusicSearchBar } from './components/SearchBar/SearchBar';
import { Layout } from './components/Layout/Layout';
import "./styles/sass/index.scss"
import { fetchResults } from './api/api';
import { Grid } from './components/Grid/Grid';
import { IAppState } from './interfaces/State.d';
import { IAlbum } from "./interfaces/Album"
import { Control } from './components/Control/Control';

class App extends Component<any, IAppState> {
  state: IAppState;

  constructor(props: any){
    super(props)
    this.state = {
      albumsToShow: [],
      input: "",
      albums: [],
      limit: 20,
      currentPage: 1,
      orientation: "horizontal",
      bookmarks: [],
      bookmarksEnabled: false,
      didSearch: false
    }
  }

  private handleVisibility: MouseEventHandler = (event: MouseEvent) => {
    event.preventDefault();
    const { orientation } = this.state
    orientation === "horizontal" ? this.setState({orientation: "vertical"}) : this.setState({orientation: "horizontal"})
  }
  private handleAddToBookmarks = ( album: IAlbum ) => {
    const { bookmarks } = this.state
    let newBookmarks = bookmarks
    //is already in bookmarks? Then remove it. 
    //not in bookmarks? Then add it.
    bookmarks.includes(album) ? newBookmarks = bookmarks.filter(bookmark => bookmark !== album) : newBookmarks.push(album)
    this.setState({ bookmarks: newBookmarks})
  }

  private handleBookmarks: MouseEventHandler = (e: MouseEvent) => {
    const { bookmarks, albums, bookmarksEnabled } = this.state
    if(!bookmarksEnabled) {
      const albumsToShow = bookmarks
      this.setState({albumsToShow: albumsToShow, bookmarksEnabled: true })
    } else {
      this.setState({albumsToShow: albums, bookmarksEnabled: false})
    }
  }
  private handleNextPagination: MouseEventHandler = (event: MouseEvent) => {
    event.preventDefault();
    const { limit, albums, currentPage } = this.state
    const newCurrentPage = currentPage + 1 
    const indexOfLastAlbum = newCurrentPage * limit
    const indexOfFirstAlbum = indexOfLastAlbum - limit
    this.setState({albumsToShow: albums.slice(indexOfFirstAlbum, indexOfLastAlbum), currentPage: currentPage + 1})
  }
  handlePreviousPagination: MouseEventHandler = (event: MouseEvent) => {
    event.preventDefault();
    const { limit, albums, currentPage } = this.state
    let newCurrentPage = currentPage - 1 
    if(newCurrentPage === 0) {
      newCurrentPage = 1
    }
    const indexOfLastAlbum = newCurrentPage * limit
    const indexOfFirstAlbum = indexOfLastAlbum - limit
    this.setState({albumsToShow: albums.slice(indexOfFirstAlbum, indexOfLastAlbum), currentPage: newCurrentPage})
  }
  private handleChange: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => this.setState({input: event.target.value})
  private handleSubmit: MouseEventHandler = async (event: MouseEvent) => {
    event.preventDefault();
    const { input, currentPage, limit } = this.state
    const results = await fetchResults(input)
    const indexOfLastAlbum = currentPage * limit
    const indexOfFirstAlbum = indexOfLastAlbum - limit
    this.setState({albums: results, albumsToShow: results.slice(indexOfFirstAlbum, indexOfLastAlbum), currentPage: 1, didSearch: true, bookmarksEnabled: false})
  }

  public render() {
    const { bookmarks, input, albumsToShow, limit, orientation, bookmarksEnabled, didSearch, currentPage } = this.state
    return(
      <Layout>
        <MusicSearchBar 
          input={input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        /> 
        <Grid bookmarks={bookmarks} orientation={orientation} albums={albumsToShow}
         handleAddToBookmarks={this.handleAddToBookmarks}
         didSearch={didSearch}/>
        {albumsToShow.length || bookmarksEnabled ? <Control 
          albums={albumsToShow}
          limit={limit}
          currentPage={currentPage}
          orientation={orientation}
          bookmarksEnabled={bookmarksEnabled}
          handleVisibility={this.handleVisibility}
          handleBookmarks={this.handleBookmarks}
          handleNextPagination={this.handleNextPagination}
          handlePreviousPagination={this.handlePreviousPagination} />  : null }
      </Layout>
    )
  }
}


export default App;
