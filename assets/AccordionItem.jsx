import React, { useState } from "react"

function AccordionItem({ index, title, text }) {
    const [dropDown, setDropDown] = useState(false)
    function handleDropDown() {
        setDropDown(!dropDown)
    }

    return (
        <div className={`item ${dropDown? 'open' : ''}`} onClick={handleDropDown}>
            <span className={'number'}>{index < 10 ? `0${index + 1}` : index}</span>
            <span className="title">{title}</span>
            <icon className="icon">{dropDown ? '-' : '+'}</icon>
            {dropDown && <div className="content-box">{text}</div>}
        </div>
    )
}

export default AccordionItem
