"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));
var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));
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
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    error: {
      color: 'red'
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    },
    inlineTitle: {
      borderBottom: '2px solid #555',
      marginTop: theme.spacing(2)
    },
    inlineTable: {
      width: '100%'
    },
    inlineAdd: {
      width: '100%',
      backgroundColor: _colors.grey[100]
    }
  };
});
var Form = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var schema = props.schema,
    layout = props.layout,
    inlines = props.inlines,
    checkList = props.checkList,
    onChanges = props.onChanges,
    onBlurs = props.onBlurs;
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
  }, [props.errors]);
  var initializeData = function initializeData(props) {
    if (!_utils.common.isEmpty(props.data)) {
      return props.data;
    } else if (props.schema) {
      var _data2 = props.data || {};
      props.schema.map(function (col) {
        if (_utils.common.isEmpty(_data2[col.name]) && col["default"] !== null && col["default"] !== undefined) {
          _data2[col.name] = col["default"];
        }
        return true;
      });
      return _data2;
    } else {
      return {};
    }
  };

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data)) {
  //     this.setState({data: this.initializeData(nextProps)});
  //   }
  //   if (JSON.stringify(nextProps.errors) !== JSON.stringify(this.props.errors)) {
  //     this.setState({errors: nextProps.errors});
  //   } else if (JSON.stringify(nextProps.errors) !== JSON.stringify(this.state.errors) && !common.isEmpty(nextProps.errors)) {
  //     // サーバー側エラーが返した場合、初回目は表示できますが。
  //     // ２回目でまたサーバー側エラー発生したら、nextProps.errors === this.props.errorsなので、エラーが表示できなくなる
  //     // だからここでの設定が必要です。
  //     this.setState({errors: nextProps.errors});
  //   }
  // }

  var handleChange = function handleChange(prefix, inlineIndex) {
    return function (name, value, type) {
      return function (event) {
        // eslint-disable-line
        var _data = Object.assign({}, data);
        if (prefix && inlineIndex !== undefined && inlineIndex !== null) {
          var formsetData = _data[prefix];
          formsetData[inlineIndex][name] = value;
        } else {
          _data[name] = value;
        }
        setData(_data);
        onChanges.map(function (method) {
          var _data = Object.assign({}, data);
          if (prefix && inlineIndex !== undefined && inlineIndex !== null) {
            _data[prefix][inlineIndex][name] = value;
          } else {
            _data[name] = value;
          }
          var retVal = method(name, _data, null, prefix, inlineIndex);
          if (retVal) {
            setData(Object.assign(_data, retVal));
          }
          return true;
        });

        // if (this.props.onSchemaChange) {
        //   let data = this.state.data;
        //   data[name] = value;
        //   const retVal = this.props.onSchemaChange(name, data);
        //   if (retVal) {
        //     retVal.then(data => {
        //     });
        //   }
        // }
      };
    };
  };
  var handleBlur = function handleBlur(event, name) {
    onBlurs.map(function (method) {
      var _data = Object.assign({}, data);
      var retVal = method(name, _data);
      if (retVal) {
        setData(Object.assign(_data, retVal));
      }
      return true;
    });
  };
  var handleDeleteInline = function handleDeleteInline(prefix, index) {
    return function () {
      var inlineData = data[prefix];
      inlineData.splice(index, 1);
      var inlineErrors = errors[prefix];
      if (inlineErrors) {
        // Indexによるエラーを順次移動する
        delete inlineErrors[index];
        Object.keys(inlineErrors).map(function (key) {
          if (key > index) {
            var existErrors = inlineErrors[key];
            delete inlineErrors[key];
            inlineErrors[key - 1] = existErrors;
          }
          return true;
        });
      }
      setData(Object.assign({}, data));
      setErrors(Object.assign({}, errors));
    };
  };
  var handleInlineAdd = function handleInlineAdd(prefix, schema) {
    return function () {
      // eslint-disable-line
      var inlineData = data[prefix];
      if (Array.isArray(inlineData)) {
        inlineData.push({});
      } else {
        data[prefix] = [];
      }
      setData(Object.assign({}, data));
    };
  };
  var validate = function validate() {
    var valid = true;
    var errors = {};
    // 項目の定義からチェック
    if (_utils.form.validate_by_schema(null, schema, data, errors) === false) {
      valid = false;
    }
    inlines.map(function (formset) {
      var dataList = data[formset.name];
      if (_utils.form.validate_by_schema(formset.name, formset.schema, dataList, errors) === false) {
        valid = false;
      }
      return true;
    });
    // カスタマイズのチェック
    if (valid === true) {
      checkList.map(function (method) {
        var retVal = method(data);
        if (retVal !== true) {
          valid = false;
          if (Array.isArray(retVal)) {
            retVal.map(function (item) {
              return _utils.form.pushError(null, null, item.name, item.message, errors);
            });
          }
        }
        return true;
      });
    }
    setErrors(Object.assign({}, errors));
    return valid;
  };
  var realtimeData = function realtimeData() {
    var _data = Object.assign({}, data);
    schema.map(function (col) {
      if (col.type === 'field') {
        var value = _data[col.name];
        if (Array.isArray(value) && value.length > 0) {
          var item = value[0];
          _data[col.name] = item.value;
        }
      } else if (col.type === 'fields') {
        var _value = _data[col.name];
        if (Array.isArray(_value) && _value.length > 0) {
          var items = [];
          _value.map(function (item) {
            return items.push(item.value);
          });
          _data[col.name] = items;
        }
      }
      return true;
    });
    return _data;
  };
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      clean: function clean() {
        if (validate() === true) {
          return realtimeData();
        } else {
          return null;
        }
      }
    };
  });
  var non_field_errors = null;
  if (errors) {
    non_field_errors = errors.non_field_errors;
  }
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.NonFieldErrors, {
    errors: non_field_errors
  }), _utils.form.createFormLayout(data, schema, layout, false, false, null, null, null, errors, handleChange, handleBlur), inlines.map(function (formset, key) {
    var init_data_array = data[formset.name];
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: key
    }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
      variant: "subtitle1",
      className: classes.inlineTitle
    }, formset.title), Array.isArray(init_data_array) && init_data_array.length > 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, init_data_array.map(function (init_data, key2) {
      var inlineErrors = errors[formset.name] || {};
      return /*#__PURE__*/_react["default"].createElement("table", {
        key: key2,
        className: classes.inlineTable
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, _utils.form.createFormLayout(init_data, formset.schema, formset.layout, false, true, formset.name, key2, init_data_array, inlineErrors[key2], handleChange, handleBlur)), formset.allowDelete !== false ? /*#__PURE__*/_react["default"].createElement("td", {
        style: {
          width: 45
        }
      }, /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
        title: "\u524A\u9664",
        placement: "bottom",
        enterDelay: 300
      }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
        "aria-label": "Action",
        onClick: handleDeleteInline(formset.name, key2)
      }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)))) : null)));
    })) : null, formset.allowAdd !== false ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
      title: "\u8FFD\u52A0",
      placement: "bottom",
      enterDelay: 300
    }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
      className: classes.inlineAdd,
      onClick: handleInlineAdd(formset.name, formset.schema)
    }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)))) : null);
  }));
});
Form.propTypes = {
  schema: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  layout: _propTypes["default"].array,
  inlines: _propTypes["default"].arrayOf(_propTypes["default"].object),
  data: _propTypes["default"].object,
  onChanges: _propTypes["default"].arrayOf(_propTypes["default"].func),
  onBlurs: _propTypes["default"].arrayOf(_propTypes["default"].func),
  checkList: _propTypes["default"].arrayOf(_propTypes["default"].func),
  // onSchemaChange: PropTypes.func,
  errors: _propTypes["default"].object
};
Form.defaultProps = {
  layout: [],
  inlines: [],
  data: {},
  onChanges: [],
  onBlurs: [],
  checkList: []
};
Form.displayName = "Form";
var _default = exports["default"] = Form;