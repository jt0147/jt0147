import { Fragment, forwardRef } from "react";

import { TIconProps } from "@/types";

const Ripples = forwardRef<SVGSVGElement, TIconProps>(
    ({ size = 24, ...props }, ref) => {
        return (
            <Fragment>
                <svg
                    ref={ref}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    width={size}
                    height={size}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    {...props}
                >
                    <circle
                        fill="none"
                        stroke-opacity="1"
                        stroke="currentColor"
                        stroke-width=".5"
                        cx="100"
                        cy="100"
                        r="0"
                    >
                        <animate
                            attributeName="r"
                            calcMode="spline"
                            dur="2"
                            values="1;80"
                            keyTimes="0;1"
                            keySplines="0 .2 .5 1"
                            repeatCount="indefinite"
                        ></animate>
                        <animate
                            attributeName="stroke-width"
                            calcMode="spline"
                            dur="2"
                            values="0;25"
                            keyTimes="0;1"
                            keySplines="0 .2 .5 1"
                            repeatCount="indefinite"
                        ></animate>
                        <animate
                            attributeName="stroke-opacity"
                            calcMode="spline"
                            dur="2"
                            values="1;0"
                            keyTimes="0;1"
                            keySplines="0 .2 .5 1"
                            repeatCount="indefinite"
                        ></animate>
                    </circle>
                </svg>
            </Fragment>
        );
    }
);

export default Ripples;
