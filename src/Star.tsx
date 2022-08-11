import * as React from "react";
import { SVGProps } from "react";

const Star = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path strokeLinejoin="round" strokeWidth={1.5} d="M11.524 4.963a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.346h4.637a.5.5 0 0 1 .294.904l-3.751 2.726a.5.5 0 0 0-.182.559l1.433 4.41a.5.5 0 0 1-.77.559l-3.751-2.726a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.182-.558l-3.75-2.726a.5.5 0 0 1 .293-.904h4.637a.5.5 0 0 0 .476-.346l1.432-4.41Z" /></svg>;

export default Star;