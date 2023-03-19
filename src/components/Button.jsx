import React from "react";
// import PropTypes from "prop-types";

export function Button ({className,backgroundColor,handleClick,text}){
        return(
            <button type="button"
            className={className}
            style={{backgroundColor: backgroundColor}}
            onClick={(e) => {
                handleClick()
            }}
            >{text}</button>
        )

    }

// Button.propTypes = {
//     className: PropTypes.string,
//     text: PropTypes.string,
//     backgroundColor: PropTypes.string,
//     handleClick: PropTypes.func,
// }