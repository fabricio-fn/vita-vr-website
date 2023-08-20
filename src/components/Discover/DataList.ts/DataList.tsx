import { LuHeartHandshake } from "react-icons/lu"
import { FaListAlt } from "react-icons/fa"
import { FaPaintBrush } from "react-icons/fa"
import { BsPeopleFill, BsFillTicketFill, BsJournalText } from "react-icons/bs"
import { MdBusinessCenter } from "react-icons/md"
import { BiBarChartSquare } from "react-icons/bi"

interface iDataItem {
    icon: JSX.Element
    title: string
}

export const DataList: iDataItem[] = [
    {
        icon: <BiBarChartSquare />,
        title: "VR For Commercial"
    },
    {
        icon: <BsPeopleFill />,
        title: "VR For Social"
    },
    {
        icon: <BsJournalText />,
        title: "VR For Games"
    },
    {
        icon: <FaListAlt />,
        title: "VR For Education"
    },
    {
        icon: <LuHeartHandshake />,
        title: "VR For Medical"
    },
    {
        icon: <BsFillTicketFill />,
        title: "VR For Entertainment"
    },
    {
        icon: <MdBusinessCenter />,
        title: "VR For Business"
    },
    {
        icon: <FaPaintBrush />,
        title: "VR For Art"
    }
]