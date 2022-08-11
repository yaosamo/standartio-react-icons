import * as React from "react";
import { SVGProps } from "react";

const Bookmark = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4.5A1.5 1.5 0 0 1 8.5 3h7A1.5 1.5 0 0 1 17 4.5v15.377a.5.5 0 0 1-.834.372l-3.497-3.147a1 1 0 0 0-1.338 0L7.834 20.25A.5.5 0 0 1 7 19.877V4.5Z" /></svg>;

export default Bookmark;