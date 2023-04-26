import React from "react";
import s from "./Users.module.css"
import { NavLink } from "react-router-dom";

const User = ({user, followingIsProgres,unfollow,follow}) => {
    return (
        <div>
            <span>
                <div className={s.photo}>
                    <img src={user.photos.small != null ? user.photos.small : user.photos.large} />
                </div>
                <div>
                    {user.follow
                        ? <button disabled={followingIsProgres.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }
                        }>unFollow</button>
                        : <button disabled={followingIsProgres.some(id => id === user.id)} onClick={() => {
                            follow(user.id);
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <NavLink to={`/profile/*${user.id}`}>
                        <div>{user.name}</div>
                    </NavLink>
                    <div>{user.status}</div>
                </span>
                <span>
                    {/* <div>{u.location.country}</div> */}
                    {/* <div>{u.location.city}</div> */}
                </span>
            </span>
        </div>

    )
}

export default User;