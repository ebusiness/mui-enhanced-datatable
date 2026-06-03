"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@material-ui/core/styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var useStyles = (0, _styles.makeStyles)(function () {
  return {
    error: {
      color: 'red'
    }
  };
});
function NonFieldErrors(props) {
  var classes = useStyles();
  var errors = props.errors;
  if (typeof errors === 'string') {
    errors = [errors];
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, Array.isArray(errors) && errors.length > 0 ? /*#__PURE__*/_react["default"].createElement("ul", {
    className: classes.error
  }, errors.map(function (error, key) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: key
    }, error);
  })) : null);
}
NonFieldErrors.propTypes = {
  errors: _propTypes["default"].any
};
var _default = exports["default"] = NonFieldErrors;