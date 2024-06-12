import { Fragment, forwardRef } from "react";

import { TIconProps } from "@/types";

const SpinningDots = forwardRef<SVGSVGElement, TIconProps>(
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
                    <linearGradient id="a9">
                        <stop
                            offset="0"
                            stop-color="currentColor"
                            stop-opacity="0"
                        ></stop>
                        <stop offset="1" stop-color="currentColor"></stop>
                    </linearGradient>
                    <circle
                        fill="none"
                        stroke="url(#a9)"
                        stroke-width="15"
                        stroke-linecap="round"
                        stroke-dasharray="0 44 0 44 0 44 0 44 0 360"
                        cx="100"
                        cy="100"
                        r="70"
                        transform-origin="center"
                    >
                        <animateTransform
                            type="rotate"
                            attributeName="transform"
                            calcMode="discrete"
                            dur="2"
                            values="360;324;288;252;216;180;144;108;72;36"
                            repeatCount="indefinite"
                        ></animateTransform>
                    </circle>
                </svg>
            </Fragment>
        );
    }
);

export default SpinningDots;
