"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate_form = exports.validate_by_schema = exports.pushError = exports["default"] = exports.createRowLayout = exports.createFormLayout = exports.createFormField = exports.clean_form = void 0;
var _react = _interopRequireDefault(require("react"));
var _core = require("@material-ui/core");
var _components = require("../components");
var _common = _interopRequireDefault(require("./common"));
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var getColspanArray = function getColspanArray(schema, isSingleLine) {
  var arr = new Array(schema.length);
  if (isSingleLine === true) {
    var avgSpan = Math.floor(12 / schema.length);
    if (avgSpan > 0) {
      schema.map(function (c, index) {
        return arr[index] = avgSpan;
      });
      arr[schema.length - 1] = 12 - (schema.length - 1) * avgSpan;
    }
  } else {
    schema.map(function (c, index) {
      return arr[index] = 12;
    });
  }
  return arr;
};

/**
 * 
 * @param {*} data 
 * @param {*} schema 
 * @param {*} layout 
 * @param {Boolean} isFloating true:フォームはPopperとして表示する場合 selectが存在したら、native属性をtrueに設定する必要です。
 * @param {*} isSingleLine 
 * @param {*} prefix 
 * @param {*} inlineIndex 
 * @param {*} inlineDataList 
 * @param {*} errors 
 * @param {*} handleChange 
 * @param {*} handleBlur 
 */
var createFormLayout = exports.createFormLayout = function createFormLayout(data, schema, layout, isFloating, isSingleLine, prefix, inlineIndex, inlineDataList, errors, handleChange, handleBlur) {
  var control = null;
  if (_common["default"].isEmpty(layout)) {
    var colspanArr = getColspanArray(schema, isSingleLine);
    control = /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      container: true
    }, schema.map(function (col, key) {
      col["native"] = isFloating;
      return createFormField(col, key, colspanArr[key], data, prefix, inlineIndex, inlineDataList, errors, handleChange, handleBlur);
    }));
  } else {
    control = /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      container: true
    }, layout.map(function (row, key) {
      return createRowLayout(row, key, data, prefix, inlineIndex, inlineDataList, schema, errors, isFloating, handleChange, handleBlur);
    }));
  }
  return control;
};
var createRowLayout = exports.createRowLayout = function createRowLayout(row, key, data, prefix, inlineIndex, inlineDataList, schema, errors, isFloating, handleChange, handleBlur) {
  if (typeof row === 'string') {
    var col = _common["default"].getFromList(schema, 'name', row);
    col["native"] = isFloating;
    return col && !_common["default"].isEmpty(col) ? createFormField(col, row, 12, data, prefix, inlineIndex, inlineDataList, errors, handleChange, handleBlur) : null;
  } else if (Array.isArray(row)) {
    var colSpan = Math.floor(12 / row.length);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: key
    }, row.map(function (fieldName, key) {
      var col = _common["default"].getFromList(schema, 'name', fieldName);
      col["native"] = isFloating;
      return col && !_common["default"].isEmpty(col) ? createFormField(col, key, colSpan, data, prefix, inlineIndex, inlineDataList, errors, handleChange, handleBlur) : null;
    }));
  }
  return null;
};
var createFormField = exports.createFormField = function createFormField(col, key, colSpan, data, prefix, inlineIndex, inlineDataList, errors, handleChange, handleBlur) {
  var fieldErrors = null;
  if (errors) {
    fieldErrors = errors[col.name];
  }
  if (col.type === 'cascade') {
    return /*#__PURE__*/_react["default"].createElement(_components.ControlCreator, {
      key: key,
      column: col,
      data: data,
      handleChange: handleChange(inlineIndex),
      wrapper: {
        element: _core.Grid,
        props: {
          xs: 12,
          sm: 12,
          md: colSpan,
          item: true
        }
      },
      errors: fieldErrors
    });
  } else {
    var choices = data[col.name + '_choices'];
    var value = data[col.name];
    if (value && Object.prototype.hasOwnProperty.call(value, "value")) {
      // 階層型のデータをフィルターの場合
      value = value.value;
    }
    if (col.type === 'choices' && choices) {
      // 複数選択時、選択肢はデータから取得する場合
      col['choices'] = choices;
      if (_common["default"].isEmpty(choices)) {
        value = null;
        data[col.name] = null;
      }
    }
    var newCol = col;
    if (col.get_props && typeof col.get_props === 'function') {
      newCol = Object.assign({}, col, col.get_props(data, inlineDataList));
    }
    return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      item: true,
      key: key,
      xs: 12,
      sm: 12,
      md: colSpan
    }, /*#__PURE__*/_react["default"].createElement(_components.ControlCreator, {
      column: newCol,
      value: value,
      data: data,
      errors: fieldErrors,
      handleBlur: handleBlur,
      handleChange: handleChange(prefix, inlineIndex),
      ref: function ref(ctrl) {
        if (col.cascade_from && ctrl && ctrl.setDatasource) {
          col['cascade_reflect'] = ctrl.setDatasource;
        }
      }
    }));
  }
};
var validate_form = exports.validate_form = function validate_form(data, schema, checkList, errors) {
  var valid = true;
  // 項目の定義からチェック
  if (validate_by_schema(null, schema, data, errors) === false) {
    valid = false;
  }
  // カスタマイズのチェック
  if (valid === true) {
    (checkList || []).map(function (method) {
      var retVal = method(data);
      if (retVal !== true) {
        valid = false;
        retVal.map(function (item) {
          return pushError(null, item.index, item.name, item.message, errors);
        });
      }
      return true;
    });
  }
  return valid;
};
var validate_by_schema = exports.validate_by_schema = function validate_by_schema(prefix, schema, data, errors) {
  var valid = true;
  var dataList = null;
  var isInline = prefix ? true : false;
  if (data === undefined || data === null) {
    dataList = [];
  } else if (Array.isArray(data)) {
    dataList = data;
    isInline = true;
  } else {
    dataList = [data];
  }
  dataList.map(function (formData, key) {
    schema.map(function (col) {
      var name = col.name;
      var value = formData[name];
      var index = isInline ? key : null;
      if (col.required === true) {
        // 必須項目チェック
        if (value === null || value === '' || value === undefined || _typeof(value) === 'object' && _common["default"].isEmpty(value)) {
          valid = false;
          pushError(prefix, index, name, _common["default"].formatStr(_constant["default"].ERROR.REQUIRE_FIELD, {
            name: col.label
          }), errors);
        }
      }
      if (value && col.regex) {
        // 正規表現チェック
        var regex = new RegExp(col.regex);
        if (regex.test(value) === false) {
          valid = false;
          pushError(prefix, index, name, _constant["default"].ERROR.INVALID_DATA, errors);
        }
      }
      if (col.type === 'file' && col.limit) {
        var fileSize = _common["default"].getB64FileSize(value);
        if (fileSize > 0 && fileSize > col.limit) {
          valid = false;
          pushError(prefix, index, name, _common["default"].formatStr(_constant["default"].ERROR.FILE_SIZE_LIMIT, {
            limit: col.limit / 1024 / 1024 + 'MB'
          }), errors);
        }
      }
      return true;
    });
    return true;
  });
  return valid;
};
var pushError = exports.pushError = function pushError(prefix, index, name, error, errors) {
  var newErrors = errors;
  if (prefix && index !== undefined && index !== null) {
    var inlineErrors = {};
    if (prefix in errors) {
      inlineErrors = errors[prefix];
    } else {
      inlineErrors = {};
      errors[prefix] = inlineErrors;
    }
    if (index in inlineErrors) {
      newErrors = inlineErrors[index];
    } else {
      newErrors = {};
      inlineErrors[index] = newErrors;
    }
  } else if (index !== undefined && index !== null) {
    if (index in errors) {
      newErrors = errors[index];
    } else {
      newErrors = {};
      errors[index] = newErrors;
    }
  }
  if (name in newErrors) {
    newErrors[name].push(error);
  } else {
    newErrors[name] = [error];
  }
};
var clean_form = exports.clean_form = function clean_form(validateFunc, formData, schema) {
  if (validateFunc() === true) {
    var data = null;
    if (Array.isArray(formData)) {
      data = formData.slice();
    } else {
      data = Object.assign({}, formData);
      schema.map(function (col) {
        if (col.type === 'field') {
          var value = data[col.name];
          if (Array.isArray(value) && value.length > 0) {
            var item = value[0];
            data[col.name] = item.value;
          }
        } else if (col.type === 'fields') {
          var _value = data[col.name];
          if (Array.isArray(_value) && _value.length > 0) {
            var items = [];
            _value.map(function (item) {
              return items.push(item.value);
            });
            data[col.name] = items;
          }
        }
        return true;
      });
    }
    return data;
  } else {
    return null;
  }
};
var _default = exports["default"] = {
  createFormLayout: createFormLayout,
  createRowLayout: createRowLayout,
  createFormField: createFormField,
  validate_form: validate_form,
  validate_by_schema: validate_by_schema,
  pushError: pushError,
  clean_form: clean_form
};