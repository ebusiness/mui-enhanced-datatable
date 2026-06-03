"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
var _FirstPage = _interopRequireDefault(require("@material-ui/icons/FirstPage"));
var _KeyboardArrowLeft = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowLeft"));
var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));
var _LastPage = _interopRequireDefault(require("@material-ui/icons/LastPage"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // @material-ui/core components
var usePaginationStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing(2.5)
    }
  };
});
function TablePaginationActions(props) {
  var page = props.page,
    count = props.count,
    rowsPerPage = props.rowsPerPage,
    onPageChange = props.onPageChange;
  var classes = usePaginationStyles();
  var handleFirstPageButtonClick = function handleFirstPageButtonClick(event) {
    onPageChange(event, 0);
  };
  var handleBackButtonClick = function handleBackButtonClick(event) {
    onPageChange(event, page - 1);
  };
  var handleNextButtonClick = function handleNextButtonClick(event) {
    onPageChange(event, page + 1);
  };
  var handleLastPageButtonClick = function handleLastPageButtonClick(event) {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    onClick: handleFirstPageButtonClick,
    disabled: page === 0,
    "aria-label": "First Page"
  }, /*#__PURE__*/_react["default"].createElement(_FirstPage["default"], null)), /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    onClick: handleBackButtonClick,
    disabled: page === 0,
    "aria-label": "Previous Page"
  }, /*#__PURE__*/_react["default"].createElement(_KeyboardArrowLeft["default"], null)), /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    onClick: handleNextButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "Next Page"
  }, /*#__PURE__*/_react["default"].createElement(_KeyboardArrowRight["default"], null)), /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    onClick: handleLastPageButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "Last Page"
  }, /*#__PURE__*/_react["default"].createElement(_LastPage["default"], null)));
}
TablePaginationActions.propTypes = {
  count: _propTypes["default"].number.isRequired,
  onPageChange: _propTypes["default"].func.isRequired,
  page: _propTypes["default"].number.isRequired,
  rowsPerPage: _propTypes["default"].number.isRequired
};
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      '& .MuiTablePagination-caption, & .MuiTablePagination-selectRoot': _defineProperty({}, theme.breakpoints.down('xs'), {
        display: 'none'
      })
    }
  };
});
function DataTablePagination(props) {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_core.TablePagination, _extends({}, props, {
    className: classes.root,
    style: {
      overflow: 'visible'
    },
    ActionsComponent: TablePaginationActions
  }));
}
var _default = exports["default"] = DataTablePagination;