import { AiFillEye } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { MdDevices } from "react-icons/md"

interface iDataItem {
    icon: JSX.Element;
    title: string;
}

export const DataList: iDataItem[] = [
    {
        icon: <AiFillEye />,
        title: "Virtual Reality"
    },
    {
        icon: <AiFillStar />,
        title: "Augmented Reality"
    },
    {
        icon: <MdDevices />,
        title: "Smart Device"
    },
];