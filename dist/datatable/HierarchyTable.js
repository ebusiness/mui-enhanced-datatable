"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _uuid = require("uuid");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
var _components = require("../components");
var _DataTableCell = _interopRequireDefault(require("./DataTableCell"));
var _DataTableHead = _interopRequireDefault(require("./DataTableHead"));
var _DataTableFixedHead = _interopRequireDefault(require("./DataTableFixedHead"));
var _DataTableToolbar = _interopRequireDefault(require("./DataTableToolbar"));
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
var indent = 8;
var tableId = (0, _uuid.v4)();
var toolbarId = (0, _uuid.v4)();
var fixedTableId = (0, _uuid.v4)();
var fixedHeaderId = (0, _uuid.v4)();
var useStyles = (0, _core.makeStyles)(_datatable["default"]);
function HierarchyTable(props) {
  var tableHead = props.tableHead,
    selectable = props.selectable,
    pushpinTop = props.pushpinTop,
    relatedName = props.relatedName,
    pk = props.pk,
    title = props.title,
    tableHeaderColor = props.tableHeaderColor,
    tableActions = props.tableActions,
    rowActions = props.rowActions,
    tableProps = props.tableProps,
    allowCsv = props.allowCsv,
    tableStyles = props.tableStyles;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    tableData = _useState2[0],
    setTableData = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var classes = useStyles();
  (0, _react.useEffect)(function () {
    setTableData(_utils.table.initTableData(props.tableData));
  }, [props.tableData]);
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleFixedHeader);
    window.addEventListener('resize', handleFixedHeader);
    return function () {
      window.removeEventListener('scroll', handleFixedHeader);
      window.removeEventListener('resize', handleFixedHeader);
    };
  }, []);
  (0, _react.useEffect)(function () {
    handleFixedHeader();
  });
  var handleFixedHeader = function handleFixedHeader() {
    _utils.common.setFixedTableHeader(fixedHeaderId, toolbarId, tableId, fixedTableId, pushpinTop);
  };
  var getAllRows = function getAllRows() {
    var rootRows = _utils.common.isEmpty(tableData) ? [] : tableData.filter(function (row) {
      return row[relatedName] === null;
    });
    if (tableData.length > 0 && 'id' in tableData[0]) {
      // 親が見つからないデータもトップに表示する。
      var ids = tableData.map(function (i) {
        return i.id;
      });
      rootRows = rootRows.concat(tableData.filter(function (row) {
        return row[relatedName] && ids.indexOf(row[relatedName]) < 0;
      }));
    }
    var rows = [];
    rootRows.map(function (row) {
      return _getChildRows(rows, row);
    });
    return rows;
  };
  var _getChildRows = function getChildRows(items, item) {
    var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var children = tableData.filter(function (sub) {
      return sub[relatedName] === item[pk];
    });
    items.push(getTableRow(item, deep));
    children.map(function (sub) {
      return _getChildRows(items, sub, deep + 1);
    });
  };
  var getTableRow = function getTableRow(row, deep) {
    var is_selected = _utils.table.isSelected(row, selected);
    return /*#__PURE__*/_react["default"].createElement(_core.TableRow, {
      key: row.__index__,
      hover: true
    }, selectable === 'single' ? /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
      padding: "none"
    }, /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
      checked: is_selected,
      onClick: function onClick() {
        return setSelected(_utils.table.onRowSelect(row, selectable, selected).selected);
      }
    })) : null, tableHead.map(function (col, key) {
      var paddingLeft = key === 0 ? deep * 30 || indent : indent;
      return /*#__PURE__*/_react["default"].createElement(_DataTableCell["default"], {
        key: key,
        classes: classes,
        column: col,
        data: row,
        style: {
          paddingLeft: paddingLeft
        }
      });
    }));
  };
  var rows = getAllRows();
  var toolbar = tableActions ? true : rowActions ? true : false;
  var headerProps = {
    classes: classes,
    tableHeaderColor: tableHeaderColor,
    tableHead: tableHead,
    actions: tableActions ? tableActions : rowActions ? true : false,
    selectable: selectable
  };
  var toolbarProps = {
    title: title,
    tableHead: tableHead,
    tableData: tableData,
    tableActions: tableActions,
    rowActions: rowActions,
    allowCsv: allowCsv,
    selected: selected,
    pk: pk
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.tableResponsive
  }, toolbar ? /*#__PURE__*/_react["default"].createElement(_DataTableToolbar["default"], _extends({
    id: toolbarId
  }, toolbarProps)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'auto',
      overflowX: "auto"
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Table, _extends({
    className: classes.table,
    id: tableId
  }, tableProps, {
    style: _objectSpread({}, tableStyles)
  }), /*#__PURE__*/_react["default"].createElement(_DataTableHead["default"], headerProps), /*#__PURE__*/_react["default"].createElement(_core.TableBody, null, rows.length > 0 ? rows.map(function (row) {
    return row;
  }) : /*#__PURE__*/_react["default"].createElement(_core.TableRow, {
    className: classes.tableRow
  }, /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
    colSpan: tableHead.length + (selectable === 'none' ? 0 : 1)
  }, _utils.constant.INFO.NO_DATA))))), !(0, _components.useIsWidthDown)('xs') ? /*#__PURE__*/_react["default"].createElement(_DataTableFixedHead["default"], {
    id: fixedHeaderId,
    tableId: fixedTableId,
    classes: classes,
    tableHeader: /*#__PURE__*/_react["default"].createElement(_DataTableHead["default"], headerProps),
    toolbar: toolbar ? /*#__PURE__*/_react["default"].createElement(_DataTableToolbar["default"], toolbarProps) : null
  }) : null);
}
HierarchyTable.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _utils.constant.tableProps), _utils.constant.tableActionProps), {}, {
  title: _propTypes["default"].string,
  selectable: _propTypes["default"].oneOf(['none', 'single']),
  relatedName: _propTypes["default"].string,
  pk: _propTypes["default"].string,
  pushpinTop: _propTypes["default"].number
});
HierarchyTable.defaultProps = _objectSpread(_objectSpread(_objectSpread({}, _utils.constant.tablePropsDefault), _utils.constant.tableActionPropsDefault), {}, {
  selectable: 'none',
  relatedName: 'parent',
  pk: 'id',
  pushpinTop: 0
});
var _default = exports["default"] = HierarchyTable;