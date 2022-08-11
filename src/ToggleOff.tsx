import * as React from "react";
import { SVGProps } from "react";

const ToggleOff = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 6.5h9a5.5 5.5 0 1 1 0 11h-9m0-11a5.5 5.5 0 1 0 0 11m0-11a5.5 5.5 0 1 1 0 11" /><circle cx={17} cy={12} r={1} fill="#000" /></svg>;

export default ToggleOff;