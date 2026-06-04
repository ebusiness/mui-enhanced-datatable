"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));
var _ImageSearch = _interopRequireDefault(require("@material-ui/icons/ImageSearch"));
var _form = _interopRequireDefault(require("../assets/css/form"));
var _HierarchySelect = _interopRequireDefault(require("./HierarchySelect"));
var _utils = require("../utils");
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
var useStyles = (0, _core.makeStyles)(_form["default"]);
var ControlCreator = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var column = props.column,
    data = props.data,
    errors = props.errors,
    handleChange = props.handleChange,
    handleBlur = props.handleBlur;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    datasource = _useState2[0],
    setDatasourceState = _useState2[1]; // CASCADE項目のために使う
  var classes = useStyles();
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      setDatasource: function setDatasource(_datasource) {
        setDatasourceState(_datasource);
      }
    };
  });
  var handleInnerChange = function handleInnerChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    var type = column.type,
      variant = column.variant,
      multiple = column.multiple;
    if (type === 'boolean') {
      if (variant !== 'select') {
        // チェックボックスの場合
        name = event.target.value;
        value = event.target.checked;
      } else {
        if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        }
      }
    } else if (type === 'integer') {
      value = _utils.common.toInteger(value);
    } else if (type === 'date') {
      if (value === '') {
        value = null;
      }
    } else if (type === 'file') {
      var fileLabel = document.getElementById("id_label_".concat(column.name));
      if (multiple === true) {
        // ファイルが複数選択できる場合
        fileLabel.innerText = "";
        var blobFiles = [];
        var _iterator = _createForOfIteratorHelper(event.target.files),
          _step;
        try {
          var _loop = function _loop() {
            var file = _step.value;
            var reader = new FileReader();
            reader.addEventListener('load', function (e) {
              return readMultiFileBlob(e, name, file.name, blobFiles);
            });
            reader.readAsDataURL(file);
            fileLabel.innerText += file.name + ';';
          };
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
          return readFileBlob(e, name, file.name);
        });
        reader.readAsDataURL(file);
        fileLabel.innerText = file.name;
      }
      return;
    }
    if (handleChange) {
      handleChange(name, value, type)(event);
    }
  };
  var handleChangeAutoComplete = function handleChangeAutoComplete(event, option) {
    var name = column.name,
      type = column.type;
    if (handleChange) {
      if (option) {
        // 選択した場合（freeSoloで自由入力した場合は option が文字列）
        var optionValue = typeof option === 'string' ? option : option.value;
        handleChange(name, optionValue, type)(event);
      } else {
        // 空白の場合
        handleChange(name, null, type)(event);
      }
    }
  };
  var handleInputChangeAutoComplete = function handleInputChangeAutoComplete(event, inputValue, reason) {
    // freeSolo時、ユーザーがタイプ/クリアした内容をそのまま値として反映する。
    // reason === 'reset'（value 反映による再同期）は無視し、入力フィードバックループを防ぐ
    if ((reason === 'input' || reason === 'clear') && handleChange) {
      handleChange(column.name, inputValue, column.type)(event);
    }
  };
  var readFileBlob = function readFileBlob(event, name, fileName) {
    handleChange(name, "name:".concat(btoa(unescape(encodeURIComponent(fileName))), ";").concat(event.target.result), 'file')(event);
  };
  var readMultiFileBlob = function readMultiFileBlob(event, name, fileName, files) {
    files.push("name:".concat(btoa(unescape(encodeURIComponent(fileName))), ";").concat(event.target.result));
    handleChange(name, files, 'file')(event);
  };
  var handleInnerBlur = function handleInnerBlur(name) {
    return function (event) {
      if (handleBlur) {
        handleBlur(event, name);
      }
    };
  };
  var control = null;
  var value = props.value;
  var label = column.required === true ? /*#__PURE__*/_react["default"].createElement("span", null, column.label, /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.required
  }, "\uFF08\uFF0A\uFF09")) : /*#__PURE__*/_react["default"].createElement("span", null, column.label);
  value = value === null || value === undefined ? '' : value;
  var error = Array.isArray(errors) && errors.length > 0;
  var errorNodes = error === true ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, errors.map(function (message, key) {
    return /*#__PURE__*/_react["default"].createElement(_core.FormHelperText, {
      key: key
    }, message);
  })) : null;
  var placeholderProps = null;
  if (column.help_text) {
    placeholderProps = {
      placeholder: column.help_text,
      InputLabelProps: {
        shrink: true
      }
    };
  }
  if (column.read_only === true) {
    control = /*#__PURE__*/_react["default"].createElement(_core.TextField, {
      disabled: true,
      error: error,
      name: column.name,
      value: column.type === 'choice' ? _utils.common.getDisplayNameFromChoice(value, column) : value,
      label: column.label + (column.required === true ? '(＊)' : ''),
      InputLabelProps: {
        shrink: true
      }
    });
  } else if (column.type === 'boolean') {
    // チェックボックスを表示
    control = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, column.variant === 'select' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.InputLabel, {
      htmlFor: column.name
    }, label), column["native"] === true ? /*#__PURE__*/_react["default"].createElement(_core.Select, {
      "native": true,
      value: value.toString(),
      inputProps: {
        name: column.name,
        value: value
      },
      onChange: handleInnerChange
    }, /*#__PURE__*/_react["default"].createElement("option", {
      value: null
    }), /*#__PURE__*/_react["default"].createElement("option", {
      key: "true",
      value: "true"
    }, "\u306F\u3044"), /*#__PURE__*/_react["default"].createElement("option", {
      key: "false",
      value: "false"
    }, "\u3044\u3044\u3048")) : /*#__PURE__*/_react["default"].createElement(_core.Select, {
      value: value.toString(),
      inputProps: {
        name: column.name,
        value: value
      },
      onChange: handleInnerChange
    }, /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
      value: null
    }, /*#__PURE__*/_react["default"].createElement("em", null, "None")), /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
      key: "true",
      value: "true"
    }, "\u306F\u3044"), /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
      key: "false",
      value: "false"
    }, "\u3044\u3044\u3048"))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.FormControlLabel, {
      control: /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
        checked: value = value === true ? true : false,
        value: column.name,
        onChange: handleInnerChange
      }),
      label: label
    })), column.help_text ? /*#__PURE__*/_react["default"].createElement(_core.FormHelperText, null, column.help_text) : null);
  } else if (column.type === 'choice') {
    // 選択肢が存在する場合
    var choices = Array.isArray(datasource) ? datasource : column.choices || [];
    column['choices'] = choices;
    if (!_utils.common.isEmpty(column.choices) && Object.prototype.hasOwnProperty.call(column.choices[0], "parent")) {
      control = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_HierarchySelect["default"], {
        "native": column["native"] === true,
        name: column.name,
        label: label,
        value: value,
        error: error,
        choices: choices,
        handleChange: handleInnerChange
      }), column.help_text ? /*#__PURE__*/_react["default"].createElement(_core.FormHelperText, null, column.help_text) : null);
    } else if (column.variant === 'autocomplete') {
      var isFreeSolo = column.freeSolo === true;
      // freeSolo は inputValue を受控にする。value を受控にすると MUI v4 が毎キーストロークで
      // value→inputValue を再同期し、入力中の文字（特に IME 変換中）を飲み込んでしまうため。
      control = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
        className: classes.autoCompleteWrapper,
        freeSolo: isFreeSolo,
        value: isFreeSolo ? undefined : _utils.common.getFromList(choices, 'value', value) || null,
        inputValue: isFreeSolo ? value == null ? '' : String(value) : undefined,
        options: choices,
        getOptionLabel: function getOptionLabel(option) {
          return (typeof option === 'string' ? option : option.display_name) || '';
        },
        getOptionDisabled: function getOptionDisabled(option) {
          return option.disabled === true;
        },
        onChange: handleChangeAutoComplete,
        onInputChange: isFreeSolo ? handleInputChangeAutoComplete : undefined,
        renderInput: function renderInput(params) {
          return /*#__PURE__*/_react["default"].createElement(_core.TextField, _extends({}, params, {
            label: label,
            margin: "normal"
          }));
        }
      }), column.help_text ? /*#__PURE__*/_react["default"].createElement(_core.FormHelperText, null, column.help_text) : null);
    } else {
      control = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.InputLabel, {
        htmlFor: column.name
      }, label), /*#__PURE__*/_react["default"].createElement(_core.Select, {
        "native": column["native"] === true,
        value: value,
        inputProps: {
          name: column.name,
          value: value
        },
        onChange: handleInnerChange
      }, column["native"] === true ? /*#__PURE__*/_react["default"].createElement("option", {
        value: null
      }) : /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
        value: null
      }, /*#__PURE__*/_react["default"].createElement("em", null, "None")), column["native"] === true ? choices.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: item.value,
          value: item.value
        }, item.display_name);
      }) : choices.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
          key: item.value,
          value: item.value
        }, item.display_name);
      })), column.help_text ? /*#__PURE__*/_react["default"].createElement(_core.FormHelperText, null, column.help_text) : null);
    }
  } else if (column.type === 'choices') {
    value = value || [];
    control = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.InputLabel, {
      htmlFor: column.name
    }, label), /*#__PURE__*/_react["default"].createElement(_core.Select, {
      multiple: true,
      value: value,
      inputProps: {
        name: column.name,
        value: value
      },
      onChange: handleInnerChange,
      renderValue: function renderValue(selected) {
        return /*#__PURE__*/_react["default"].createElement("div", null, selected.map(function (value) {
          return /*#__PURE__*/_react["default"].createElement(_core.Chip, {
            key: value,
            label: _utils.common.getFromList(column.choices, 'value', value).display_name
          });
        }));
      }
    }, column.choices && column.choices.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
        key: item.value,
        value: item.value
      }, /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
        checked: value.indexOf(item.value) > -1
      }), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
        primary: item.display_name
      }));
    })), column.help_text ? /*#__PURE__*/_react["default"].createElement(_core.FormHelperText, null, column.help_text) : null);
  } else if (column.type === 'date') {
    control = /*#__PURE__*/_react["default"].createElement(_core.TextField, {
      error: error,
      name: column.name,
      value: value,
      label: label,
      type: "date",
      InputLabelProps: {
        shrink: true
      },
      onChange: handleInnerChange
    });
  } else if (column.type === 'text') {
    control = /*#__PURE__*/_react["default"].createElement(_core.TextField, _extends({
      error: error,
      multiline: true,
      name: column.name,
      value: value,
      label: label
    }, placeholderProps, {
      onChange: handleInnerChange,
      InputProps: {
        style: column.colStyles
      }
    }));
  } else if (column.type === 'integer') {
    control = /*#__PURE__*/_react["default"].createElement(_core.TextField, _extends({
      error: error,
      name: column.name,
      type: "number",
      value: value,
      label: label,
      inputProps: {
        min: column.min_value,
        max: column.max_value,
        step: column.step || 1
      }
    }, placeholderProps, {
      onChange: handleInnerChange
    }));
  } else if (column.type === 'decimal') {
    control = /*#__PURE__*/_react["default"].createElement(_core.TextField, _extends({
      error: error,
      name: column.name,
      type: "number",
      value: value,
      label: label,
      inputProps: {
        min: column.min_value,
        max: column.max_value,
        step: column.step
      }
    }, placeholderProps, {
      onChange: handleInnerChange
    }));
  } else if (column.type === 'file') {
    control = /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.fileWrapper
    }, /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: "id_".concat(column.name)
    }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
      variant: "outlined",
      component: "span"
    }, label || 'ファイルを選択'), /*#__PURE__*/_react["default"].createElement("input", {
      type: "file",
      name: column.name,
      multiple: column.multiple === true,
      id: "id_".concat(column.name),
      className: classes.inputFileBtnHide,
      onChange: handleInnerChange
    })), /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: "id_".concat(column.name),
      className: classes.fileNameWrapper,
      id: "id_label_".concat(column.name)
    }, data[column.verbose_name] || '選択されていません。'), data[column.verbose_name] ? /*#__PURE__*/_react["default"].createElement("span", {
      className: classes.fileDownloadWrapper
    }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      className: classes.fileDownloadIcon,
      onClick: function onClick() {
        return column.handle_download(value);
      }
    }, /*#__PURE__*/_react["default"].createElement(_ImageSearch["default"], null))) : null);
  } else {
    control = /*#__PURE__*/_react["default"].createElement(_core.TextField, _extends({
      error: error,
      name: column.name,
      label: label,
      value: value
    }, placeholderProps, {
      inputProps: {
        maxLength: column.max_length
      },
      onChange: handleInnerChange,
      onBlur: handleInnerBlur(column.name)
    }));
  }
  return /*#__PURE__*/_react["default"].createElement(_core.FormControl, {
    className: classes.formControl,
    error: error
  }, control, errorNodes);
});
ControlCreator.propTypes = {
  column: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    type: _propTypes["default"].string.isRequired,
    name: _propTypes["default"].string.isRequired,
    read_only: _propTypes["default"].bool,
    required: _propTypes["default"].bool,
    help_text: _propTypes["default"].string,
    multiple: _propTypes["default"].bool,
    min_value: _propTypes["default"].number,
    max_value: _propTypes["default"].number,
    step: _propTypes["default"].number,
    "native": _propTypes["default"].bool,
    choices: _propTypes["default"].array,
    verbose_name: _propTypes["default"].string,
    variant: _propTypes["default"].string,
    max_length: _propTypes["default"].number,
    colStyles: _propTypes["default"].object,
    handle_download: _propTypes["default"].func
  }).isRequired,
  value: _propTypes["default"].any,
  data: _propTypes["default"].object,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  handleBlur: _propTypes["default"].func,
  handleChange: _propTypes["default"].func
};
ControlCreator.defaultProps = {
  errors: []
};
ControlCreator.displayName = "ControlCreator";
var _default = exports["default"] = ControlCreator;