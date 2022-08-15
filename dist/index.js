import * as React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var ChevronRight = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m9 4 8 8-8 8" })); };

var ChevronNarrowDown = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m20 10-8 3-8-3" })); };

var Trash = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("path", { d: "M7 9v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9" }),
        React.createElement("path", { strokeLinecap: "round", d: "M5.5 7h4m9 0h-4m-5 0 .5-2h4l.5 2m-5 0h5" }))); };

var ThreeHorizontalLines = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M4 6.5h16M4 12h16M4 17.5h16" })); };

var Plus = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 6.5v11m5.5-5.5h-11" })); };

var ArrowUp = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 17.5V6m0 0 4 4m-4-4-4 4" })); };

var ArrowTriangleRight = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { fill: "#000", d: "M14.61 11.688 10.65 8.52a.4.4 0 0 0-.65.312v6.336a.4.4 0 0 0 .65.312l3.96-3.168a.4.4 0 0 0 0-.624Z" })); };

var Checkmark = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m7 12.5 3.5 4 6.5-9" })); };

var ArrowUpArrowDown = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7.5 17.5v-11m0 0L11 10M7.5 6.5 4 10m12.5-3.5v11m0 0L20 14m-3.5 3.5L13 14" })); };

var Star = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinejoin: "round", strokeWidth: 1.5, d: "M11.524 4.963a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.346h4.637a.5.5 0 0 1 .294.904l-3.751 2.726a.5.5 0 0 0-.182.559l1.433 4.41a.5.5 0 0 1-.77.559l-3.751-2.726a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.182-.558l-3.75-2.726a.5.5 0 0 1 .293-.904h4.637a.5.5 0 0 0 .476-.346l1.432-4.41Z" })); };

var ArrowUpRight = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7.5 16.5 16 8m0 0v6m0-6h-6" })); };

var ExclamationMarkCircle = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("circle", { cx: 12, cy: 12, r: 9, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 8v5.5" }),
    React.createElement("circle", { cx: 12, cy: 16, r: 1, fill: "#000" })); };

var InfoCircle = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("circle", { cx: 12, cy: 12, r: 9, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 16v-5h-.5m0 5h1" }),
    React.createElement("circle", { r: 1, fill: "#000", transform: "matrix(1 0 0 -1 12 8)" })); };

var CheckmarkCircle = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("circle", { cx: 12, cy: 12, r: 9 }),
        React.createElement("path", { d: "m8.5 12.5 2.5 3 4.5-7" }))); };

var TwoChevronRight = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m12 6 6 6-6 6M6 6l6 6-6 6" })); };

var ChevronLeft = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m15 4-8 8 8 8" })); };

var SquareGrid = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("rect", { width: 6, height: 6, x: 4.5, y: 4.5, rx: 1.5 }),
        React.createElement("rect", { width: 6, height: 6, x: 4.5, y: 13.5, rx: 1.5 }),
        React.createElement("rect", { width: 6, height: 6, x: 13.5, y: 4.5, rx: 1.5 }),
        React.createElement("rect", { width: 6, height: 6, x: 13.5, y: 13.5, rx: 1.5 }))); };

var TwoHorizontalLines = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M4 9h16M4 15h16" })); };

var Lock = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("rect", { width: 12, height: 9, x: 6, y: 11, rx: 1.5 }),
        React.createElement("path", { d: "M16 11V7a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v4" }))); };

var ArrowRight = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M6.25 11.75h11.5m0 0-4-4m4 4-4 4" })); };

var ArrowDownSquare = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 3.5V16m0 0 3.5-3.5M12 16l-3.5-3.5m7-3.5h2a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h2" })); };

var ArrowTriangleLeft = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { fill: "#000", d: "m9.39 11.688 3.96-3.168a.4.4 0 0 1 .65.312v6.336a.4.4 0 0 1-.65.312l-3.96-3.168a.4.4 0 0 1 0-.624Z" })); };

var At = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M16 12a4 4 0 1 0-4 4c2 0 4-1.79 4-4Zm0 0V8m0 4c0 1.5 0 4 2.5 4s2.5-2.5 2.5-4a9 9 0 1 0-9 9c1.675.084 3.938-.421 5.776-1.832" })); };

var ArrowDownRight = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m7.5 8 8.5 8.5m0 0v-6m0 6h-6" })); };

var XMark = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17 7 7 17M7 7l10 10" })); };

var Sparkles = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { fill: "#000" },
        React.createElement("path", { d: "M13.513 8.062c.121-.513.853-.513.974 0l.827 3.508a1.5 1.5 0 0 0 1.116 1.116l3.508.827c.513.121.513.853 0 .974l-3.508.827a1.5 1.5 0 0 0-1.116 1.116l-.827 3.508c-.121.513-.853.513-.974 0l-.827-3.508a1.5 1.5 0 0 0-1.116-1.116l-3.508-.827c-.513-.121-.513-.853 0-.974l3.508-.827a1.5 1.5 0 0 0 1.116-1.116l.827-3.508ZM6.305 3.825c.049-.206.341-.206.39 0l.522 2.214a1 1 0 0 0 .744.744l2.214.522c.205.049.205.341 0 .39l-2.214.522a1 1 0 0 0-.744.744l-.522 2.214c-.049.205-.341.205-.39 0l-.522-2.214a1 1 0 0 0-.744-.744l-2.214-.522c-.206-.049-.206-.341 0-.39l2.214-.522a1 1 0 0 0 .744-.744l.522-2.214Z" }),
        React.createElement("circle", { cx: 13, cy: 3, r: 1 }))); };

var ChevronDown = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m4 8 8 8 8-8" })); };

var List = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8 7h12M8 12h12M8 17h12" }),
    React.createElement("circle", { cx: 5, cy: 7, r: 1, fill: "#000" }),
    React.createElement("circle", { cx: 5, cy: 12, r: 1, fill: "#000" }),
    React.createElement("circle", { cx: 5, cy: 17, r: 1, fill: "#000" })); };

var Ellipsis = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { fill: "#000" },
        React.createElement("circle", { cx: 5.5, cy: 12, r: 1.5 }),
        React.createElement("circle", { cx: 18.5, cy: 12, r: 1.5 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 1.5 }))); };

var Key = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("circle", { cx: 7.5, cy: 11.5, r: 4.5, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "rotate(-90 7.5 11.5)" }),
    React.createElement("circle", { cx: 6, cy: 11.5, r: 1, fill: "#000", transform: "rotate(-90 6 11.5)" }),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m12 13 3.114-.89a1.5 1.5 0 0 1 .776-.012l2.786.696a1.5 1.5 0 0 0 1.425-.394l1.192-1.193c.63-.63.184-1.707-.707-1.707H12" })); };

var ArrowDown = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 6v11.5m0 0 4-4m-4 4-4-4" })); };

var ArrowUpSquare = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15.5 9h2a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h2m3.5 5.5V2m0 0 3.5 3.5M12 2 8.5 5.5" })); };

var ArrowTriangleDown = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { fill: "#000", d: "M11.688 14.61 8.52 10.65a.4.4 0 0 1 .312-.65h6.336a.4.4 0 0 1 .312.65l-3.168 3.96a.4.4 0 0 1-.624 0Z" })); };

var MagnifyingGlass = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("circle", { cx: 11, cy: 11, r: 7 }),
        React.createElement("path", { d: "m19.5 19.5-3-4-1 1 4 3Z" }))); };

var Gear = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { fill: "#000", d: "m10.112 3.882.746.074-.746-.074Zm-1.938 1.09-.359-.658.36.658ZM6.59 4.683l-.53-.53.53.53Zm.67-.033-.475.58.475-.58ZM4.65 7.26l-.58.474.58-.475Zm.034-.671.53.53-.53-.53Zm.29 1.585.658.36-.659-.36Zm-.048-.579-.58.475.58-.475Zm-1.043 2.517-.075-.746.075.746Zm-.432.043.075.746-.075-.746Zm0 3.69.075-.746-.075.746Zm.875.419-.72.212.72-.212Zm-.443-.376-.075.746.075-.746Zm1.043 2.517-.58-.475.58.475Zm.047-.58.659-.358-.659.359Zm-.289 1.586.53-.53-.53.53Zm-.033-.67-.58-.475.58.475Zm2.61 2.61.474.58-.475-.58Zm-.671-.034-.53.53.53-.53Zm1.585-.29-.359.659.36-.658Zm-.579.048.475.58-.475-.58Zm2.141.6-.212.72.212-.72Zm4.109.875-.746-.075.746.075Zm.419-.875.212.72-.212-.72Zm-.376.443-.746-.074.746.074Zm2.517-1.043.475-.58-.475.58Zm-.58-.047.36.658-.36-.658Zm1.586.289.53.53-.53-.53Zm-.67.033-.475.58.475-.58Zm2.61-2.609-.581.475.58-.475Zm-.034.67.53.53-.53-.53Zm-.29-1.585.659.359-.658-.36Zm.048.579.58-.475-.58.475Zm1.043-2.517-.074-.746.074.746Zm-.443.376.72.212-.72-.212Zm.875-.419.074.746-.074-.746Zm0-3.69.074-.746-.074.746Zm-.875-.419.72-.212-.72.212Zm.443.376-.074.746.074-.746Zm-1.043-2.517.58.475-.58-.475Zm-.047.58.658-.36-.658.36Zm.289-1.586.53-.53-.53.53Zm.033.67-.58-.475.58.475Zm-2.609-2.61-.475-.58.475.58Zm.67.034-.53.53.53-.53Zm-1.585.29.359-.659-.36.658Zm.579-.048.475.58-.475-.58Zm-2.517-1.043-.746.074.746-.074Zm-3.733-.432-.746-.074.746.074Zm3.69 0 .746-.074-.746.074Zm-.498-1.2h-2.694v1.5h2.694v-1.5Zm1.287 1.557-.043-.431-1.492.149.043.431 1.492-.15Zm-.582 1.237c.496.146.97.344 1.415.587l.718-1.317a8.7 8.7 0 0 0-1.71-.709l-.423 1.44Zm2.214-.975-.336.275.95 1.161.336-.275-.95-1.16Zm3.581 1.99-1.905-1.906-1.061 1.06 1.905 1.906 1.061-1.06Zm-.191 2.011.275-.336-1.161-.95-.275.336 1.16.95Zm-1.287.463c.243.446.44.92.587 1.415l1.439-.424a8.695 8.695 0 0 0-.709-1.709l-1.317.718Zm2.255.876-.43-.043-.15 1.492.431.043.15-1.492Zm1.126 3.938v-2.694h-1.5v2.694h1.5Zm-1.557 1.287.431-.043-.149-1.492-.431.043.15 1.492Zm-1.237-.582c-.146.496-.344.97-.587 1.415l1.317.718a8.69 8.69 0 0 0 .709-1.71l-1.44-.423Zm.975 2.214-.275-.336-1.161.95.275.336 1.16-.95Zm-1.99 3.581 1.906-1.905-1.06-1.061-1.906 1.905 1.06 1.061Zm-2.011-.191.336.275.95-1.161-.336-.275-.95 1.16Zm-.463-1.287a7.3 7.3 0 0 1-1.415.587l.424 1.439a8.698 8.698 0 0 0 1.709-.709l-.718-1.317Zm-.876 2.255.043-.43-1.492-.15-.043.431 1.492.15Zm-3.938 1.126h2.694v-1.5h-2.694v1.5Zm-1.287-1.557.043.431 1.492-.149-.043-.431-1.492.15Zm.582-1.237a7.2 7.2 0 0 1-1.415-.587l-.718 1.317a8.69 8.69 0 0 0 1.71.709l.423-1.44Zm-2.214.975.336-.275-.95-1.161-.336.275.95 1.16Zm-3.581-1.99 1.906 1.906 1.06-1.06-1.905-1.906-1.061 1.06Zm.191-2.011-.275.336 1.161.95.275-.336-1.16-.95Zm1.287-.463a7.198 7.198 0 0 1-.587-1.415l-1.439.424a8.7 8.7 0 0 0 .709 1.709l1.317-.718Zm-2.255-.876.43.043.15-1.492-.431-.043-.15 1.492ZM2.25 10.653v2.694h1.5v-2.694h-1.5Zm1.557-1.287-.431.043.149 1.492.431-.043-.15-1.492Zm1.237.582c.146-.496.344-.97.587-1.415l-1.317-.718a8.7 8.7 0 0 0-.709 1.71l1.44.423ZM4.07 7.734l.275.336 1.161-.95-.275-.336-1.16.95Zm1.99-3.581L4.153 6.059l1.06 1.06L7.12 5.214 6.06 4.153Zm2.011.191-.336-.275-.95 1.161.336.275.95-1.16Zm.463 1.287a7.2 7.2 0 0 1 1.415-.587l-.424-1.439a8.767 8.767 0 0 0-1.709.709l.718 1.317Zm.876-2.255-.043.43 1.492.15.043-.431-1.492-.15Zm.539 1.668a1.27 1.27 0 0 0 .91-1.088l-1.492-.15a.23.23 0 0 1 .158-.2l.424 1.438Zm-2.828.461c.415.34.977.364 1.413.126l-.718-1.317a.23.23 0 0 1 .255.03l-.95 1.161Zm0-.291a.25.25 0 0 1-.336.016l.95-1.16a1.25 1.25 0 0 0-1.675.083l1.06 1.06Zm-1.89 1.57a.25.25 0 0 1-.016.335L4.153 6.06a1.25 1.25 0 0 0-.084 1.675l1.161-.95Zm.4 1.75a1.27 1.27 0 0 0-.125-1.414l-1.16.95a.23.23 0 0 1-.031-.255l1.317.718Zm-1.674 2.324a1.27 1.27 0 0 0 1.088-.91l-1.439-.424a.23.23 0 0 1 .202-.158l.15 1.492Zm-.206-.206a.25.25 0 0 1-.225.25l-.15-1.493a1.25 1.25 0 0 0-1.125 1.243h1.5ZM3.525 13.1a.25.25 0 0 1 .225.248h-1.5c0 .643.487 1.18 1.126 1.244l.149-1.492Zm1.52.953a1.27 1.27 0 0 0-1.089-.91l-.15 1.492a.23.23 0 0 1-.2-.158l1.438-.424Zm.46 2.828a1.27 1.27 0 0 0 .126-1.413l-1.317.718a.23.23 0 0 1 .03-.255l1.161.95Zm-.291 0a.25.25 0 0 1 .016.336l-1.16-.95a1.25 1.25 0 0 0 .083 1.676l1.06-1.061Zm1.57 1.89a.25.25 0 0 1 .335.017l-1.06 1.06a1.25 1.25 0 0 0 1.675.084l-.95-1.161Zm1.75-.4a1.27 1.27 0 0 0-1.414.125l.95 1.16a.23.23 0 0 1-.255.031l.718-1.317Zm2.324 1.674a1.27 1.27 0 0 0-.91-1.088l-.424 1.439a.23.23 0 0 1-.158-.202l1.492-.15Zm-.206.206a.25.25 0 0 1 .25.225l-1.493.15a1.25 1.25 0 0 0 1.243 1.125v-1.5Zm2.447.225a.25.25 0 0 1 .248-.225v1.5a1.25 1.25 0 0 0 1.244-1.126l-1.492-.149Zm.953-1.52a1.27 1.27 0 0 0-.91 1.089l1.492.15a.23.23 0 0 1-.158.2l-.424-1.438Zm2.828-.46a1.27 1.27 0 0 0-1.413-.126l.718 1.317a.23.23 0 0 1-.255-.03l.95-1.161Zm0 .291a.25.25 0 0 1 .336-.016l-.95 1.16a1.25 1.25 0 0 0 1.676-.083l-1.061-1.06Zm1.89-1.57a.25.25 0 0 1 .017-.335l1.06 1.06a1.25 1.25 0 0 0 .084-1.675l-1.161.95Zm-.4-1.75a1.27 1.27 0 0 0 .125 1.414l1.16-.95a.23.23 0 0 1 .031.255l-1.317-.718Zm1.674-2.324a1.27 1.27 0 0 0-1.088.91l1.439.424a.23.23 0 0 1-.202.158l-.15-1.492Zm.206.206a.25.25 0 0 1 .225-.25l.15 1.493a1.25 1.25 0 0 0 1.125-1.243h-1.5Zm.225-2.447a.25.25 0 0 1-.225-.248h1.5a1.25 1.25 0 0 0-1.126-1.244l-.149 1.492Zm-1.52-.953c.141.477.556.857 1.089.91l.15-1.492a.23.23 0 0 1 .2.158l-1.438.424Zm-.46-2.828a1.27 1.27 0 0 0-.126 1.413l1.317-.718a.23.23 0 0 1-.03.255l-1.161-.95Zm.291 0a.25.25 0 0 1-.016-.336l1.16.95a1.25 1.25 0 0 0-.083-1.675l-1.06 1.06Zm-1.57-1.89a.25.25 0 0 1-.335-.016l1.06-1.061a1.25 1.25 0 0 0-1.675-.084l.95 1.161Zm-1.75.4a1.27 1.27 0 0 0 1.414-.125l-.95-1.16a.23.23 0 0 1 .255-.031l-.718 1.317Zm-2.324-1.674c.053.533.433.948.91 1.088l.424-1.439a.23.23 0 0 1 .158.202l-1.492.15Zm-2.49-1.706A1.25 1.25 0 0 0 9.41 3.376l1.492.149a.25.25 0 0 1-.248.225v-1.5Zm2.696 1.5a.25.25 0 0 1-.25-.225l1.493-.15a1.25 1.25 0 0 0-1.243-1.125v1.5Z" }),
    React.createElement("circle", { r: 3, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 1, strokeWidth: 1.5, transform: "matrix(1 0 0 -1 12 12)" })); };

var Bell = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M14.5 18.5c0 1.105-1 2-2.5 2s-2.5-.895-2.5-2M20 17l-.828-.828A4 4 0 0 1 18 13.343V10a6.002 6.002 0 0 0-4-5.659S14 2 12 2s-2 2.34-2 2.34C7.67 5.165 6 7.388 6 10v3.343a4 4 0 0 1-1.172 2.829L4 17v1h16v-1Z" })); };

var Clock = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("circle", { cx: 12, cy: 12, r: 9 }),
        React.createElement("path", { d: "M12 6v6l3 3" }))); };

var House = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("path", { d: "M10 14.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V20h-4v-5.5Z" }),
        React.createElement("path", { d: "M17.5 7V5m-6.7-1.1-6 4.5A2 2 0 0 0 4 10v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-.8-1.6l-6-4.5a2 2 0 0 0-2.4 0Z" }))); };

var Sparkle = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { fill: "#000", d: "M11.513 6.062c.121-.513.853-.513.974 0l.827 3.508a1.5 1.5 0 0 0 1.116 1.116l3.508.827c.513.121.513.853 0 .974l-3.508.827a1.5 1.5 0 0 0-1.116 1.116l-.827 3.508c-.121.513-.853.513-.974 0l-.827-3.508a1.5 1.5 0 0 0-1.116-1.116l-3.508-.827c-.513-.121-.513-.853 0-.974l3.508-.827a1.5 1.5 0 0 0 1.116-1.116l.827-3.508Z" })); };

var ChevronUp = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m4 16 8-8 8 8" })); };

var HorizontalLineFilter = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M6 8h12M8 12h8m-5.5 4h3" })); };

var Person = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("circle", { cx: 12, cy: 8, r: 3 }),
        React.createElement("path", { d: "M12 13.5c5.16 0 6.522 1.767 6.877 3.508.22 1.082-.773 1.992-1.878 1.992H7c-1.104 0-2.098-.91-1.877-1.992C5.478 15.268 6.839 13.5 12 13.5Z" }))); };

var Globe = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("circle", { cx: 12, cy: 12, r: 9 }),
        React.createElement("ellipse", { cx: 12, cy: 12, rx: 5, ry: 9 }),
        React.createElement("path", { d: "M3.5 9h17m-17 6h17" }))); };

var ArrowLeft = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17.75 11.75H6.25m0 0 4 4m-4-4 4-4" })); };

var Doc = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 4.5V8a2 2 0 0 0 2 2h3.5m-.086-.586-4.828-4.828A2 2 0 0 0 11.172 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7.172a2 2 0 0 0-.586-1.414Z" })); };

var ArrowTriangleUp = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { fill: "#000", d: "M11.688 9.39 8.52 13.35a.4.4 0 0 0 .312.65h6.336a.4.4 0 0 0 .312-.65l-3.168-3.96a.4.4 0 0 0-.624 0Z" })); };

var ArrowUpRightSquare = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M10 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2m-7.5-2.5L20 4m0 0v6m0-6h-6" })); };

var QuestionMarkCircle = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("circle", { cx: 12, cy: 12, r: 9, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }),
    React.createElement("circle", { cx: 12, cy: 16, r: 1, fill: "#000" }),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 13.5c0-2 2-1.5 2-3.5 0-2.654-4-2.654-4 0" })); };

var Heart = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7.75 4A4.75 4.75 0 0 0 3 8.75C3 14 12 20 12 20s9-6 9-11.25C21 5.5 18.873 4 16.25 4A4.75 4.75 0 0 0 12 6.626 4.75 4.75 0 0 0 7.75 4Z" })); };

var XMarkCircle = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("path", { d: "m15 9-6 6m0-6 6 6" }),
        React.createElement("circle", { cx: 12, cy: 12, r: 9 }))); };

var PersonInAHat = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinejoin: "round", strokeWidth: 1.5, d: "M3 8v5.5a8.5 8.5 0 0 0 8.5 8.5h1a8.5 8.5 0 0 0 8.5-8.5V8" }),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 10v2m6-2v2M2 8s3.5-2 10-2 10 2 10 2" }),
    React.createElement("path", { fill: "#000", d: "M12 6C5.5 6 2 8 2 8l1 1c2 0 3-1.5 9-1.5S19 9 21 9l1-1s-3.5-2-10-2Z" }),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20 7c0-1.818-2.222-5-8-5-5.778 0-8 3.182-8 5m8.5 5 .306 1.836A1 1 0 0 1 11.82 15h-.32" }),
    React.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M21 14s-1.5 8-9 8-9-8-9-8l.75-1c0 3 1.717 4.5 2.75 4.5 1.072 0 2.144-.287 3.138-.554.862-.23 1.666-.446 2.362-.446.696 0 1.5.215 2.362.446.994.267 2.066.554 3.138.554 1.05 0 2.75-1.5 2.75-4.5l.75 1Zm-9.972 4.468.002.001-.011-.01.004.004.004.003.001.002Zm-.01-.01c-.001-.002 0 0 0 0Zm.026.02a.52.52 0 0 1-.025-.02.75.75 0 0 0-1.05 1.072l.002.001c.162.162.365.288.569.39.341.17.83.329 1.46.329s1.119-.158 1.46-.33a2.18 2.18 0 0 0 .57-.389.75.75 0 0 0-1.048-1.073 1.102 1.102 0 0 1-.192.121c-.159.08-.42.171-.79.171a1.75 1.75 0 0 1-.79-.17 1.102 1.102 0 0 1-.166-.102Z", clipRule: "evenodd" })); };

var ToggleOn = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M16.5 6.5h-9a5.5 5.5 0 1 0 0 11h9m0-11a5.5 5.5 0 1 0 0 11m0-11a5.5 5.5 0 1 1 0 11m-9.5-6v1" })); };

var ToggleOff = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7.5 6.5h9a5.5 5.5 0 1 1 0 11h-9m0-11a5.5 5.5 0 1 0 0 11m0-11a5.5 5.5 0 1 1 0 11" }),
    React.createElement("circle", { cx: 17, cy: 12, r: 1, fill: "#000" })); };

var PowerButton = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7.6 7C6.014 8.237 5 10.13 5 12.25 5 15.978 8.134 19 12 19s7-3.022 7-6.75c0-2.12-1.014-4.013-2.6-5.25M12 5v5" })); };

var BellSlash = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("mask", { id: "a", width: 22, height: 22, x: 1, y: 1, maskUnits: "userSpaceOnUse", style: {
            maskType: "alpha"
        } },
        React.createElement("path", { fill: "#D9D9D9", d: "m1 3 20 20H1V3Zm2-2h20v20L3 1Z" })),
    React.createElement("g", { mask: "url(#a)" },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M14.5 19.5c0 1.105-1 2-2.5 2s-2.5-.895-2.5-2M20 18l-.828-.828A4 4 0 0 1 18 14.343V11a6.002 6.002 0 0 0-4-5.659S14 3 12 3s-2 2.34-2 2.34a6.019 6.019 0 0 0-3.538 3.346A5.982 5.982 0 0 0 6 11v3.343a4 4 0 0 1-1.172 2.829L4 18v1h16v-1Z" })),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m4 4 17 17" })); };

var Bottle = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("path", { d: "M17 19v-8.938a4 4 0 0 0-.527-1.984l-1.251-2.19a1 1 0 0 1-.08-.812l.307-.922a1 1 0 0 0 .051-.316V3.4a.4.4 0 0 0-.4-.4H8.9a.4.4 0 0 0-.4.4v.438a1 1 0 0 0 .051.316l.308.922a1 1 0 0 1-.08.812l-1.252 2.19A4 4 0 0 0 7 10.062V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2Z" }),
        React.createElement("circle", { cx: 12, cy: 12.5, r: 2.5 }))); };

var ThreeBars = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M6.5 14v4m5.5-8v8m5.5-12v12" })); };

var EnvelopeOpen = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("path", { d: "M3 9.5V20a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 20V9.5m0 0-8.415-6.077a1 1 0 0 0-1.17 0L3 9.5" }),
        React.createElement("path", { d: "m20.5 21-7.864-6.476a1 1 0 0 0-1.272 0L3.5 21M21 10l-7 5.444M3 10l7 5.444" }))); };

var Envelope = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 },
        React.createElement("path", { d: "M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z" }),
        React.createElement("path", { d: "m20.5 6-7.472 7.032a1.5 1.5 0 0 1-2.056 0L3.5 6m17 12.5-6.139-6.056M3.5 18.5l6.071-6" }))); };

var Bookmark = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7 4.5A1.5 1.5 0 0 1 8.5 3h7A1.5 1.5 0 0 1 17 4.5v15.377a.5.5 0 0 1-.834.372l-3.497-3.147a1 1 0 0 0-1.338 0L7.834 20.25A.5.5 0 0 1 7 19.877V4.5Z" })); };

var Pencil = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15.607 5.707a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1 0 1.414L9.576 15.98a2 2 0 0 1-.781.483l-2.545.848a.1.1 0 0 1-.126-.126l.848-2.545a2 2 0 0 1 .483-.782l8.152-8.15Zm-1.415 1.414 2.122 2.122" })); };

var ChevronLeftSlashChevronRight = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m16 8 4 4-4 4M8 8l-4 4 4 4m5-9.5-2.5 11" })); };

var PencilSquare = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" }),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M18.293 3.707a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1 0 1.414l-8.151 8.152a2 2 0 0 1-.782.483l-2.544.848a.1.1 0 0 1-.127-.126l.848-2.545a2 2 0 0 1 .484-.782l8.15-8.15Z" })); };

var Flag = function (props) { return React.createElement("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M5 13.577c5-2.577 9 2.423 14 0v-9C15 7 10 2 5 4.577V21" })); };

export { ArrowDown, ArrowDownRight, ArrowDownSquare, ArrowLeft, ArrowRight, ArrowTriangleDown, ArrowTriangleLeft, ArrowTriangleRight, ArrowTriangleUp, ArrowUp, ArrowUpArrowDown, ArrowUpRight, ArrowUpRightSquare, ArrowUpSquare, At, Bell, BellSlash, Bookmark, Bottle, Checkmark, CheckmarkCircle, ChevronDown, ChevronLeft, ChevronLeftSlashChevronRight, ChevronNarrowDown, ChevronRight, ChevronUp, Clock, Doc, Ellipsis, Envelope, EnvelopeOpen, ExclamationMarkCircle, Flag, Gear, Globe, Heart, HorizontalLineFilter, House, InfoCircle, Key, List, Lock, MagnifyingGlass, Pencil, PencilSquare, Person, PersonInAHat, Plus, PowerButton, QuestionMarkCircle, Sparkle, Sparkles, SquareGrid, Star, ThreeBars, ThreeHorizontalLines, ToggleOff, ToggleOn, Trash, TwoChevronRight, TwoHorizontalLines, XMark, XMarkCircle };
//# sourceMappingURL=index.js.map
