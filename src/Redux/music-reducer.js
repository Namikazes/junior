const MUS_FOLLOW = "MUS_FOLLOW";
const MUS_UNFOLLOW = "MUS_UNFOLLOW";
const MUS_SET_MUSICS = "MUS_SET_MUSICS";

let initialState = {
    musics: [],
    musPageSize: 20,
    musTotalCount: 10,
    musCurrentPage: 1,
}

const musicReducer = (state = initialState, action) => {
    switch(action.type) {
        case MUS_FOLLOW: {
            return {
                ...state,
                musics: state.musics.map( m => {
                    if (m.id === action.usersId) {
                        return {...m, follow: true}
                    }
                    return m;
                })
            }
        }
        case MUS_UNFOLLOW: {
            return {
                ...state,
                musics: state.musics.map( m => {
                    if (m.id === action.usersId) {
                        return {...m, follow: false}
                    }
                    return m;
                })
            }
        }
        case MUS_SET_MUSICS: {
            return {...state, musics: action.musics}
        }
        default:
             return state;
    }
}

export const musFollow = (musicId) => ({type: MUS_FOLLOW, musicId});
export const musUnFollow = (musicId) => ({type: MUS_UNFOLLOW, musicId});
export const musSetMusics = (musics) => ({type: MUS_SET_MUSICS, musics});

export default musicReducer;