import * as React from "react";
import { SVGProps } from "react";

const Trash = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><g strokeLinejoin="round" strokeWidth={1.5}><path d="M7 9v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9" /><path strokeLinecap="round" d="M5.5 7h4m9 0h-4m-5 0 .5-2h4l.5 2m-5 0h5" /></g></svg>;

export default Trash;