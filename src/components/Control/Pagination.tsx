import React from "react"
import { IPagination } from '../../interfaces/Control.d';
import { ArrowBack, ArrowForward } from "@material-ui/icons"

export const Pagination = ({ limit, albums, handleNextPagination, handlePreviousPagination, currentPage }: IPagination) => 
    <div className="pagination--container">
        {currentPage === 1 ?
            <ArrowBack className="primaryColor" /> :
            <ArrowBack className="secondaryColor" onClick={(e) => handlePreviousPagination(e)}/>
        }
         | 
        {limit > albums.length ?
            <ArrowForward className="primaryColor"/> :
            <ArrowForward className="secondaryColor" onClick={(e) => handleNextPagination(e)}/>
        }
    </div>