import { Fragment, forwardRef } from "react";

import { TIconProps } from "@/types";

const BouncingBall = forwardRef<SVGSVGElement, TIconProps>(
    ({ size = 24, ...props }, ref) => {
        return (
            <Fragment>
                <svg
                    {...props}
                    ref={ref}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    width={size}
                    height={size}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linejoin="round"
                        width="30"
                        height="30"
                        x="85"
                        y="85"
                        rx="0"
                        ry="0"
                    >
                        <animate
                            attributeName="rx"
                            calcMode="spline"
                            dur="2"
                            values="15;15;5;15;15"
                            keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
                            repeatCount="indefinite"
                        ></animate>
                        <animate
                            attributeName="ry"
                            calcMode="spline"
                            dur="2"
                            values="15;15;10;15;15"
                            keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
                            repeatCount="indefinite"
                        ></animate>
                        <animate
                            attributeName="height"
                            calcMode="spline"
                            dur="2"
                            values="30;30;1;30;30"
                            keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
                            repeatCount="indefinite"
                        ></animate>
                        <animate
                            attributeName="y"
                            calcMode="spline"
                            dur="2"
                            values="40;170;40;"
                            keySplines=".6 0 1 .4;0 .8 .2 1"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </svg>
            </Fragment>
        );
    }
);

export default BouncingBall;
