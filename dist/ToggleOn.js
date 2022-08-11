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
var ToggleOn = function (props) { return _jsx("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M16.5 6.5h-9a5.5 5.5 0 1 0 0 11h9m0-11a5.5 5.5 0 1 0 0 11m0-11a5.5 5.5 0 1 1 0 11m-9.5-6v1" }) })); };
export default ToggleOn;
