import * as React from "react";
import { SVGProps } from "react";

const PowerButton = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.6 7C6.014 8.237 5 10.13 5 12.25 5 15.978 8.134 19 12 19s7-3.022 7-6.75c0-2.12-1.014-4.013-2.6-5.25M12 5v5" /></svg>;

export default PowerButton;