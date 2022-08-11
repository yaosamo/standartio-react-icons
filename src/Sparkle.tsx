import * as React from "react";
import { SVGProps } from "react";

const Sparkle = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path fill="#000" d="M11.513 6.062c.121-.513.853-.513.974 0l.827 3.508a1.5 1.5 0 0 0 1.116 1.116l3.508.827c.513.121.513.853 0 .974l-3.508.827a1.5 1.5 0 0 0-1.116 1.116l-.827 3.508c-.121.513-.853.513-.974 0l-.827-3.508a1.5 1.5 0 0 0-1.116-1.116l-3.508-.827c-.513-.121-.513-.853 0-.974l3.508-.827a1.5 1.5 0 0 0 1.116-1.116l.827-3.508Z" /></svg>;

export default Sparkle;