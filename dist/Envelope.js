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
var Envelope = function (props) { return _jsx("svg", __assign({ fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsxs("g", __assign({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, { children: [_jsx("path", { d: "M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z" }), _jsx("path", { d: "m20.5 6-7.472 7.032a1.5 1.5 0 0 1-2.056 0L3.5 6m17 12.5-6.139-6.056M3.5 18.5l6.071-6" })] })) })); };
export default Envelope;
