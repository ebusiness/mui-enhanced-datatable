"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
var _DataTableCell = _interopRequireDefault(require("./DataTableCell"));
var _DataTableHead = _interopRequireDefault(require("./DataTableHead"));
var _DataTablePagination = _interopRequireDefault(require("./DataTablePagination"));
var _datatable = _interopRequireDefault(require("../assets/css/datatable"));
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // @material-ui/core components
// core components
var useStyles = (0, _core.makeStyles)(_datatable["default"]);
function SimpleTable(props) {
  var tableHead = props.tableHead,
    tableData = props.tableData,
    tableProps = props.tableProps,
    rowsPerPage = props.rowsPerPage,
    tableHeaderColor = props.tableHeaderColor;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var classes = useStyles();
  var handleChangePage = function handleChangePage(event, page) {
    setPage(page);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.tableResponsive
  }, /*#__PURE__*/_react["default"].createElement(_core.Table, _extends({
    className: classes.table
  }, tableProps), /*#__PURE__*/_react["default"].createElement(_DataTableHead["default"], {
    classes: classes,
    tableHeaderColor: tableHeaderColor,
    tableHead: tableHead,
    sortable: false
  }), /*#__PURE__*/_react["default"].createElement(_core.TableBody, null, _utils.common.getDataForDisplay(tableData, rowsPerPage, page).map(function (row, key) {
    return /*#__PURE__*/_react["default"].createElement(_core.TableRow, {
      key: key,
      hover: true
    }, tableHead.map(function (col, key) {
      return /*#__PURE__*/_react["default"].createElement(_DataTableCell["default"], {
        key: key,
        classes: classes,
        column: col,
        data: row
      });
    }));
  }))), rowsPerPage && tableData.length > rowsPerPage ? /*#__PURE__*/_react["default"].createElement(_DataTablePagination["default"], {
    component: "div"
    // id={paginationId}
    ,
    count: tableData.length,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: [],
    page: page,
    backIconButtonProps: {
      'aria-label': 'Previous Page'
    },
    nextIconButtonProps: {
      'aria-label': 'Next Page'
    },
    onPageChange: handleChangePage
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
}
SimpleTable.propTypes = _objectSpread(_objectSpread({}, _utils.constant.tableProps), {}, {
  rowsPerPage: _propTypes["default"].number
});
SimpleTable.defaultProps = _objectSpread(_objectSpread({}, _utils.constant.tablePropsDefault), {}, {
  rowsPerPage: null
});
var _default = exports["default"] = SimpleTable;