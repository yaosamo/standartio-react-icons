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
var Pencil = function (props) { return _jsx("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15.607 5.707a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1 0 1.414L9.576 15.98a2 2 0 0 1-.781.483l-2.545.848a.1.1 0 0 1-.126-.126l.848-2.545a2 2 0 0 1 .483-.782l8.152-8.15Zm-1.415 1.414 2.122 2.122" }) })); };
export default Pencil;
