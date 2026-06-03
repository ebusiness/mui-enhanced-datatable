"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _uuid = require("uuid");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _core = require("@material-ui/core");
var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));
var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));
var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));
var _HighlightOff = _interopRequireDefault(require("@material-ui/icons/HighlightOff"));
var _Archive = _interopRequireDefault(require("@material-ui/icons/Archive"));
var _History = _interopRequireDefault(require("@material-ui/icons/History"));
var _HistoryDialog = _interopRequireDefault(require("../dialog/HistoryDialog"));
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function DataTableCell(props) {
  var classes = props.classes,
    column = props.column,
    data = props.data,
    actions = props.actions,
    actionsTrigger = props.actionsTrigger,
    histories = props.histories;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var refHistoryDialog = (0, _react.useRef)(null);
  var getOutput = function getOutput(value) {
    var url = null;
    if (column.link) {
      if (typeof column.link === 'string') {
        url = _utils.common.formatStr(column.link, data);
      } else if (typeof column.link === 'function') {
        url = _utils.common.formatStr(column.link(data), data);
      }
    }
    return url ? /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: url
    }, value) : value;
  };
  var handleShowActions = function handleShowActions(event) {
    event.stopPropagation();
    setOpen(true);
  };
  var handleHideActions = function handleHideActions(event) {
    if (event) {
      event.stopPropagation();
    }
    setOpen(false);
  };
  var handleFileDownload = function handleFileDownload(file_id) {
    return function (event) {
      event.stopPropagation();
      if (column.handle_download) {
        column.handle_download(file_id, data);
      }
    };
  };
  var handleActionClick = function handleActionClick(method) {
    return function (event) {
      event.stopPropagation();
      if (method) {
        method(data);
      }
    };
  };
  var showHistories = function showHistories() {
    if (Array.isArray(histories) && histories.length > 0 && refHistoryDialog.current) {
      refHistoryDialog.current.handleOpen(histories);
    }
  };
  var value = data[column.name];
  if (column.get_value && typeof column.get_value === 'function') {
    value = column.get_value(value, data);
  }
  var style = Object.assign({}, props.style);
  var attrs = {
    'align': _utils.table.getCellAlignment(column.type).align
  };
  var output = null;
  if (Array.isArray(actions) && actions.length > 0 && (!actionsTrigger || actionsTrigger(data))) {
    style['padding'] = 0;
    style['width'] = 35;
    style['position'] = 'relative';
    attrs['align'] = 'center';
    output = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, open ? /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      style: {
        padding: 10
      },
      onClick: handleHideActions
    }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)) : /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      style: {
        padding: 10
      },
      onClick: handleShowActions
    }, /*#__PURE__*/_react["default"].createElement(_MoreVert["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.tableActionWrapper
    }, /*#__PURE__*/_react["default"].createElement(_core.Grow, {
      "in": open
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: open ? 'block' : 'none'
      }
    }, actions.map(function (action, key) {
      if (action.trigger && !action.trigger(data)) {
        return null;
      } else if (action.icon) {
        return /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
          key: key,
          title: action.tooltip,
          placement: "bottom",
          enterDelay: 300
        }, /*#__PURE__*/_react["default"].createElement(_core.Fab, {
          size: "medium",
          color: action.color ? action.color : "primary",
          "aria-label": "Add",
          onClick: handleActionClick(action.handleClick),
          className: classes.tableActionButton
        }, action.icon));
      } else {
        return /*#__PURE__*/_react["default"].createElement(_core.Button, {
          key: key,
          variant: "contained",
          color: action.color ? action.color : "primary",
          className: classes.button
        }, action.name);
      }
    })))));
  } else if (column.type === 'integer' || column.type === 'decimal') {
    // 数字の場合右揃え、カンマ区切り表示
    value = _utils.common.toNumComma(value);
    output = getOutput(value);
  } else if (column.type === 'percent') {
    output = _utils.common.getColumnDisplay(value, column);
  } else if (column.type === 'boolean') {
    style['padding'] = 0;
    if (value === true || value === 1) {
      output = /*#__PURE__*/_react["default"].createElement(_CheckCircle["default"], {
        style: {
          color: 'green'
        }
      });
    } else if (value === false || value === 0) {
      output = /*#__PURE__*/_react["default"].createElement(_HighlightOff["default"], {
        style: {
          color: 'red'
        }
      });
    }
  } else if (column.type === 'file') {
    style['padding'] = 0;
    output = value ? /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      onClick: handleFileDownload(value),
      style: {
        padding: 10
      }
    }, /*#__PURE__*/_react["default"].createElement(_Archive["default"], null)) : null;
  } else if (column.type === 'choice') {
    var display_name = _utils.common.getDisplayNameFromChoice(value, column);
    output = getOutput(display_name);
  } else if (column.type === 'text') {
    output = _utils.common.getColumnDisplay(value, column);
  } else {
    output = getOutput(value);
  }
  return column.visible === false ? null : /*#__PURE__*/_react["default"].createElement(_core.TableCell, _extends({
    className: classes.tableCell,
    key: (0, _uuid.v4)(),
    style: style
  }, attrs), column.max_width ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      maxWidth: column.max_width
    },
    className: classes.tableCellFixedWidth,
    title: value
  }, output) : output, histories.length > 0 ? /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    color: "primary",
    size: "small",
    className: classes.historyIcon,
    onClick: showHistories
  }, /*#__PURE__*/_react["default"].createElement(_History["default"], null)) : null, /*#__PURE__*/_react["default"].createElement(_HistoryDialog["default"], {
    ref: refHistoryDialog
  }));
}
DataTableCell.defaultProps = {
  column: {},
  data: {},
  actions: [],
  histories: []
};
DataTableCell.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  column: _propTypes["default"].object,
  data: _propTypes["default"].object,
  actions: _propTypes["default"].array,
  actionsTrigger: _propTypes["default"].func,
  style: _propTypes["default"].object,
  histories: _propTypes["default"].array
};
var _default = exports["default"] = DataTableCell;