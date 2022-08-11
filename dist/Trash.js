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
var Trash = function (props) { return _jsx("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsxs("g", __assign({ strokeLinejoin: "round", strokeWidth: 1.5 }, { children: [_jsx("path", { d: "M7 9v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9" }), _jsx("path", { strokeLinecap: "round", d: "M5.5 7h4m9 0h-4m-5 0 .5-2h4l.5 2m-5 0h5" })] })) })); };
export default Trash;
