import { StyleButton } from "../Button/StyleButton";
import { StyleButtonLink } from "../ButtonLink/StyleButtonLink";
import { StyleNavbar } from "./StyleNavbar";

export default function Navbar() {
    return (
        <StyleNavbar>
            <StyleButtonLink linkStyle="normal" href="/">About Us</StyleButtonLink>
            <StyleButtonLink linkStyle="normal" href="/">Our Project</StyleButtonLink>
            <StyleButtonLink linkStyle="normal" href="/">Community</StyleButtonLink>
            <StyleButtonLink linkStyle="normal" href="/">Resources</StyleButtonLink>
            <StyleButton buttonSize="lg" buttonStyle="outline">Sing Up</StyleButton>
        </StyleNavbar>
    )
}