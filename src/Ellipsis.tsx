import * as React from "react";
import { SVGProps } from "react";

const Ellipsis = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><g fill="#000"><circle cx={5.5} cy={12} r={1.5} /><circle cx={18.5} cy={12} r={1.5} /><circle cx={12} cy={12} r={1.5} /></g></svg>;

export default Ellipsis;