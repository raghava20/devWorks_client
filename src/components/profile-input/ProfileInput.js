import React from "react";

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
            <p className="profile-input-left">
                <input className="input" type="text" placeholder={placeholder} value={value || ""} name={name}
                    onChange={(e) => onChange(e)}
                />
                <span className="profile-input-icon ">
                    <i className={icon}></i>
                </span>
            </p>
            <p className="helper-text">{smallText}</p>
        </div>
    );
};

export default ProfileInput;