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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ExclamationMarkCircle = function (props) { return _jsxs("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props, { children: [_jsx("circle", { cx: 12, cy: 12, r: 9, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 8v5.5" }), _jsx("circle", { cx: 12, cy: 16, r: 1, fill: "#000" })] })); };
export default ExclamationMarkCircle;
