import { StyleButton } from "../Button/StyleButton";
import { StyleButtonLink } from "../ButtonLink/StyleButtonLink";
import { StyleNavbar } from "./StyleNavbar";

export default function Navbar() {
    return (
        <StyleNavbar>
            <StyleButtonLink linkStyle="normal" href="https://www.linkedin.com/in/fabriciofn/" target="_blank">About Us</StyleButtonLink>
            <StyleButtonLink linkStyle="normal" href="https://www.linkedin.com/in/fabriciofn/" target="_blank">Our Project</StyleButtonLink>
            <StyleButtonLink linkStyle="normal" href="https://www.linkedin.com/in/fabriciofn/" target="_blank">Community</StyleButtonLink>
            <StyleButtonLink linkStyle="normal" href="https://www.linkedin.com/in/fabriciofn/" target="_blank">Resources</StyleButtonLink>
            <StyleButton buttonSize="lg" buttonStyle="outline">Sing Up</StyleButton>
        </StyleNavbar>
    )
}