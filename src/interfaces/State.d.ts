
export interface IAppState {
    albumsToShow: IAlbum[];
    currentPage: number;
    input: string,
    bookmarksEnabled: boolean;
    orientation: string;
    albums: IAlbum[]
    limit: number;
    bookmarks: IAlbum[],
    didSearch: boolean
  }