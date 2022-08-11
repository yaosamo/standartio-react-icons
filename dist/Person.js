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
var Person = function (props) { return _jsx("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsxs("g", __assign({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, { children: [_jsx("circle", { cx: 12, cy: 8, r: 3 }), _jsx("path", { d: "M12 13.5c5.16 0 6.522 1.767 6.877 3.508.22 1.082-.773 1.992-1.878 1.992H7c-1.104 0-2.098-.91-1.877-1.992C5.478 15.268 6.839 13.5 12 13.5Z" })] })) })); };
export default Person;
