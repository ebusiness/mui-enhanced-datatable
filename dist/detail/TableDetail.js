"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _core = require("@material-ui/core");
var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));
var _History = _interopRequireDefault(require("@material-ui/icons/History"));
var _detail = _interopRequireDefault(require("../assets/css/detail"));
var _FormDialog = _interopRequireDefault(require("../dialog/FormDialog"));
var _index = require("../utils/index");
var _ConfirmDialog = _interopRequireDefault(require("../dialog/ConfirmDialog"));
var _HistoryDialog = _interopRequireDefault(require("../dialog/HistoryDialog"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var useStyles = (0, _core.makeStyles)(_detail["default"]);
function TableDetail(props) {
  var avatar = props.avatar,
    title = props.title,
    schema = props.schema,
    data = props.data,
    actions = props.actions,
    editProps = props.editProps,
    deleteProps = props.deleteProps,
    cardMenuItems = props.cardMenuItems,
    loading = props.loading,
    histories = props.histories;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    anchorEl = _useState4[0],
    setAnchorEl = _useState4[1];
  var dlgDeleteRef = (0, _react.useRef)(null);
  var classes = useStyles();
  var refEditDialog = (0, _react.useRef)(null);
  var refHistoryDialog = (0, _react.useRef)(null);
  var handleOpenMenu = function handleOpenMenu(event) {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  var handleCloseMenu = function handleCloseMenu(event) {
    // eslint-disable-line
    setOpen(false);
  };
  var getAvatar = function getAvatar() {
    var avatarIcon = null;
    if (typeof avatar === 'string') {
      avatarIcon = /*#__PURE__*/_react["default"].createElement(_core.Avatar, {
        "aria-label": "Recipe",
        className: classes.avatar,
        src: avatar
      }, avatar);
    }
    return avatarIcon;
  };
  var onShowEditDialog = function onShowEditDialog() {
    refEditDialog.current.handleOpen(data);
  };
  var hasHistory = function hasHistory(col, value) {
    if (Array.isArray(histories) && histories.length > 0) {
      if (Array.isArray(col.history)) {
        if (col.history.length === 1) {
          return histories.some(function (i) {
            return col.history.indexOf(i.key) >= 0 && i.value != value;
          });
        } else {
          var arrVal = (value || "").split(/[ \x20\u3000]/g);
          var _iterator = _createForOfIteratorHelper(col.history),
            _step;
          try {
            var _loop = function _loop() {
                var k = _step.value;
                if (histories.some(function (x) {
                  return x.key === k && arrVal.indexOf(x.value) < 0;
                })) {
                  return {
                    v: true
                  };
                }
              },
              _ret;
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _ret = _loop();
              if (_ret) return _ret.v;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      } else {
        return histories.some(function (i) {
          return i.key === col.name && i.value != value;
        });
      }
    }
    return false;
  };
  var showHistories = function showHistories(col) {
    if (Array.isArray(histories) && histories.length > 0 && refHistoryDialog.current) {
      var items = [];
      if (Array.isArray(col.history)) {
        items = histories.filter(function (i) {
          return col.history.indexOf(i.key) >= 0;
        });
      } else {
        items = histories.filter(function (i) {
          return i.key === col.name;
        });
      }
      refHistoryDialog.current.handleOpen(items);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_core.Card, null, /*#__PURE__*/_react["default"].createElement(_core.CardHeader, {
    avatar: getAvatar(),
    title: title,
    titleTypographyProps: {
      className: classes.title
    },
    className: classes.title,
    action: cardMenuItems ? /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      "aria-owns": anchorEl ? "menu" : null,
      "aria-haspopup": "true",
      onClick: handleOpenMenu
    }, /*#__PURE__*/_react["default"].createElement(_MoreVert["default"], null)) : null
  }), /*#__PURE__*/_react["default"].createElement(_core.CardContent, null, /*#__PURE__*/_react["default"].createElement(_core.Table, {
    className: classes.table
  }, /*#__PURE__*/_react["default"].createElement(_core.TableBody, null, schema.map(function (col) {
    var value = data[col.name];
    var display_name = _index.common.getColumnDisplay(value, col, data);
    return /*#__PURE__*/_react["default"].createElement(_core.TableRow, {
      key: col.name
    }, /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
      className: classes.tableCell + ' ' + classes.tableHeadCell
    }, col.label), /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
      className: classes.tableCell
    }, loading ? /*#__PURE__*/_react["default"].createElement(_core.LinearProgress, {
      className: classes.linearProgress
    }) : col.link ? /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: _index.common.formatStr(typeof col.link === 'function' ? col.link(data) : col.link, data)
    }, display_name) : display_name, hasHistory(col, value) ? /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      color: "primary",
      size: "small",
      className: classes.historyIcon,
      onClick: function onClick() {
        return showHistories(col);
      }
    }, /*#__PURE__*/_react["default"].createElement(_History["default"], null)) : null));
  })))), /*#__PURE__*/_react["default"].createElement(_core.CardActions, {
    className: classes.actions
  }, actions.map(function (button) {
    return button;
  }), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    style: {
      flex: 1
    }
  }), !_index.common.isEmpty(deleteProps) && deleteProps.visible !== false ? /*#__PURE__*/_react["default"].createElement(_core.Button, {
    variant: "contained",
    color: "secondary",
    className: classes.button,
    onClick: function onClick() {
      return dlgDeleteRef.current.handleOpen();
    }
  }, "\u524A\u9664") : null, !_index.common.isEmpty(editProps) && editProps.visible !== false ? /*#__PURE__*/_react["default"].createElement(_core.Button, {
    variant: "contained",
    color: "primary",
    className: classes.button,
    onClick: onShowEditDialog
  }, "\u5909\u66F4") : null)), !_index.common.isEmpty(editProps) && editProps.visible !== false ? /*#__PURE__*/_react["default"].createElement(_FormDialog["default"], _extends({}, editProps, {
    handleOk: editProps.handleEdit,
    ref: refEditDialog
  })) : null, !_index.common.isEmpty(deleteProps) && deleteProps.visible !== false ? /*#__PURE__*/_react["default"].createElement(_ConfirmDialog["default"], {
    title: "\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\u3002",
    onOk: deleteProps.handleDelete,
    ref: dlgDeleteRef
  }) : null, cardMenuItems ? /*#__PURE__*/_react["default"].createElement(_core.Menu, {
    anchorEl: anchorEl,
    open: open,
    onClose: handleCloseMenu
  }, cardMenuItems) : null, /*#__PURE__*/_react["default"].createElement(_HistoryDialog["default"], {
    ref: refHistoryDialog
  }));
}
TableDetail.propTypes = {
  title: _propTypes["default"].string,
  data: _propTypes["default"].object.isRequired,
  schema: _propTypes["default"].array.isRequired,
  actions: _propTypes["default"].arrayOf(_propTypes["default"].object),
  editProps: _propTypes["default"].object,
  deleteProps: _propTypes["default"].object,
  cardMenuItems: _propTypes["default"].arrayOf(_propTypes["default"].object),
  loading: _propTypes["default"].bool,
  avatar: _propTypes["default"].any,
  histories: _propTypes["default"].array
};
TableDetail.defaultProps = {
  actions: [],
  editProps: {},
  deleteProps: {},
  loading: false,
  histories: []
};
var _default = exports["default"] = TableDetail;