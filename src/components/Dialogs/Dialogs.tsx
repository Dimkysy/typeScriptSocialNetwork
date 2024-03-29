import React from 'react';
import DialogItem from "./DialogItem";
import Message from "./Message";
import s from '../Dialogs/Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElements =  props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );

    return (
        <div >
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;