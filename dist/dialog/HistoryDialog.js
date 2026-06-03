"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _core = require("@material-ui/core");
var _SimpleTable = _interopRequireDefault(require("../datatable/SimpleTable"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    histories: {
      minWidth: '500px',
      '& table': {
        minWidth: 'inherit'
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
});
var historySchema = [{
  "name": "label",
  "type": "string",
  "label": "項目"
}, {
  "name": "start_date",
  "type": "date",
  "label": "変更日"
}, {
  "name": "value",
  "type": "string",
  "label": "値"
}, {
  "name": "display_text",
  "type": "string",
  "label": "表示名"
}];
var HistoryDialog = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    histories = _useState4[0],
    setHistories = _useState4[1];
  var classes = useStyles();
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      handleOpen: function handleOpen(histories) {
        setOpen(true);
        setHistories(histories);
      }
    };
  });
  var handleClose = function handleClose() {
    setOpen(false);
  };
  return /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
    open: open,
    scroll: "body",
    onClose: handleClose,
    PaperProps: {
      className: classes.fullScreen
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, null, "\u5909\u66F4\u5C65\u6B74"), /*#__PURE__*/_react["default"].createElement(_core.DialogContent, {
    dividers: true,
    className: classes.histories
  }, /*#__PURE__*/_react["default"].createElement(_SimpleTable["default"], {
    tableHead: historySchema,
    tableData: histories,
    tableHeaderColor: 'warning',
    rowsPerPage: 25
  })), /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: handleClose
  }, "\u9589\u3058\u308B")));
});

// HistoryDialog.propTypes = {
//   schema: PropTypes.array,
// };
HistoryDialog.displayName = "HistoryDialog";
var _default = exports["default"] = HistoryDialog;