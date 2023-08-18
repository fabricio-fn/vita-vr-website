import { StyleButton } from "../Button/StyleButton";
import { StyleParagraph } from "../Paragraph/StyleParagraph";
import { StyleTitle } from "../Title/StyleTitle";
import { StyleGetStarted } from "./StyleGetStarted";

export default function GetStarted() {
    return (
        <StyleGetStarted>
            <div className="content">
                <StyleTitle tag="h2" fontSize="lg">Get started with Veta</StyleTitle>
                <StyleParagraph fontSize="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquam ut nobis aspernatur hic cum fugiat, tempore nulla reiciendis harum!</StyleParagraph>
                <StyleButton buttonStyle="solidDark" buttonSize="md">Get Started</StyleButton>
            </div>
        </StyleGetStarted>
    )
}