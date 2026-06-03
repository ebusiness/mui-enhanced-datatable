"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function DataTableHead(props) {
  var classes = props.classes,
    tableHeaderColor = props.tableHeaderColor,
    tableHead = props.tableHead,
    sortable = props.sortable,
    onSort = props.onSort,
    order = props.order,
    orderBy = props.orderBy,
    selected = props.selected,
    selectable = props.selectable,
    data = props.data,
    onSelectAllClick = props.onSelectAllClick;
  var createSortHandler = function createSortHandler(property, isNumeric) {
    return function (event) {
      if (sortable === true && onSort) {
        onSort(event, property, isNumeric);
      }
    };
  };
  var numSelected = selected ? selected.length : 0;
  var rowCount = data ? data.length : 0;
  var chkCell = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  if (selectable === 'multiple') {
    chkCell = /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
      padding: "none",
      className: classes.tableCellCheckable
    }, /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
      indeterminate: numSelected > 0 && numSelected < rowCount,
      checked: numSelected === rowCount,
      onChange: onSelectAllClick,
      disabled: rowCount === 0
    }));
  } else if (selectable === 'single') {
    chkCell = /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
      padding: "none",
      className: classes.tableCellCheckable
    });
  }
  if (tableHead === undefined) {
    return null;
  } else {
    return /*#__PURE__*/_react["default"].createElement(_core.TableHead, {
      className: classes[tableHeaderColor + "TableHeader"]
    }, /*#__PURE__*/_react["default"].createElement(_core.TableRow, null, chkCell, tableHead.filter(function (col) {
      return col.visible !== false;
    }).map(function (column, key) {
      var _table$getCellAlignme = _utils.table.getCellAlignment(column.type),
        align = _table$getCellAlignme.align,
        numeric = _table$getCellAlignme.numeric;
      return /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
        className: classes.tableCell + " " + classes.tableHeadCell,
        key: key,
        align: align,
        sortDirection: orderBy === column.name ? order : false
      }, sortable === true && column.sortable === true ? /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
        title: "Sort",
        placement: numeric ? 'bottom-end' : 'bottom-start',
        enterDelay: 300
      }, /*#__PURE__*/_react["default"].createElement(_core.TableSortLabel, {
        active: orderBy === (column.sort_field || column.name),
        direction: order,
        onClick: createSortHandler(column.sort_field || column.name, numeric)
      }, column.label)) : column.label);
    })));
  }
}
DataTableHead.propTypes = {
  classes: _propTypes["default"].object,
  tableHead: _propTypes["default"].array,
  data: _propTypes["default"].array,
  selectable: _propTypes["default"].string,
  selected: _propTypes["default"].array,
  sortable: _propTypes["default"].bool,
  order: _propTypes["default"].string,
  orderBy: _propTypes["default"].string,
  tableHeaderColor: _propTypes["default"].string,
  onSelectAllClick: _propTypes["default"].func,
  onSort: _propTypes["default"].func
};
DataTableHead.defaultProps = {
  sortable: true
};
var _default = exports["default"] = DataTableHead;