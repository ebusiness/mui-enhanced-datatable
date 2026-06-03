"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
var _Form = _interopRequireDefault(require("../form/Form"));
var _SyncButton = _interopRequireDefault(require("../components/SyncButton"));
var _excluded = ["title", "description", "schema", "layout", "handleOk", "saveCallback"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    fullScreen: _defineProperty({}, theme.breakpoints.down('xs'), {
      width: '100%',
      height: '100%',
      margin: 0,
      maxWidth: '100%',
      maxHeight: 'none',
      borderRadius: 0
    }),
    description: {
      whiteSpace: 'pre-line'
    },
    tabSep: {
      marginTop: theme.spacing(1)
    }
  };
});
var FormDialog = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var title = props.title,
    description = props.description,
    schema = props.schema,
    layout = props.layout,
    handleOk = props.handleOk,
    saveCallback = props.saveCallback,
    rest = _objectWithoutProperties(props, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    errors = _useState6[0],
    setErrors = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    tabIndex = _useState8[0],
    setTabIndex = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    tabsLabel = _useState0[0],
    setTabsLabel = _useState0[1];
  var classes = useStyles();
  var elementsRef = (0, _react.useRef)([]);
  (0, _react.useEffect)(function () {
    setErrors(props.errors || {});
  }, [props.errors]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      handleOpen: function handleOpen(initial, tabsLabel) {
        setOpen(true);
        setData(initial);
        setTabsLabel(tabsLabel || []);
      }
    };
  });
  var handleClose = function handleClose() {
    setOpen(false);
    setErrors({});
  };
  var handleTabChange = function handleTabChange(event, index) {
    setTabIndex(index);
  };
  var handleLocalOk = function handleLocalOk() {
    if (handleOk) {
      var cleaned_data = null;
      if (Array.isArray(data)) {
        cleaned_data = [];
        elementsRef.current.map(function (subRef) {
          return cleaned_data.push(subRef.clean());
        });
      } else {
        cleaned_data = elementsRef.current[0].clean();
      }
      if (cleaned_data) {
        return handleOk(cleaned_data).then(function () {
          if (saveCallback) {
            saveCallback(cleaned_data);
          }
          handleClose();
        })["catch"](function (errors) {
          setErrors(errors);
        });
      }
    }
    return Promise.resolve();
  };
  return /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
    open: open,
    onClose: handleClose,
    PaperProps: {
      className: classes.fullScreen
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, null, title), /*#__PURE__*/_react["default"].createElement(_core.DialogContent, {
    dividers: true
  }, description ? /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    className: classes.description,
    variant: "body2"
  }, description) : null, Array.isArray(data) ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_core.Tabs, {
    value: tabIndex,
    onChange: handleTabChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "scrollable",
    scrollButtons: "auto",
    "aria-label": "scrollable auto tabs"
  }, data.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_core.Tab, {
      key: index,
      label: tabsLabel && tabsLabel.length > index ? tabsLabel[index] : index + 1,
      id: "scrollable-auto-tab-".concat(index),
      "aria-controls": "scrollable-auto-tabpanel-".concat(index)
    });
  })), data.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      role: "tabpanel",
      hidden: tabIndex !== index,
      id: "scrollable-auto-tab-".concat(index),
      "aria-labelledby": "scrollable-auto-tabpanel-".concat(index),
      className: classes.tabSep
    }, /*#__PURE__*/_react["default"].createElement(_Form["default"], _extends({
      schema: schema,
      layout: layout,
      data: item,
      errors: errors
    }, rest, {
      ref: function ref(el) {
        return elementsRef.current[index] = el;
      }
    })));
  })) : /*#__PURE__*/_react["default"].createElement(_Form["default"], _extends({
    schema: schema,
    layout: layout,
    data: data,
    errors: errors
  }, rest, {
    ref: function ref(el) {
      return elementsRef.current[0] = el;
    }
  }))), /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: handleClose,
    color: "secondary"
  }, "\u53D6\u6D88"), /*#__PURE__*/_react["default"].createElement(_SyncButton["default"], {
    title: "\u78BA\u5B9A",
    handleClick: handleLocalOk,
    autoFocus: true,
    color: "primary"
  })));
});
FormDialog.propTypes = {
  title: _propTypes["default"].string,
  description: _propTypes["default"].string,
  schema: _propTypes["default"].array.isRequired,
  layout: _propTypes["default"].array,
  handleOk: _propTypes["default"].func.isRequired,
  saveCallback: _propTypes["default"].func,
  errors: _propTypes["default"].object
};
FormDialog.defaultProps = {};
FormDialog.displayName = "FormDialog";
var _default = exports["default"] = FormDialog;