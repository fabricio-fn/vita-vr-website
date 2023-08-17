import { StyleTitle } from "../Title/StyleTitle";
import Card from "./Card/Card";
import { StyleDiscover } from "./StyleDiscover";

export default function Discover() {
    return (
        <StyleDiscover>
            <StyleTitle tag="h2" fontSize="lg" >Discover the <strong>world</strong> based your loves</StyleTitle>
            <Card />
        </StyleDiscover>
    )
}