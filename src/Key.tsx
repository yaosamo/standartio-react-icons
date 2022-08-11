import * as React from "react";
import { SVGProps } from "react";

const Key = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={7.5} cy={11.5} r={4.5} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} transform="rotate(-90 7.5 11.5)" /><circle cx={6} cy={11.5} r={1} fill="#000" transform="rotate(-90 6 11.5)" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m12 13 3.114-.89a1.5 1.5 0 0 1 .776-.012l2.786.696a1.5 1.5 0 0 0 1.425-.394l1.192-1.193c.63-.63.184-1.707-.707-1.707H12" /></svg>;

export default Key;