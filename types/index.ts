import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: String;
    containerStyles?: String;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}
