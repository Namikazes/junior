import { connect } from "react-redux";
import { musFollow, musUnFollow, musSetMusics } from "../../Redux/music-reducer";
import Music from "./Music";


let mapStateToProps = (state) => {
    return {
        musics: state.musicPage.musics,
        musPageSize: state.musicPage.musPageSize,
        musTotalCount: state.musicPage.musTotalCount,
        musCurrentPage: state.musicPage.musCurrentPage,

    }
}

const MusicConteiner = connect(mapStateToProps, { musFollow,musUnFollow,musSetMusics })(Music);

export default MusicConteiner;