import React from "react";

MenuRightComp.propTypes = {
    menuText: PropTypes.string,
};

export default function MenuRightComp(props) {
    return(
        <div>{props.menuText}</div>
    );
};