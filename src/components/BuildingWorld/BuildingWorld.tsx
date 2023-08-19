import { StyleParagraph } from "../Paragraph/StyleParagraph";
import { StyleTitle } from "../Title/StyleTitle";
import Card from "./Card/Card";
import { StyleBuildingWorld } from "./StyleBuildingWorld";

export default function BuildingWorld() {
    return (
        <StyleBuildingWorld>
            <div className="content">
                <StyleTitle tag="h2" fontSize="lg">Building your <strong>own world</strong> now</StyleTitle>
                <StyleParagraph fontSize="sm">We're already developing exciting new technologies that will help connect and explore in the world</StyleParagraph>
                <Card />
            </div>

            <div className="img">
                <img src="/img/background-vr(3).png" alt="" />
            </div>
        </StyleBuildingWorld>
    )
}