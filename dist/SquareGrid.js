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
var SquareGrid = function (props) { return _jsx("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsxs("g", __assign({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, { children: [_jsx("rect", { width: 6, height: 6, x: 4.5, y: 4.5, rx: 1.5 }), _jsx("rect", { width: 6, height: 6, x: 4.5, y: 13.5, rx: 1.5 }), _jsx("rect", { width: 6, height: 6, x: 13.5, y: 4.5, rx: 1.5 }), _jsx("rect", { width: 6, height: 6, x: 13.5, y: 13.5, rx: 1.5 })] })) })); };
export default SquareGrid;
