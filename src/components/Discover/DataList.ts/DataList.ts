import { MdGames } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { BsPeopleFill } from "react-icons/bs";
import { ReactElement } from "react";

interface DataItem {
    icon: ReactElement;
    title: string;
}

export const DataList: DataItem[] = [
    {
        icon: "oi",
        title: "VR For Commercial"
    }
];

// ,
//     {
//         icon: <BsPeopleFill />,
//         title: "VR For Social"
//     },
//     {
//         icon: <MdGames />,
//         title: "VR For Games"
//     },
//     {
//         icon: <MdGames />,
//         title: "VR For Education"
//     },
//     {
//         icon: <LuHeartHandshake />,
//         title: "VR For Medical"
//     },
//     {
//         icon: <MdGames />,
//         title: "VR For Entertainment"
//     },
//     {
//         icon: <MdGames />,
//         title: "VR For Business"
//     },
//     {
//         icon: <MdGames />,
//         title: "VR For Art"
//     }