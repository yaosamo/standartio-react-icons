import * as React from "react";
import { SVGProps } from "react";

const MagnifyingGlass = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><g strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><circle cx={11} cy={11} r={7} /><path d="m19.5 19.5-3-4-1 1 4 3Z" /></g></svg>;

export default MagnifyingGlass;