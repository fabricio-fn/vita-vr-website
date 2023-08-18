import { StyleParagraph } from "../../Paragraph/StyleParagraph";
import { DataList } from "../DataList/DataList";
import { StyleList } from "./StyleList";

export default function List() {
    return (
        <>
            {DataList.map((item, index) => (
                <StyleList key={index}>
                    <span>
                        {item.icon}
                    </span>
                    <StyleParagraph fontSize="sm">{item.title}</StyleParagraph>
                </StyleList>
            ))}
        </>
    );
}