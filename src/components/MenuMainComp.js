import React from "react";
import MenuLeftComp from "./MenuLeftComp.js";
import MenuRightComp from "./MenuRightComp.js";

MenuMainComp.propTypes = {
    menuLeftText: PropTypes.string,
    screenTitle: PropTypes.string,
    menuRightText: PropTypes.string,
};

export default function MenuMainComp(props) {
    return(
        <div>
            <MenuLeftComp props={props.menuLeftText} />
            {props.screenTitle}
            <MenuRightComp props={props.menuRightText} />
        </div>
    );
};