import { StyleButtonLink } from "../ButtonLink/StyleButtonLink";
import { StyleTitle } from "../Title/StyleTitle";
import { StyleFooter } from "./StyleFooter";

export default function Footer() {
    return (
        <StyleFooter>
            <div className="header">
                <StyleTitle tag="h2" fontSize="md">VETA</StyleTitle>
                <div>
                    <StyleButtonLink href="https://github.com/fabricio-fn" linkStyle="shine">About</StyleButtonLink>
                    <StyleButtonLink href="https://github.com/fabricio-fn" linkStyle="shine">Company</StyleButtonLink>
                    <StyleButtonLink href="https://github.com/fabricio-fn" linkStyle="shine">Support</StyleButtonLink>
                    <StyleButtonLink href="https://github.com/fabricio-fn" linkStyle="shine">Movement</StyleButtonLink>
                </div>
            </div>

            <div className="copyright">
                <StyleTitle tag="h3" fontSize="sm">© 2023 Veta - All rights reserved</StyleTitle>
                <div>
                    <StyleButtonLink linkStyle="normal" href="https://github.com/fabricio-fn">Terms & Agreements</StyleButtonLink>
                    <StyleButtonLink linkStyle="normal" href="https://github.com/fabricio-fn">Privacy Policy</StyleButtonLink>
                </div>
            </div>
        </StyleFooter>
    )
}