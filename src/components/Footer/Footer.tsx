import { StyleButtonLink } from "../ButtonLink/StyleButtonLink";
import { StyleTitle } from "../Title/StyleTitle";
import { StyleFooter } from "./StyleFooter";

export default function Footer() {
    return (
        <StyleFooter>
            <div className="header">
                <StyleTitle tag="h2" fontSize="md">VETA</StyleTitle>
                <div>
                    <StyleButtonLink href="/" linkStyle="shine">About</StyleButtonLink>
                    <StyleButtonLink href="/" linkStyle="shine">About</StyleButtonLink>
                    <StyleButtonLink href="/" linkStyle="shine">About</StyleButtonLink>
                    <StyleButtonLink href="/" linkStyle="shine">About</StyleButtonLink>
                </div>
            </div>

            <div className="copyright">
                <StyleTitle tag="h3" fontSize="sm">2023 © - All right reservad</StyleTitle>
                <div>
                    <StyleButtonLink linkStyle="normal" href="/">Inicio</StyleButtonLink>
                    <StyleButtonLink linkStyle="normal" href="/">Produtos</StyleButtonLink>
                </div>
            </div>
        </StyleFooter>
    )
}