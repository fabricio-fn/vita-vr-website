import { StyleParagraph } from "../Paragraph/StyleParagraph";
import { StyleTitle } from "../Title/StyleTitle";
import { StyleDepositions } from "./StyleDepositions";

export default function Depositions() {
    return (
        <StyleDepositions>
            <div className="img">
                <img src="/img/background-vr(4).png" alt=""/>
            </div>

            <div className="content">
                <StyleTitle tag="h2" fontSize="lg">What our <strong>trusted clients</strong> say</StyleTitle>
                <StyleParagraph fontSize="sm">
                    Fin that clients who already trust us, we always give the best to our clients
                </StyleParagraph>
                <div>
                    oi
                </div>
            </div>
        </StyleDepositions>
    )
}