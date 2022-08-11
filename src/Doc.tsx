import * as React from "react";
import { SVGProps } from "react";

const Doc = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5V8a2 2 0 0 0 2 2h3.5m-.086-.586-4.828-4.828A2 2 0 0 0 11.172 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7.172a2 2 0 0 0-.586-1.414Z" /></svg>;

export default Doc;