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
function AggregateFooter(props) {
  var classes = props.classes,
    tableHead = props.tableHead,
    tableData = props.tableData,
    selectable = props.selectable;
  var data = {};
  var getAggregateValue = function getAggregateValue(column) {
    var aggregate = column.aggregate,
      name = column.name;
    if (aggregate === 'sum') {
      var total = tableData.reduce(function (sum, row) {
        return sum + (isNaN(parseFloat(row[name])) ? 0 : row[name] || 0);
      }, 0);
      data[name] = total;
      return _utils.common.toNumComma(total);
    } else if (typeof aggregate === 'function') {
      return _utils.common.getColumnDisplay(aggregate(data), column);
    } else {
      return 0;
    }
  };
  var chkCell = null;
  if (selectable !== 'none') {
    chkCell = /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
      padding: "none"
    });
  }
  if (tableHead === undefined) {
    return null;
  } else {
    return /*#__PURE__*/_react["default"].createElement(_core.TableRow, {
      className: classes.tableRow
    }, chkCell, tableHead.map(function (col, key) {
      if (col.aggregate) {
        return /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
          key: key,
          className: classes.tableCell,
          align: _utils.table.getCellAlignment(col.type).align
        }, getAggregateValue(col));
      } else if (col.visible !== false) {
        return /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
          key: key
        });
      } else {
        return null;
      }
    }));
  }
}
AggregateFooter.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  tableHead: _propTypes["default"].arrayOf(_propTypes["default"].object),
  tableData: _propTypes["default"].arrayOf(_propTypes["default"].object),
  selectable: _propTypes["default"].oneOf(['none', 'single', 'multiple'])
};
AggregateFooter.defaultProps = {
  tableHead: [],
  tableData: [],
  selectable: 'none'
};
var _default = exports["default"] = AggregateFooter;