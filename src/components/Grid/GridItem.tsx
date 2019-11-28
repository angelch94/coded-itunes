
import React from "react"
import { IGridItem } from "./../../interfaces/Grid"
import {useSpring, animated} from "react-spring"

export const GridItem = ({ bookmarks, album, handleAddToBookmarks }: IGridItem) => {
    const props = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        } 
})
    return <animated.div style={props}>
        <div className="grid-item">
            <img className="grid-item--artwork" src={album.artworkUrl100} alt="Artwork" />
            <div className="grid-item--artistName">{album.artistName}</div>
            <div className="grid-item--collectionname">{album.collectionName}</div>
            {!bookmarks.includes(album) ? 
                <button className="grid-item--bookmarksbutton add" onClick={() => handleAddToBookmarks(album)}>Add to bookmarks</button> :
                <button className="grid-item--bookmarksbutton remove" onClick={() => handleAddToBookmarks(album)}>Remove bookmarks</button>}
        </div>
    </animated.div>
}

