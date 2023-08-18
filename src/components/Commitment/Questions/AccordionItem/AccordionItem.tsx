import { useState } from 'react';
import { DataQuestions } from '../DataQuestions/DataQuestions';
import { StyleAccordionItem } from './StyleAccordionItem';
import { StyleTitle } from '../../../Title/StyleTitle';
import { StyleParagraph } from '../../../Paragraph/StyleParagraph';

export default function AccordionItem() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleItemClick = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <>
            {DataQuestions.map((item, index) => (
                <StyleAccordionItem key={index} onClick={() => handleItemClick(index)} className={openIndex === index ? 'active' : ''} >
                    <div className="question">
                        <StyleTitle tag="h3">{item.question}</StyleTitle>
                        <span className="icon">{openIndex === index ? '▲' : '▼'}</span>
                    </div>
                    
                    {openIndex === index && (
                    <div className="response">
                        <StyleParagraph>{item.answer}</StyleParagraph>
                    </div>
                    )}
                </StyleAccordionItem>
            ))}
        </>
    )
}