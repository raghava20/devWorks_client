import React from "react";
import "./ProfileInput.css"

const ProfileInput = ({
    placeholder,
    value,
    icon,
    name,
    smallText,
    onChange,
}) => {
    return (
        <div className="profile-input">
            <input className="input" type="text" placeholder={placeholder} value={value || ""} name={name}
                onChange={(e) => onChange(e)}
            />
            <span>
                <i className={icon}></i>
            </span>
            <p className="helper-text text-muted">{smallText}</p>
        </div>
    );
};

export default ProfileInput;