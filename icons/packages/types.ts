import { FC, SVGAttributes } from "react";

export type TIconProps = SVGAttributes<SVGElement> & {
    size?: string | number;
};

export type TIcon = FC<TIconProps>;
