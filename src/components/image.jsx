import React from "react";


const Image = (props) => {

    return (

        <img src={props.url}
            alt="An Image"
            height={props.h}
            width={props.w} />
    )
}

export default Image;