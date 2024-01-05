import React from "react";

MenuLeftComp.propTypes = {
    menuText: PropTypes.string,
};

export default function MenuLeftComp(props) {
    return(
        <div>{props.menuText}</div>
    );
};