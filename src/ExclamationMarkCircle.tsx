import * as React from "react";
import { SVGProps } from "react";

const ExclamationMarkCircle = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={9} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v5.5" /><circle cx={12} cy={16} r={1} fill="#000" /></svg>;

export default ExclamationMarkCircle;