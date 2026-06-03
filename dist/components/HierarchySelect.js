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
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var userStyles = (0, _core.makeStyles)(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: '100%'
    },
    parentItem: {
      fontWeight: 'bold'
    }
  };
});
function HierarchySelect(props) {
  var choices = props.choices,
    _native = props["native"],
    name = props.name,
    value = props.value,
    label = props.label,
    handleChange = props.handleChange;
  var classes = userStyles();
  var getAllItems = function getAllItems() {
    var rootItems = _utils.common.isEmpty(choices) ? [] : choices.filter(function (item) {
      return item.parent === null;
    });
    var items = [];
    rootItems.map(function (item) {
      return _getChildItems(items, item);
    });
    return items;
  };
  var _getChildItems = function getChildItems(items, item) {
    var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var children = choices.filter(function (sub) {
      return sub.parent === item.value;
    });
    var itemProps = {
      key: item.value + '_item',
      value: item.value
    };
    var display_name = item.display_name;
    if (children && children.length > 0) {
      itemProps['className'] = classes.parentItem;
      display_name = '▼' + display_name;
    }
    if (_native === true) {
      items.push(/*#__PURE__*/_react["default"].createElement("option", _extends({
        disabled: item.disabled === true
      }, itemProps), "".concat('　'.repeat(deep)).concat(display_name)));
    } else {
      items.push(/*#__PURE__*/_react["default"].createElement(_core.MenuItem, _extends({
        disabled: item.disabled === true
      }, itemProps, {
        style: {
          marginLeft: deep * 30
        }
      }), display_name));
    }
    children.map(function (sub) {
      return _getChildItems(items, sub, deep + 1);
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.InputLabel, {
    htmlFor: name
  }, label), /*#__PURE__*/_react["default"].createElement(_core.Select, {
    "native": _native === true,
    value: value,
    inputProps: {
      name: name,
      value: value
    },
    onChange: handleChange
  }, _native === true ? /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }) : /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
    key: "none",
    value: ""
  }, /*#__PURE__*/_react["default"].createElement("em", null, "None")), getAllItems().map(function (item) {
    return item;
  })));
}
HierarchySelect.propTypes = {
  label: _propTypes["default"].object,
  name: _propTypes["default"].string,
  value: _propTypes["default"].any,
  choices: _propTypes["default"].array,
  "native": _propTypes["default"].bool,
  handleChange: _propTypes["default"].func
};
var _default = exports["default"] = HierarchySelect;