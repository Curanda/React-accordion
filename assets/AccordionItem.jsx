import React, { useState } from "react"

function AccordionItem({ index, title, text }) {
    const [dropDown, setDropDown] = useState(false)
    function handleDropDown() {
        setDropDown(!dropDown)
    }

    if (dropDown) {
        return (
            <div className="item">
                <span className={'number'}>{index < 10 ? `0${index + 1}` : index}</span>
                <span className="title">{title}</span>
                <icon className="icon" onClick={handleDropDown}>+</icon>
            </div>
        )
    } else {
        return (
            <div className="item open text" style={{color: '#087f5b'}}>
                <span className={'number'}>{index < 10 ? `0${index + 1}` : index}</span>
                <span className="title">{title}</span>
                <icon className="icon" onClick={handleDropDown}>-</icon>
                <div className="content-box">
                    <ul>{text}</ul>
                </div>
            </div>
        )
    }
}

export default AccordionItem
