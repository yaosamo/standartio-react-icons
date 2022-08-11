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
var BellSlash = function (props) { return _jsxs("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props, { children: [_jsx("mask", __assign({ id: "a", width: 22, height: 22, x: 1, y: 1, maskUnits: "userSpaceOnUse", style: {
                maskType: "alpha"
            } }, { children: _jsx("path", { fill: "#D9D9D9", d: "m1 3 20 20H1V3Zm2-2h20v20L3 1Z" }) })), _jsx("g", __assign({ mask: "url(#a)" }, { children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M14.5 19.5c0 1.105-1 2-2.5 2s-2.5-.895-2.5-2M20 18l-.828-.828A4 4 0 0 1 18 14.343V11a6.002 6.002 0 0 0-4-5.659S14 3 12 3s-2 2.34-2 2.34a6.019 6.019 0 0 0-3.538 3.346A5.982 5.982 0 0 0 6 11v3.343a4 4 0 0 1-1.172 2.829L4 18v1h16v-1Z" }) })), _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m4 4 17 17" })] })); };
export default BellSlash;
