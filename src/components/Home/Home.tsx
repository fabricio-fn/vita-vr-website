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
                    Let's explore your own <strong>VR</strong> world
                </StyleTitle>

                <StyleParagraph fontSize="sm">
                    Veta is the next evolution of the VR world, our vision is to help connect all people in the world by eliminating distance and time. start your adventure together now
                </StyleParagraph>
                <div className="buttons">
                    <StyleButton buttonStyle="solid" buttonSize="md">Explore Now</StyleButton>
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