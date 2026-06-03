"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function DataTableFixedHead(props) {
  var classes = props.classes,
    id = props.id,
    tableId = props.tableId,
    tableHeader = props.tableHeader,
    toolbar = props.toolbar;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: id,
    className: classes.tableFixedHeader
  }, toolbar, /*#__PURE__*/_react["default"].createElement(_core.Table, {
    id: tableId,
    className: classes.table,
    "aria-labelledby": "fixedHeader"
  }, tableHeader));
}
DataTableFixedHead.propTypes = {
  classes: _propTypes["default"].object,
  id: _propTypes["default"].string,
  tableId: _propTypes["default"].string,
  tableHeader: _propTypes["default"].object,
  toolbar: _propTypes["default"].any
};
var _default = exports["default"] = DataTableFixedHead;