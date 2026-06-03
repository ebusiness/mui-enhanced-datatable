"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _core = require("@material-ui/core");
var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));
var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));
var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));
var _FilterList = _interopRequireDefault(require("@material-ui/icons/FilterList"));
var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));
var _CloudDownload = _interopRequireDefault(require("@material-ui/icons/CloudDownload"));
var _ClearAll = _interopRequireDefault(require("@material-ui/icons/ClearAll"));
var _colorManipulator = require("@material-ui/core/styles/colorManipulator");
var _colors = require("@material-ui/core/colors");
var _utils = require("../utils");
var _FormDialog = _interopRequireDefault(require("../dialog/FormDialog"));
var _ConfirmDialog = _interopRequireDefault(require("../dialog/ConfirmDialog"));
var _components = require("../components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      minHeight: 48
    },
    highlight: theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: (0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    spacer: {
      flex: '1 1 100%'
    },
    actions: {
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap'
    },
    title: {
      flex: '0 0 auto'
    },
    chip: {
      margin: theme.spacing(0.5)
    },
    selected: {
      marginRight: theme.spacing(1)
    },
    wrapper: {
      position: 'relative'
    },
    buttonProgress: {
      color: _colors.green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -24,
      marginLeft: -24
    },
    filter: {
      padding: theme.spacing(3),
      width: 404,
      height: 'calc(100% - 250px)',
      overflowY: 'auto'
    }
  };
});
function DataTableToolbar(props) {
  var onChangeFilter = props.onChangeFilter,
    id = props.id,
    title = props.title,
    tableHead = props.tableHead,
    tableData = props.tableData,
    selected = props.selected,
    tableActions = props.tableActions,
    rowActions = props.rowActions,
    saveCallback = props.saveCallback,
    addProps = props.addProps,
    editProps = props.editProps,
    showTitle = props.showTitle,
    allowCsv = props.allowCsv,
    deleteProps = props.deleteProps,
    clearSelected = props.clearSelected,
    filterLayout = props.filterLayout;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openFilter = _useState2[0],
    setOpenFilter = _useState2[1];
  var _useState3 = (0, _react.useState)(props.filters),
    _useState4 = _slicedToArray(_useState3, 2),
    filters = _useState4[0],
    setFilters = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    btnLoadings = _useState6[0],
    setBtnLoadings = _useState6[1];
  var _useState7 = (0, _react.useState)(300),
    _useState8 = _slicedToArray(_useState7, 2),
    maxHeight = _useState8[0],
    setMaxHeight = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    anchorEl = _useState0[0],
    setAnchorEl = _useState0[1];
  var classes = useStyles();
  var refDelete = (0, _react.useRef)(null);
  var refAdd = (0, _react.useRef)(null);
  var refChange = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setFilters(props.filters);
  }, [props.filters]);
  var onEscPress = function onEscPress(event) {
    if (event.keyCode === 27) {
      //Do whatever when esc is pressed
      handleCloseFilter();
    }
  };
  (0, _react.useEffect)(function () {
    document.addEventListener("keydown", onEscPress, false);
    return function () {
      document.removeEventListener("keydown", onEscPress, false);
    };
  });
  var handleOpenFilter = function handleOpenFilter(event) {
    setOpenFilter(true);
    setAnchorEl(event.currentTarget);
    setMaxHeight(window.innerHeight - 300);
  };
  var handleCloseFilter = function handleCloseFilter() {
    setOpenFilter(false);
  };
  var handleClearFilter = function handleClearFilter(event) {
    Object.keys(filters).map(function (key) {
      return delete filters[key];
    });
    setFilters(filters);
    if (onChangeFilter) {
      onChangeFilter(event, filters);
    }
  };
  var handleDeleteFilter = function handleDeleteFilter(name) {
    return function (event) {
      delete filters[name];
      if (onChangeFilter) {
        onChangeFilter(event, filters);
      }
    };
  };
  var handleChange = function handleChange(name, value, type) {
    return function (event) {
      // eslint-disable-line
      var column = _utils.common.getFromList(tableHead, 'name', name);
      var filter_in = null;
      if (!_utils.common.isEmpty(column.choices) && Object.prototype.hasOwnProperty.call(column.choices[0], "parent")) {
        filter_in = _utils.common.getChildren(value, column.choices, 'value', 'parent');
      }
      var _filters = Object.assign({}, filters);
      if (value === '' || value === null) {
        delete _filters[name];
      } else if (filter_in) {
        _filters[name] = {
          children: filter_in,
          value: value
        };
      } else {
        _filters[name] = value;
      }
      if (onChangeFilter) {
        onChangeFilter(event, _filters);
      }
      setFilters(_filters);
    };
  };
  var createCsvAction = function createCsvAction() {
    return /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
      title: "\uFF23\uFF33\uFF36\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
      placement: "bottom",
      enterDelay: 300
    }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      "aria-label": "Action",
      onClick: function onClick() {
        return _utils.common.downloadDataTableCSV(title, tableHead, tableData);
      }
    }, /*#__PURE__*/_react["default"].createElement(_CloudDownload["default"], null)));
  };
  var handleActionClick = function handleActionClick(method, props, state_name) {
    var _btnLoadings1 = Object.assign({}, btnLoadings);
    _btnLoadings1[state_name] = true;
    setBtnLoadings(_btnLoadings1);
    method(props)["finally"](function () {
      var _btnLoadings2 = Object.assign({}, btnLoadings);
      _btnLoadings2[state_name] = false;
      setBtnLoadings(_btnLoadings2);
    });
  };
  var createActions = function createActions() {
    if (Array.isArray(selected) && selected.length > 0) {
      // 行ごとのアクション
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, rowActions.filter(function (act) {
        return act['visible'] !== false;
      }).map(function (action, key) {
        return /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
          key: key,
          title: action.tooltip,
          placement: "bottom",
          enterDelay: 300
        }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
          "aria-label": "Action",
          onClick: function onClick() {
            return action.handleClick(selected.length === 1 ? selected[0] : selected, saveCallback);
          }
        }, action.icon));
      }));
    } else {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, tableActions.filter(function (act) {
        return act['visible'] !== false;
      }).map(function (action, key) {
        return /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
          key: key,
          title: action.tooltip,
          placement: "bottom",
          enterDelay: 300
        }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
          "aria-label": "Action",
          className: classes.wrapper,
          onClick: action.showLoading === true ? function (props) {
            return handleActionClick(function () {
              return action.handleClick(tableData, _utils.table.getParamFromFilter(filters));
            }, props, "tbl_action_".concat(key));
          } : function () {
            return action.handleClick(tableData, _utils.table.getParamFromFilter(filters));
          },
          disabled: btnLoadings["tbl_action_".concat(key)] === true
        }, action.icon, action.showLoading === true ? btnLoadings["tbl_action_".concat(key)] === true && /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, {
          size: 48,
          className: classes.buttonProgress
        }) : null));
      }));
    }
  };
  var onShowAddDialog = function onShowAddDialog() {
    if (addProps.handleBeforeShowup) {
      addProps.handleBeforeShowup();
    }
    refAdd.current.handleOpen();
  };
  var onShowEditDialog = function onShowEditDialog() {
    if (editProps.handleBeforeShowup) {
      editProps.handleBeforeShowup(selected[0]);
    }
    refChange.current.handleOpen(selected[0]);
  };
  var onShowDeleteDialog = function onShowDeleteDialog() {
    refDelete.current.handleOpen();
  };
  var numSelected = selected.length;
  var isWidthDownXS = (0, _components.useIsWidthDown)('xs');
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: id
  }, /*#__PURE__*/_react["default"].createElement(_core.Toolbar, {
    className: (0, _classnames["default"])(classes.root, _defineProperty({}, classes.highlight, numSelected > 0))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.title
  }, numSelected > 0 ? /*#__PURE__*/_react["default"].createElement("span", {
    color: "inherit",
    className: classes.selected
  }, numSelected, " \u4EF6\u9078\u629E") : title && showTitle && _utils.common.isEmpty(filters) ? title : null, Object.keys(filters).map(function (name) {
    var value = filters[name];
    if (value && value.value) {
      // 階層型のデータをフィルターの場合
      value = value.value;
    }
    var column = _utils.common.getFromList(tableHead, 'name', name);
    return /*#__PURE__*/_react["default"].createElement(_core.Chip, {
      key: name,
      label: _utils.common.getLabelFromColumn(value, column),
      className: classes.chip,
      onDelete: handleDeleteFilter(name)
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.spacer
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.actions
  }, createActions(), addProps && addProps.visible !== false && _utils.common.isEmpty(selected) ? /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    title: "\u8FFD\u52A0",
    placement: "bottom",
    enterDelay: 300
  }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    "aria-label": "Add",
    onClick: onShowAddDialog
  }, /*#__PURE__*/_react["default"].createElement(_Add["default"], {
    color: "secondary"
  }))) : null, editProps && Array.isArray(selected) && selected.length === 1 && (typeof editProps.visible === 'function' ? editProps.visible(selected[0]) : editProps.visible !== false) ? /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    title: "\u5909\u66F4",
    placement: "bottom",
    enterDelay: 300
  }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    "aria-label": "Edit",
    onClick: onShowEditDialog
  }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], null))) : null, deleteProps && Array.isArray(selected) && selected.length === 1 && (typeof deleteProps.visible === 'function' ? deleteProps.visible(selected[0]) : deleteProps.visible !== false) ? /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    title: "\u524A\u9664",
    placement: "bottom",
    enterDelay: 300
  }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    "aria-label": "Delete",
    onClick: onShowDeleteDialog
  }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null))) : null, allowCsv ? createCsvAction() : null, !_utils.common.isEmpty(filters) ? /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    title: "\u691C\u7D22\u6761\u4EF6\u3092\u30AF\u30EA\u30A2",
    placement: "bottom",
    enterDelay: 300
  }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    "aria-label": "ClearAll",
    onClick: handleClearFilter
  }, /*#__PURE__*/_react["default"].createElement(_ClearAll["default"], null))) : null, tableHead.filter(function (col) {
    return col.searchable === true;
  }).length > 0 ? isWidthDownXS ? /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    title: "\u691C\u7D22",
    placement: "bottom",
    enterDelay: 300
  }, openFilter === true ? /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    "aria-label": "Filter list",
    onClick: handleCloseFilter
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)) : /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    "aria-label": "Filter list",
    onClick: handleOpenFilter
  }, /*#__PURE__*/_react["default"].createElement(_FilterList["default"], null))) : /*#__PURE__*/_react["default"].createElement(_core.ClickAwayListener, {
    onClickAway: handleCloseFilter
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    title: "\u691C\u7D22",
    placement: "bottom",
    enterDelay: 300
  }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    "aria-label": "Filter list",
    onClick: handleOpenFilter
  }, /*#__PURE__*/_react["default"].createElement(_FilterList["default"], null))), /*#__PURE__*/_react["default"].createElement(_core.Popper, {
    open: openFilter,
    transition: true,
    disablePortal: true,
    placement: "bottom-end",
    anchorEl: anchorEl,
    style: {
      zIndex: 10
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Paper, {
    className: classes.filter,
    elevation: 8,
    style: {
      maxHeight: maxHeight
    }
  }, _utils.form.createFormLayout(filters, tableHead.filter(function (col) {
    return col.searchable === true;
  }), filterLayout, true,
  // isFloating
  false,
  // isSingleLine
  null, null, null, null, function () {
    return handleChange;
  }, null))))) : null)), isWidthDownXS ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_core.Collapse, {
    "in": openFilter,
    timeout: "auto",
    unmountOnExit: true
  }, _utils.form.createFormLayout(filters, tableHead.filter(function (col) {
    return col.searchable === true;
  }), filterLayout, true,
  // isFloating
  false, null, null, null, null, function () {
    return handleChange;
  }, null))) : null, addProps && addProps.visible !== false && _utils.common.isEmpty(selected) ? /*#__PURE__*/_react["default"].createElement(_FormDialog["default"], _extends({
    title: "".concat(title, "\u3092\u8FFD\u52A0"),
    ref: refAdd
  }, addProps)) : null, editProps && editProps.visible !== false && Array.isArray(selected) && selected.length === 1 ? /*#__PURE__*/_react["default"].createElement(_FormDialog["default"], _extends({
    title: "".concat(title, "\u3092\u5909\u66F4"),
    ref: refChange
  }, editProps, {
    saveCallback: saveCallback
  })) : null, deleteProps && deleteProps.visible !== false && Array.isArray(selected) && selected.length === 1 ? /*#__PURE__*/_react["default"].createElement(_ConfirmDialog["default"], {
    title: "\u524A\u9664",
    ref: refDelete,
    onOk: function onOk() {
      return deleteProps.handleDelete(selected[0]).then(function () {
        // setTimeoutしないと、選択レコード消したら、ConfirmDialogは勝てに消えるので、
        // その後ConfirmDialog.handleCloseを呼び出したら、エラーになってします。
        setTimeout(clearSelected, 100);
      });
    }
  }) : null);
}
DataTableToolbar.propTypes = {
  id: _propTypes["default"].string,
  title: _propTypes["default"].string,
  showTitle: _propTypes["default"].bool,
  filters: _propTypes["default"].object,
  filterLayout: _propTypes["default"].array,
  selected: _propTypes["default"].array,
  tableHead: _propTypes["default"].array,
  tableData: _propTypes["default"].array,
  addProps: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    schema: _propTypes["default"].array.isRequired,
    handleOk: _propTypes["default"].func.isRequired,
    handleBeforeShowup: _propTypes["default"].func,
    visible: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func])
  }),
  editProps: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    schema: _propTypes["default"].array.isRequired,
    handleOk: _propTypes["default"].func.isRequired,
    handleBeforeShowup: _propTypes["default"].func,
    visible: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func])
  }),
  saveCallback: _propTypes["default"].func,
  deleteProps: _propTypes["default"].shape({
    handleDelete: _propTypes["default"].func.isRequired,
    visible: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func])
  }),
  tableActions: _propTypes["default"].array,
  rowActions: _propTypes["default"].array,
  clearSelected: _propTypes["default"].func,
  allowCsv: _propTypes["default"].bool,
  onChangeFilter: _propTypes["default"].func
};
DataTableToolbar.defaultProps = {
  showTitle: true,
  filters: {},
  addProps: null,
  editProps: null,
  deleteProps: null
};
var _default = exports["default"] = DataTableToolbar;