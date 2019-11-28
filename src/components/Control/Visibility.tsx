import React from "react"
import { IVisibility } from "../../interfaces/Control"
import { Dashboard } from "@material-ui/icons"

export const Visibility = ({ handleVisibility }: IVisibility) => 
    <div className="control--visibility">
        <Dashboard onClick={(e) => handleVisibility(e)}/>
    </div>