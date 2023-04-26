import React from "react";
import s from './../Dialogs.module.css'

const Massege = (props) => {
    return <div className={s.massege}>{ props.massege }</div>
}

export default Massege;