import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Person = (props) => {
    return (<div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>

    )
}


export default Person;
