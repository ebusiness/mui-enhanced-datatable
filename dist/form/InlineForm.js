"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));
var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));
var _colors = require("@material-ui/core/colors");
var _utils = require("../utils");
var _components = require("../components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var useStyles = (0, _core.makeStyles)({
  inlineTable: {
    width: '100%'
  },
  alternativeInline: {
    backgroundColor: _colors.grey[100]
  },
  error: {
    color: 'red'
  }
});
var InlineForm = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var schema = props.schema,
    layout = props.layout,
    allowAdd = props.allowAdd,
    allowDelete = props.allowDelete,
    new_line_schema = props.new_line_schema,
    checkList = props.checkList,
    onChanges = props.onChanges;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var classes = useStyles();
  (0, _react.useEffect)(function () {
    setData(initializeData(props));
  }, [props.data, props.schema]);
  (0, _react.useEffect)(function () {
    setErrors(props.errors || {});
  }, [props.data, props.schema]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      clean: function clean() {
        return _utils.form.clean_form(validate, data, schema);
      }
    };
  });
  var initializeData = function initializeData(props) {
    if (props.schema) {
      var _data = props.data || [];
      _data.map(function (row) {
        return props.schema.map(function (col) {
          if (_utils.common.isEmpty(row[col.name]) && col["default"] !== null && col["default"] !== undefined) {
            row[col.name] = col["default"];
          }
          return true;
        });
      });
      return _data;
    } else {
      return [];
    }
  };
  var handleDeleteInline = function handleDeleteInline(index) {
    return function () {
      var _data = data.slice();
      var _errors = Object.assign({}, errors);
      _data.splice(index, 1);
      if (_errors) {
        // Indexによるエラーを順次移動する
        delete _errors[index];
        Object.keys(_errors).map(function (key) {
          if (key > index) {
            var existErrors = _errors[key];
            delete _errors[key];
            _errors[key - 1] = existErrors;
          }
          return true;
        });
      }
      setData(_data);
      setErrors(_errors);
    };
  };
  var handleAppendNew = function handleAppendNew() {
    var _data = data.slice();
    _data.push({
      is_new: true
    });
    setData(_data);
  };
  var handleChange = function handleChange(prefix, inlineIndex) {
    return function (name, value, type) {
      return function (event) {
        // eslint-disable-line
        var _data = data.slice();
        _data[inlineIndex][name] = value;
        setData(_data);
        onChanges.map(function (method) {
          var _data = data.slice();
          _data[inlineIndex][name] = value;
          var retVal = method(name, _data, null, prefix, inlineIndex);
          if (retVal) {
            setData(retVal);
          }
          return true;
        });
      };
    };
  };
  var createAddComponent = function createAddComponent() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
      fullWidth: true,
      onClick: handleAppendNew
    }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)));
  };
  var validate = function validate() {
    var _errors = {};
    var valid = _utils.form.validate_form(data, schema, checkList, errors);
    var oldErrors = props.errors || {};
    _errors = Object.assign(oldErrors, _errors);
    setErrors(_errors);
    return valid;
  };
  var non_field_errors = errors ? errors.non_field_errors : null;
  if (Array.isArray(data) && data.length > 0) {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.NonFieldErrors, {
      errors: non_field_errors
    }), data.map(function (row_data, key) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: key,
        className: key % 2 ? classes.alternativeInline : null
      }, /*#__PURE__*/_react["default"].createElement("table", {
        className: classes.inlineTable
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, _utils.form.createFormLayout(row_data, row_data.is_new === true ? new_line_schema : schema, layout, false, true, null, key, data, errors[key], handleChange)), allowDelete !== false ? /*#__PURE__*/_react["default"].createElement("td", {
        style: {
          width: 45
        }
      }, /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
        title: "\u524A\u9664",
        placement: "bottom",
        enterDelay: 300
      }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
        "aria-label": "Action",
        onClick: handleDeleteInline(key)
      }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)))) : null))));
    }), allowAdd !== false ? createAddComponent() : null);
  } else {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, allowAdd !== false ? createAddComponent() : null);
  }
});
InlineForm.propTypes = {
  schema: _propTypes["default"].array.isRequired,
  layout: _propTypes["default"].array,
  data: _propTypes["default"].array,
  onChanges: _propTypes["default"].arrayOf(_propTypes["default"].func),
  allowAdd: _propTypes["default"].bool,
  allowDelete: _propTypes["default"].bool,
  new_line_schema: _propTypes["default"].array,
  checkList: _propTypes["default"].array,
  errors: _propTypes["default"].object
};
InlineForm.defaultProps = {
  layout: [],
  data: [],
  onChanges: [],
  allowAdd: true,
  allowDelete: true
};
InlineForm.displayName = "InlineForm";
var _default = exports["default"] = InlineForm;