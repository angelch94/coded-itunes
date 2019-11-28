import React from "react"
import { IControl } from '../../interfaces/Control.d';
import { Visibility } from './Visibility';
import { Pagination } from "./Pagination"
import { Bookmarks } from "./Bookmarks"
import {useSpring, animated} from "react-spring"



export const Control = (
    {limit, albums, 
    orientation, bookmarksEnabled,
    handleVisibility, handleNextPagination,
    handlePreviousPagination, handleBookmarks, currentPage }: IControl ) => {
        const props = useSpring({
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            } 
    })
    return <animated.div style={props} className="control--container">
            <Visibility orientation={orientation} handleVisibility={handleVisibility} />
            <Pagination currentPage={currentPage} albums={albums} limit={limit} handleNextPagination={handleNextPagination} handlePreviousPagination={handlePreviousPagination} />
            <Bookmarks bookmarksEnabled={bookmarksEnabled} handleBookmarks={handleBookmarks} />
        </animated.div>

    }


