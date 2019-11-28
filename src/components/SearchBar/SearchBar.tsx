import React, { MouseEvent, ChangeEvent } from "react"
import { Search } from "@material-ui/icons"

interface IMusicSearchBar {
    input: string;
    handleChange: (event: ChangeEvent) => void;
    handleSubmit: (event: MouseEvent ) => void
}

export const MusicSearchBar = ({ input, handleChange, handleSubmit }: IMusicSearchBar) => 
    <div className="searchBar">
        <input className="searchBar--input" placeholder="Search your favorite album" value={input} onChange={handleChange}/>
        <button className="searchBar--button" onClick={(e) => handleSubmit(e)}>
            <Search />
        </button>
    </div>