"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _common = require("./common");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var tableStyle = function tableStyle() {
  return {
    warningTableHeader: {
      color: _common.warningColor
    },
    primaryTableHeader: {
      color: _common.primaryColor
    },
    dangerTableHeader: {
      color: _common.dangerColor
    },
    successTableHeader: {
      color: _common.successColor
    },
    infoTableHeader: {
      color: _common.infoColor
    },
    roseTableHeader: {
      color: _common.roseColor
    },
    grayTableHeader: {
      color: _common.grayColor
    },
    table: {
      marginBottom: "0",
      width: "100%",
      minWidth: 600,
      maxWidth: "100%",
      backgroundColor: "transparent",
      borderSpacing: "0",
      borderCollapse: "collapse"
    },
    tableRow: {
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.07) !important"
      }
    },
    tableHeadCell: _objectSpread({
      color: "inherit"
    }, _common.defaultFont),
    tableFixedHeader: {
      "& th": {
        boxSizing: 'border-box'
      },
      position: "fixed",
      backgroundColor: 'white',
      tableLayout: 'fixed',
      display: 'none',
      zIndex: 1
    },
    tableCell: _objectSpread(_objectSpread({}, _common.defaultFont), {}, {
      lineHeight: "1.42857143",
      paddingLeft: "8px",
      paddingRight: "8px",
      verticalAlign: "middle"
      // fontSize: "12px",
    }),
    tableCellCheckable: {
      width: 42
    },
    tableResponsive: {
      width: "100%"
      // marginTop: theme.spacing(3),
      // overflow: "visible",
    },
    tableActions: {
      display: "flex",
      padding: "12px 8px !important",
      verticalAlign: "middle",
      textAlign: 'center'
    },
    tableActionCell: {
      width: 35,
      textAlign: 'center',
      padding: 0
    },
    tableActionButton: {
      margin: 2
    },
    tableActionWrapper: {
      display: 'flex',
      position: 'absolute',
      top: '0',
      right: '50px',
      whiteSpace: 'nowrap'
    },
    tableRowSelected: {
      backgroundColor: '#fff0c3'
    },
    tableCellFixedWidth: {
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  };
};
var _default = exports["default"] = tableStyle;