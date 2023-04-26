import React from "react";
import Pagenator from "../common/Paginator/Pagenator";
import User from "./User";

let Users = ({totalUsersCount,pageSize,onPageChanged,currentPage,users, ...props}) => {
    return <div>
       <Pagenator currentPage={currentPage} onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            {
                users.map(u => <User user={u} key={u.id}
                 followingIsProgres={props.followingIsProgres}
                 unfollow={props.unfollow} follow={props.follow}/>
            )}
        
            </div>
}

export default Users;