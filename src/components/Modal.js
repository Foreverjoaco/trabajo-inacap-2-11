import React from "react";

const Modal = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {props.fullDescription}
                <button onClick={props.close}>cerrar</button>
            </section>
        </div>
    )
}

export default Modal