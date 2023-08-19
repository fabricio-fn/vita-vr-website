import { StyleButton } from "../Button/StyleButton";
import { StyleParagraph } from "../Paragraph/StyleParagraph";
import { StyleTitle } from "../Title/StyleTitle";
import { StyleGetStarted } from "./StyleGetStarted";

export default function GetStarted() {
    return (
        <StyleGetStarted>
            <div className="content">
                <StyleTitle tag="h2" fontSize="lg">Get started with Veta</StyleTitle>
                <StyleParagraph fontSize="sm">Subsrcribedan get interesting offers from us, and get the best technology for your various activities</StyleParagraph>
                <StyleButton buttonStyle="solidDark" buttonSize="md">Get Started</StyleButton>
            </div>
        </StyleGetStarted>
    )
}