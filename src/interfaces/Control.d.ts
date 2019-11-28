export interface IControl {
    bookmarksEnabled: boolean;
    orientation: string;
    albums: IAlbum[]
    limit: number;
    currentPage: number;
    handleVisibility: (event: MouseEvent<SVGSVGElement, MouseEvent>) => void
    handleNextPagination: (event: MouseEvent<SVGSVGElement, MouseEvent>) => void
    handlePreviousPagination: (event: MouseEvent<SVGSVGElement, MouseEvent>) => void 
    handleBookmarks: (event: MouseEvent<SVGSVGElement, MouseEvent>) => void 
}

export interface IVisibility {
    orientation: string;
    handleVisibility: (event: MouseEvent<SVGSVGElement, MouseEvent>) => void
}

export interface IPagination {
    limit: number;
    albums: IAlbum[];
    currentPage: number;
    handleNextPagination: (event: MouseEvent<SVGSVGElement, MouseEvent>) => void
    handlePreviousPagination: (event: MouseEvent<SVGSVGElement, MouseEvent>) => void 
}

export interface IBookmarks {
    bookmarksEnabled: boolean;
    handleBookmarks: (event: MouseEvent<SVGSVGElement, MouseEvent>) => void 
}