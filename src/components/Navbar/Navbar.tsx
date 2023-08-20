import { StyleButton } from "../Button/StyleButton";
import { StyleButtonLink } from "../ButtonLink/StyleButtonLink";
import { StyleNavbar } from "./StyleNavbar";

export default function Navbar() {
    return (
        <StyleNavbar>
            <StyleButtonLink linkStyle="normal" href="https://www.linkedin.com/in/fabriciofn/">About Us</StyleButtonLink>
            <StyleButtonLink linkStyle="normal" href="https://www.linkedin.com/in/fabriciofn/">Our Project</StyleButtonLink>
            <StyleButtonLink linkStyle="normal" href="https://www.linkedin.com/in/fabriciofn/">Community</StyleButtonLink>
            <StyleButtonLink linkStyle="normal" href="https://www.linkedin.com/in/fabriciofn/">Resources</StyleButtonLink>
            <StyleButton buttonSize="lg" buttonStyle="outline">Sing Up</StyleButton>
        </StyleNavbar>
    )
}