import { StyleButton } from "../Button/StyleButton";
import { StyleParagraph } from "../Paragraph/StyleParagraph";
import { StyleTitle } from "../Title/StyleTitle";
import { StyleHome } from "./StyleHome";
import { MdArrowRight, MdPlayCircle } from "react-icons/md"

export default function Home() {
    return (
        <StyleHome>
            <div className="content">
                <StyleTitle tag="h1" fontSize="lg">
                    Let's explore your own <strong>VS</strong> world
                </StyleTitle>

                <StyleParagraph fontSize="sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat alias distinctio, autem repellendus enim laudantium? Aspernatur quae iste rerum ab voluptatem quasi, incidunt impedit fugiat eligendi, ad.
                </StyleParagraph>
                <div className="buttons">
                    <StyleButton buttonStyle="solid" buttonSize="md">Exploere Naw</StyleButton>
                    <StyleButton buttonStyle="transparent" buttonSize="md">
                        <MdPlayCircle size={30} />
                        Learn More
                        <MdArrowRight size={20} />
                    </StyleButton>
                </div>
            </div>

            <div className="img">
                <img src="/img/background-vr(1).png"/>
            </div>
        </StyleHome>
    )
}