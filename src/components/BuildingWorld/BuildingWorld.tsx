import { StyleParagraph } from "../Paragraph/StyleParagraph";
import { StyleTitle } from "../Title/StyleTitle";
import Card from "./Card/Card";
import { StyleBuildingWorld } from "./StyleBuildingWorld";

export default function BuildingWorld() {
    return (
        <StyleBuildingWorld>
            <div className="content">
                <StyleTitle tag="h2" fontSize="lg">Building your <strong>own world</strong> now</StyleTitle>
                <StyleParagraph fontSize="sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsa perferendis, esse culpa tempora soluta!</StyleParagraph>
                <Card />
            </div>

            <div className="img">
                <img src="/img/background-vr(3).png" alt="" />
            </div>
        </StyleBuildingWorld>
    )
}