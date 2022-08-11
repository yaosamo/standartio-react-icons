import * as React from "react";
import { SVGProps } from "react";

const List = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12M8 12h12M8 17h12" /><circle cx={5} cy={7} r={1} fill="#000" /><circle cx={5} cy={12} r={1} fill="#000" /><circle cx={5} cy={17} r={1} fill="#000" /></svg>;

export default List;