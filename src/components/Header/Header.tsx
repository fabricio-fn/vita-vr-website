import { useEffect, useState } from "react"
import { StyledHeader  } from "../Header/StyleHeader"
import Navbar from "../Navbar/Navbar"
import { StyleTitle } from "../Title/StyleTitle"
import { StyleButton } from "../Button/StyleButton"
import { MdMenu } from "react-icons/md"

export default function Header() {
    const [showMenu, setShowMenu] = useState(true)

    function ToggleMenu() {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        function handleScroll() {
            if (window.innerWidth <= 768) {
                setShowMenu(false);
            }
        }

        function handleResize() {
            setShowMenu(window.innerWidth > 768);
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <StyledHeader>
            <StyleTitle tag="h2" fontSize="md">VETA</StyleTitle>
            {showMenu ? (
                <Navbar />
            ) : null}

            <StyleButton buttonStyle="transparent" buttonSize="sm" className="btnMenu"
                onClick={ToggleMenu}>
                <MdMenu size="30" />
            </StyleButton>
        </StyledHeader>
    )
}