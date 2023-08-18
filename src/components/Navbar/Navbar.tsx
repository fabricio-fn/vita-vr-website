import { StyleButton } from "../Button/StyleButton";
import { StyleButtonLink } from "../ButtonLink/StyleButtonLink";
import { StyleNavbar } from "./StyleNavbar";

export default function Navbar() {
    return (
        <StyleNavbar>
            <StyleButtonLink linkStyle="normal" href="/">Inicio</StyleButtonLink>
            <StyleButtonLink linkStyle="normal" href="/">Produtos</StyleButtonLink>
            <StyleButton buttonSize="lg" buttonStyle="outline">Sing Up</StyleButton>
        </StyleNavbar>
    )
}