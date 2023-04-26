import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/Dialog";
import Massege from "./MassegeItem/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormControls/FormControls";
import { maxLenghtCreator, required } from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogMessagePage;
    let dialogsElement = state.dialog.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let massegesElement = state.message.map(m => <Massege massege={m.text} key={m.id}/>);
    let newMassegeText = state.newMassegeText;

    let addNewMassege = (values) => {
        props.addMassegeCreate(values.newMassegeText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                { dialogsElement }
            </div>
            <div className={s.messages}>
                { massegesElement }
            </div>
            <AddMassegeFormRedux onSubmit={addNewMassege}/>
        </div>
    );
}

const AddMassegeForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required, maxLenghtCreator(20)]} name="newMassegeText" placeholder="Massege" />
        </div>
        <div>
            <button>masse</button>
        </div>
    </form>
    )
}

const AddMassegeFormRedux = reduxForm({form: 'DialogForm'})(AddMassegeForm)

export default Dialogs;