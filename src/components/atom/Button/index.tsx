import classNames from "classnames";
import React from "react";

type TButton = {
    color?: string,
    onClick?: () => void,
    text: string,
    className?: string,
    disabled?: boolean,
    icon?: React.ReactElement,
}

export const Button = ({ color, onClick, text, className, disabled, icon, ...props }: TButton): React.ReactElement => {
    return (
        <button className={classNames('atom-jdu-btn', color, className)} disabled={disabled} onClick={onClick} {...props}>
            {text} {icon}
        </button>
    )
};
