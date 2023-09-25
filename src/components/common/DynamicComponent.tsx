import {BookOpenIcon, FolderIcon, RectangleGroupIcon,CircleStackIcon} from "@heroicons/react/24/outline/index.js";
import React from "react";

type DynamicProps = {
    name : string,
    className? : string
}
const DynamicComponent = (props : DynamicProps) => {
    const icons : any = {
        BookOpenIcon,
        FolderIcon,
        RectangleGroupIcon,
        CircleStackIcon
    };

    const TagComponent = icons[props.name];
    return <TagComponent  {...props} />
};

export default DynamicComponent;
