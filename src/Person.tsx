import * as React from "react";
import { SVGProps } from "react";

const Person = (props: SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><g strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><circle cx={12} cy={8} r={3} /><path d="M12 13.5c5.16 0 6.522 1.767 6.877 3.508.22 1.082-.773 1.992-1.878 1.992H7c-1.104 0-2.098-.91-1.877-1.992C5.478 15.268 6.839 13.5 12 13.5Z" /></g></svg>;

export default Person;