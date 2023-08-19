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
                    <StyleButtonLink href="/" linkStyle="shine">Company</StyleButtonLink>
                    <StyleButtonLink href="/" linkStyle="shine">Support</StyleButtonLink>
                    <StyleButtonLink href="/" linkStyle="shine">Movement</StyleButtonLink>
                </div>
            </div>

            <div className="copyright">
                <StyleTitle tag="h3" fontSize="sm">© 2023 Veta - All rights reserved</StyleTitle>
                <div>
                    <StyleButtonLink linkStyle="normal" href="/">Terms & Agreements</StyleButtonLink>
                    <StyleButtonLink linkStyle="normal" href="/">Privacy Policy</StyleButtonLink>
                </div>
            </div>
        </StyleFooter>
    )
}