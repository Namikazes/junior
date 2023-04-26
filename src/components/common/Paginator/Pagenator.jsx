import React, { useState } from "react";
import s from './Paginator.module.css'

let Pagenator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageSize / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rigthPortionPageNumber = portionNumber * portionSize;

    return <div> 

        {portionNumber > 1 && 
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

        {pages.filter(p => p >= leftPortionPageNumber && p  <= rigthPortionPageNumber)
        .map(p => {
                    return <span className={currentPage === p && s.selectedPage}
                        onClick={(e) => { onPageChanged(p) }}>{p}</span>
                })}

{portionCount > portionNumber && 
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>PREV</button>}

    </div>
}

export default Pagenator;