import * as React from "react";
import { SVGProps } from "react";

const SquareGrid = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><g strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><rect width={6} height={6} x={4.5} y={4.5} rx={1.5} /><rect width={6} height={6} x={4.5} y={13.5} rx={1.5} /><rect width={6} height={6} x={13.5} y={4.5} rx={1.5} /><rect width={6} height={6} x={13.5} y={13.5} rx={1.5} /></g></svg>;

export default SquareGrid;