import { Fragment, forwardRef } from "react";

import { TIconProps } from "@/types";

const BouncingCircles = forwardRef<SVGSVGElement, TIconProps>(
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
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="15"
                        r="15"
                        cx="40"
                        cy="65"
                    >
                        <animate
                            attributeName="cy"
                            calcMode="spline"
                            dur="2"
                            values="65;135;65;"
                            keySplines=".5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                            begin="-.4"
                        ></animate>
                    </circle>
                    <circle
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="15"
                        r="15"
                        cx="100"
                        cy="65"
                    >
                        <animate
                            attributeName="cy"
                            calcMode="spline"
                            dur="2"
                            values="65;135;65;"
                            keySplines=".5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                            begin="-.2"
                        ></animate>
                    </circle>
                    <circle
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="15"
                        r="15"
                        cx="160"
                        cy="65"
                    >
                        <animate
                            attributeName="cy"
                            calcMode="spline"
                            dur="2"
                            values="65;135;65;"
                            keySplines=".5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                            begin="0"
                        ></animate>
                    </circle>
                </svg>
            </Fragment>
        );
    }
);

export default BouncingCircles;
