import React from "react"
import { Bookmark } from "@material-ui/icons"
import { IBookmarks } from "../../interfaces/Control"

export const Bookmarks = ({bookmarksEnabled, handleBookmarks }: IBookmarks) => 
    <div className="bookmarks--container">
        {!bookmarksEnabled ?
            <Bookmark className="primaryColor" onClick={(e) => handleBookmarks(e)}/> :
            <Bookmark className="secondaryColor" onClick={(e) => handleBookmarks(e)}/>
        }
    </div>