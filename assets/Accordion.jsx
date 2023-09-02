import React from 'react';
import AccordionItem from "./AccordionItem.jsx";
import faqs from "./faqs.jsx";
export default function Accordion() {
    return (
        <div className={'accordion'}>
                {faqs.map((faq, index)=><AccordionItem index={index} title={faq.title} text={faq.text} key={<faq className="title"></faq>}/>)}
        </div>
    )
}
