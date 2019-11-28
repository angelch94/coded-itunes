import { IAlbum } from './Album.d';

export interface IGrid {
    albums: IAlbum[],
    orientation: string,
    didSearch: boolean,
    handleAddToBookmarks: ( album: IAlbum) => void
    bookmarks: IAlbum[]
}

export interface IGridItem {
    album: IAlbum;
    handleAddToBookmarks: ( album: IAlbum) => void
    bookmarks: IAlbum[]
}