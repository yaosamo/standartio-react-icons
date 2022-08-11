import * as React from "react";
import { SVGProps } from "react";

const InfoCircle = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={9} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16v-5h-.5m0 5h1" /><circle r={1} fill="#000" transform="matrix(1 0 0 -1 12 8)" /></svg>;

export default InfoCircle;