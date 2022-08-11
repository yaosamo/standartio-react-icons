var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
var Heart = function (props) { return _jsx("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7.75 4A4.75 4.75 0 0 0 3 8.75C3 14 12 20 12 20s9-6 9-11.25C21 5.5 18.873 4 16.25 4A4.75 4.75 0 0 0 12 6.626 4.75 4.75 0 0 0 7.75 4Z" }) })); };
export default Heart;
