import React, { MouseEventHandler } from "react";
import classNames from "classnames";

type TEditButton = {
    text: string,
    className?: string,
    onClick: () => void,
}

const EditButton = ({ text, className, onClick }: TEditButton):JSX.Element => {
    return (
        <button onClick={onClick} className={classNames("jdu-edit-button", className)}>
            {text}
        </button>
    );
}

export default EditButton;
