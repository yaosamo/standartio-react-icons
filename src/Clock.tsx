import * as React from "react";
import { SVGProps } from "react";

const Clock = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><g strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><circle cx={12} cy={12} r={9} /><path d="M12 6v6l3 3" /></g></svg>;

export default Clock;