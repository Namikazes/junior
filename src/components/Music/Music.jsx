import axios from "axios";
import React from "react";
import s from "./Music.module.css"

class Music extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.musCurrentPage}&count=${this.props.musPageSize}`)
        .then(response => {
            this.props.musSetMusics(response.data.items)
        })
    }
    render() {

        let musPagesCount = Math.cail(this.musTotalCount / this.musPageSize);

        let musPages = [];
        for(let i = 0; i <= musPagesCount; i++) {
            musPages.push(i);
        }

        return (
            <div>
                <div>
                    {musPages.map( c => {
                        return <span className={this.props.musCurrentPage === c && s.selected}>{c}</span>
                })}
                </div>

                {
                    this.props.musics.map(m => <div key={ m.id }>
                        <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                            <div>
                                {m.follow
                                    ? <button onClick={() => { this.props.musUnFollow(m.id) }}>unFollow</button>
                                    : <button onClick={() => { this.props.musFollow(m.id) }}>Follow</button>}
                                
                            </div>
                        </span>
                        <span>
                            {/* <div>{m.location.country}</div>
                            <div>{m.location.city}</div> */}
                        </span>
                    </div>) 
                }
            </div>
        )
    }
}

export default Music;