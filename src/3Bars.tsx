import * as React from "react";
import { SVGProps } from "react";

const 3Bars = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.5 14v4m5.5-8v8m5.5-12v12" /></svg>;

export default 3Bars;