import { StyleParagraph } from "../Paragraph/StyleParagraph";
import { StyleTitle } from "../Title/StyleTitle";
import Accordion from "./Questions/Accordion/Accordion";
import { StyleCommitment } from "./StyleCommitment";

export default function Commitment() {
    return (
        <StyleCommitment>
            <div className="img">
                <img src="/img/background-vr(2).png" alt=""/>
            </div>

            <div className="content">
                <StyleTitle tag="h2" fontSize="lg">Commitment we've <strong>developed</strong></StyleTitle>
                <StyleParagraph fontSize="sm">
                    We believe responsible development is something we always work on, responsible development exist in order to develop a more organized and lead to better
                </StyleParagraph>
                <div className="acordion">
                    <Accordion />
                </div>
            </div>
        </StyleCommitment>
    )
}