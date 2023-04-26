import { addMassegeCreate} from "../../Redux/dialog-reduce";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withNavigateConteiner } from "../../hoc/authNavigate";
import { compose } from "redux";


let mapStateToProps = (state) => {
    return {
        dialogMessagePage:  state.dialogMessagePage,
    }
}

let mapDispathToProps = (dispatch) => {
    return {
        addMassegeCreate: (newMassegeText) => {
            dispatch(addMassegeCreate(newMassegeText));
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispathToProps),
    withNavigateConteiner,
)(Dialogs);