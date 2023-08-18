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
                <StyleTitle tag="h2" fontSize="lg">Commitment we've <strong>developed</strong></StyleTitle>
                <StyleParagraph fontSize="sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat alias distinctio, autem repellendus enim laudantium? Aspernatur quae iste rerum ab voluptatem quasi, incidunt impedit fugiat eligendi, ad.
                </StyleParagraph>
                <div>
                    oi
                </div>
            </div>
        </StyleDepositions>
    )
}