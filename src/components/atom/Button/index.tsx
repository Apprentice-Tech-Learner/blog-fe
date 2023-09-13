import classNames from "classnames";
import React from "react";

type TButton = {
    color: string,
    onClick: () => void,
    text: string,
}

export const Button = ({ color, onClick, text, ...props }: TButton): React.ReactElement => {
    return (
        <button className={classNames('atom-jdu-btn', color)} onClick={onClick} {...props}>
            {text}
        </button>
    )
};
