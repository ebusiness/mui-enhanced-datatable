"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _colors = require("@material-ui/core/colors");
var _common = require("./common");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var tableDetailStyle = function tableDetailStyle(theme) {
  return {
    avatar: {
      backgroundColor: _colors.red[500]
    },
    title: {
      fontSize: 20,
      paddingBottom: 0
    },
    table: {
      marginBottom: "0",
      width: "100%",
      maxWidth: "100%",
      backgroundColor: "transparent",
      borderSpacing: "0",
      borderCollapse: "collapse"
    },
    tableHeadCell: {
      textAlign: 'right',
      width: '30%',
      minWidth: 100
    },
    tableCell: _objectSpread(_objectSpread({
      "& p": {
        lineHeight: "1.42857143",
        fontSize: "12px"
      }
    }, _common.defaultFont), {}, {
      lineHeight: "1.42857143",
      paddingLeft: "8px",
      paddingRight: "8px",
      verticalAlign: "middle"
      // fontSize: "12px",
    }),
    actions: {
      padding: 16
    },
    linearProgress: {
      height: theme.spacing(1),
      maxWidth: 300,
      '& .MuiLinearProgress-bar1Indeterminate': {
        opacity: 0.5
      },
      '& .MuiLinearProgress-bar2Indeterminate': {
        opacity: 0.5
      }
    },
    historyIcon: {
      padding: 0,
      marginLeft: theme.spacing(1),
      '& svg': {
        fontSize: "20px"
      }
    },
    fullScreen: _defineProperty({}, theme.breakpoints.down('xs'), {
      width: '100%',
      height: '100%',
      margin: 0,
      maxWidth: '100%',
      maxHeight: 'none',
      borderRadius: 0
    })
  };
};
var _default = exports["default"] = tableDetailStyle;