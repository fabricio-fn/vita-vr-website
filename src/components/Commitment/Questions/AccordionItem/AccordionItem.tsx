import { useState } from 'react'
import { DataQuestions } from '../DataQuestions/DataQuestions'
import { StyleAccordionItem } from './StyleAccordionItem'
import { StyleTitle } from '../../../Title/StyleTitle'
import { StyleParagraph } from '../../../Paragraph/StyleParagraph'
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi"

export default function AccordionItem() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }    

    return (
        <>
            {DataQuestions.map((item, index) => (
                <StyleAccordionItem key={index} onClick={() => handleItemClick(index)} className={openIndex === index ? 'active' : ''} >
                    <div className="question">
                        <StyleTitle tag="h3">{item.question}</StyleTitle>
                        <span className="icon">{openIndex === index ? <BiSolidUpArrow /> : <BiSolidDownArrow />}</span>
                    </div>
                    
                    {openIndex === index && (
                    <div className="response">
                        <StyleParagraph fontSize="sm">{item.response}</StyleParagraph>
                    </div>
                    )}
                </StyleAccordionItem>
            ))}
        </>
    )
}