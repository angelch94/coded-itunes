import React from "react"
import { GridItem } from './GridItem';
import { IGrid } from "./../../interfaces/Grid"
import {useSpring, animated} from 'react-spring'


export const Grid = ({didSearch, orientation, albums, handleAddToBookmarks, bookmarks}: IGrid) => {
    const props = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        } 
})
    return <animated.div style={props}><div style={props} className={`grid-container ${orientation}`}>
    {!didSearch ? <div className="grid--announce"> Please perform your album search</div> : null}
    {didSearch ?
        albums.length ? albums.map( (album, i ) => <GridItem bookmarks={bookmarks} handleAddToBookmarks={handleAddToBookmarks} album={album} key={i}/>) 
        : <div className="grid--announce"> There are no results</div> : 
    null }
    </div>
    </animated.div>
}

