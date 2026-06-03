"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _sprintfJs = require("sprintf-js");
var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));
var _HighlightOff = _interopRequireDefault(require("@material-ui/icons/HighlightOff"));
var _core = require("@material-ui/core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _default = exports["default"] = {
  /**
   * 整数に変更する
   * @param {String} num 
   */
  toInteger: function toInteger(num) {
    var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var val = parseInt(num, radix);
    return isNaN(val) ? 0 : val;
  },
  /**
   * 数字をカンマ区切りで表示
   * @param {Integer} num 数字
   */
  toNumComma: function toNumComma(num) {
    if (num === null || num === undefined) {
      return '';
    } else {
      var int_comma = (num + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      return int_comma;
    }
  },
  /**
   * オブジェクトは空白なのか
   * @param {Object} obj 
   */
  isEmpty: function isEmpty(obj) {
    if (obj === null || obj === undefined || obj === '') {
      return true;
    } else if (Array.isArray(obj)) {
      return obj.length === 0;
    } else if (typeof obj === 'number') {
      return false;
    }
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }
    return true;
  },
  clone: function clone(data) {
    return JSON.parse(JSON.stringify(data));
  },
  /**
   * JSON項目のリストから項目を取得
   * @param {Array} json_list 
   * @param {String} value 
   */
  getFromList: function getFromList(json_list, key, value) {
    if (!json_list) {
      return {};
    } else if (json_list.length === 0) {
      return {};
    } else if (typeof value === 'undefined') {
      return {};
    } else {
      if (typeof value === 'string') {
        value = value.split('__')[0];
      }
      var cols = json_list.filter(function (col) {
        return col[key] === value;
      });
      return cols.length > 0 ? cols[0] : {};
    }
  },
  getChildren: function getChildren(value, items) {
    var _this = this;
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
    var parent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'parent';
    var filter_in = [];
    items.map(function (item) {
      if (item[parent] + '' === value + '') {
        filter_in.push(item[key]);
        filter_in = filter_in.concat(_this.getChildren(item[key], items, key, parent));
      }
      return item;
    });
    return filter_in;
  },
  /**
   * JSONかどうかを判定する関数
   * @param {Object} arg 
   */
  isJSON: function isJSON(arg) {
    return _typeof(arg) === 'object';
  },
  /**
   * 文字列をフォーマットする
   * @param {String} format 
   *
   * 使用方法：utils.format('This is argument: %s', arg1);
   */
  formatStr: function formatStr(format, args) {
    return (0, _sprintfJs.vsprintf)(format, args);
  },
  /**
   * 
   * @param {Array} data テーブルのデータ
   * @param {Integer} rowsPerPage 一ページに表示する行数
   * @param {Integer} page 現在は何ページ目
   */
  getDataForDisplay: function getDataForDisplay(data, rowsPerPage, page) {
    var results = null;
    if (!rowsPerPage) {
      results = data;
    } else {
      results = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }
    return results;
  },
  /**
   * 並び替え
   * @param {Array} array 
   * @param {Function} cmp 
   */
  stableSort: function stableSort(array, cmp) {
    var stabilizedThis = array.map(function (el, index) {
      return [el, index];
    });
    stabilizedThis.sort(function (a, b) {
      var order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(function (el) {
      return el[0];
    });
  },
  /**
   * JSONの配列にデータを検索する
   * @param {Array} array 
   * @param {JSON} filters 
   */
  stableFilter: function stableFilter(array, filters) {
    Object.keys(filters).map(function (key) {
      array = array.filter(function (item) {
        var item_value = item[key];
        if (filters[key] && Array.isArray(filters[key].children)) {
          // 組織などの階層化に対しての検索、すべての子項目を含めて検索
          return filters[key].value === item_value || filters[key].children.indexOf(item_value) >= 0;
        } else if (item_value === true || item_value === false) {
          return filters[key] === true || filters[key] === false ? item_value === filters[key] : true;
        } else if (filters[key] === true || filters[key] === false) {
          return item_value === (filters[key] === true ? 1 : 0);
        } else if (typeof item_value === 'number') {
          return item_value === filters[key];
        } else if (item_value) {
          return item_value.indexOf(filters[key]) >= 0;
        } else {
          return false;
        }
      });
      return array;
    });
    return array;
  },
  /**
   * 
   * @param {String} order 昇順／降順
   * @param {String} orderBy 並び替え項目
   * @param {Boolean} isNumeric 並び替え項目が数字かどうか
   */
  getSorting: function getSorting(order, orderBy, isNumeric) {
    if (isNumeric) {
      return order === 'desc' ? function (a, b) {
        return (Number.isInteger(b[orderBy]) ? b[orderBy] : -1) - (Number.isInteger(a[orderBy]) ? a[orderBy] : -1);
      } : function (a, b) {
        return (Number.isInteger(a[orderBy]) ? a[orderBy] : -1) - (Number.isInteger(b[orderBy]) ? b[orderBy] : -1);
      };
    } else {
      return order === 'desc' ? function (a, b) {
        return (b[orderBy] || '') < (a[orderBy] || '') ? -1 : 1;
      } : function (a, b) {
        return (a[orderBy] || '') < (b[orderBy] || '') ? -1 : 1;
      };
    }
  },
  getLabelFromColumn: function getLabelFromColumn(value, column) {
    var label = value;
    if (column === null || column === undefined) {
      // Do nothing
    } else if (column.choices && !this.isEmpty(column.choices)) {
      var item = this.getFromList(column.choices, 'value', value);
      if (item) {
        label = item.display_name;
      }
    } else if (column.type === 'boolean') {
      if (value === true) {
        label = column.label;
      } else if (value === false) {
        label = column.label + 'ではない';
      }
    }
    return label;
  },
  /**
   * 項目の定義からＣＳＳスタイルを取得する
   * @param {JSON} rowData 
   */
  getExtraRowStyles: function getExtraRowStyles(rowData, tableHead) {
    var extraStyles = {};
    var columns = tableHead.filter(function (col) {
      return Object.prototype.hasOwnProperty.call(col, "rowStyles");
    });
    columns.map(function (col) {
      var styles = col.rowStyles[rowData[col.name]];
      return Object.assign(extraStyles, styles);
    });
    return extraStyles;
  },
  getColumnDisplay: function getColumnDisplay(value, column, data) {
    var styles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    switch (column.type) {
      case 'choice':
        return this.getDisplayNameFromChoice(value, column);
      case 'choices':
        return this.getDisplayNameFromChoices(value, column);
      case 'boolean':
        if (value === true || value === 1) {
          return /*#__PURE__*/_react["default"].createElement(_CheckCircle["default"], {
            fontSize: "small",
            style: {
              color: 'green'
            }
          });
        } else if (value === false || value === 0) {
          return /*#__PURE__*/_react["default"].createElement(_HighlightOff["default"], {
            fontSize: "small",
            style: {
              color: 'red'
            }
          });
        } else {
          return null;
        }
      case 'integer':
      case 'decimal':
        return this.toNumComma(value);
      case 'percent':
        value = parseFloat(value) * 100;
        if (!isNaN(value)) {
          if (column.decimal_digits >= 0) {
            value = value.toFixed(column.decimal_digits);
          } else {
            value = value.toFixed(2);
          }
          value += '%';
        } else {
          value = null;
        }
        return value;
      case 'text':
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: _objectSpread({
            whiteSpace: 'pre-line'
          }, styles)
        }, value);
      case 'file':
        {
          var display_name = value;
          if (!this.isEmpty(data) && column.verbose_name) {
            display_name = data[column.verbose_name];
          }
          if (column.handle_download) {
            return /*#__PURE__*/_react["default"].createElement(_core.Link, {
              component: "button",
              variant: "caption",
              onClick: function onClick() {
                return column.handle_download(value, data);
              }
            }, display_name || '');
          } else {
            return display_name;
          }
        }
      default:
        return value;
    }
  },
  /**
   * 選択肢から表示する名称を取得
   * @param {Object} value 選択肢の値
   * @param {JSON} column 項目のスキーマ
   */
  getDisplayNameFromChoice: function getDisplayNameFromChoice(value, column) {
    if (column.choices && !this.isEmpty(column.choices)) {
      var choice = this.getFromList(column.choices, 'value', value);
      var display_name = choice ? choice.display_name : null;
      return display_name || value;
    } else {
      return value;
    }
  },
  /**
  * 選択肢から表示する複数の名称を取得
  * @param {Array} values 選択肢の値リスト
  * @param {JSON} column 項目のスキーマ
  */
  getDisplayNameFromChoices: function getDisplayNameFromChoices(values, column) {
    var _this2 = this;
    if (column.choices && !this.isEmpty(column.choices)) {
      var display_name = '';
      var choice = null;
      var tmp_display_name = '';
      values.map(function (value) {
        choice = _this2.getFromList(column.choices, 'value', value);
        tmp_display_name = (choice ? choice.display_name : null) || '';
        display_name += (display_name === '' ? '' : ', ') + tmp_display_name;
        return display_name;
      });
      return display_name;
    } else {
      return values;
    }
  },
  /**
   * テーブルのヘッダー部分を固定する
   * @param {String} wrapperId 固定部分のＩＤ
   * @param {String} toolbarId ToolbarのＩＤ
   * @param {String} srcTableId テーブルのＩＤ
   * @param {String} fixedTableId 固定部分のテーブルＩＤ
   * @param {Integer} offset 
   */
  setFixedTableHeader: function setFixedTableHeader(wrapperId, toolbarId, srcTableId, fixedTableId) {
    var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var wrapper = document.getElementById(wrapperId);
    var srcTable = document.getElementById(srcTableId);
    if (!wrapper || !srcTable) {
      return;
    }
    var toolbar = document.getElementById(toolbarId);
    var fixedTable = document.getElementById(fixedTableId);
    var _srcTable$getBounding = srcTable.getBoundingClientRect(),
      left = _srcTable$getBounding.left,
      width = _srcTable$getBounding.width,
      top = _srcTable$getBounding.top,
      height = _srcTable$getBounding.height;
    var bodyHeight = srcTable.querySelector('tbody').getBoundingClientRect().height;
    if (bodyHeight) {
      height = bodyHeight;
    }
    if (toolbar) {
      top = toolbar.getBoundingClientRect().top;
    }
    if (top < offset && top > offset - height) {
      wrapper.style.display = 'inherit';
      wrapper.style.left = left + 'px';
      wrapper.style.width = width + 'px';
      wrapper.style.top = offset + 'px';
      // 各項目の長さを設定する
      var colsWidth = [];
      Array.prototype.forEach.call(srcTable.querySelector('thead>tr').children, function (ele, idx) {
        // eslint-disable-line
        var colWidth = ele.getBoundingClientRect().width;
        colsWidth.push(colWidth);
      });
      Array.prototype.forEach.call(fixedTable.querySelector('thead>tr').children, function (ele, idx) {
        ele.style.width = colsWidth[idx] + 'px';
      });
    } else {
      wrapper.style.display = 'none';
    }
  },
  /**
   * DataTableのデータをＣＳＶに変換する
   * @param {Array} tableHead テーブルのヘッダー
   * @param {Array} tableData テーブルのデータ
   */
  dataTableToCSV: function dataTableToCSV(tableHead, tableData) {
    var self = this;
    var headArray = [];
    var csvArray = [];
    tableHead = tableHead.filter(function (col) {
      return col.visible !== false || col.csv === true;
    });
    tableHead = tableHead.filter(function (col) {
      return col.csv !== false;
    });
    tableHead.map(function (col) {
      return headArray.push(col.label || col.name);
    });
    csvArray.push(headArray);
    // データ部分をＣＳＶに入れる
    tableData.forEach(function (row) {
      var dataArray = [];
      tableHead.map(function (col) {
        var value = row[col.name];
        if (col.type === 'choice') {
          value = self.getDisplayNameFromChoice(value, col);
        }
        dataArray.push(value);
        return true;
      });
      csvArray.push(dataArray);
    });
    return this.arrayToCSV(csvArray);
  },
  arrayToCSV: function arrayToCSV(array) {
    var lineArray = [];
    array.forEach(function (infoArray, index) {
      // eslint-disable-line
      var line = infoArray.join('","');
      lineArray.push("\"".concat(line, "\""));
    });
    var csvContent = lineArray.join("\n");
    return csvContent;
  },
  downloadCSV: function downloadCSV(csvContent, filename) {
    if (filename) {
      filename += '.csv';
    } else {
      filename = 'export.csv';
    }
    var link = document.createElement('a');
    var bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    var blob = new Blob([bom, csvContent], {
      type: 'text/csv'
    });
    link.setAttribute('download', filename);
    if (window.webkitURL && window.webkitURL.createObjectURL) {
      // for chrome (and safari)
      link.setAttribute('href', window.webkitURL.createObjectURL(blob));
      link.click();
    } else if (window.URL && window.URL.createObjectURL) {
      // for firefox
      link.setAttribute('href', window.URL.createObjectURL(blob));
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('サポートしないブラウザです。');
    }
  },
  downloadDataTableCSV: function downloadDataTableCSV(filename, tableHead, tableData) {
    var data = this.dataTableToCSV(tableHead, tableData);
    this.downloadCSV(data, filename);
  },
  /**
   * JSONデータをＵＲＬ用のパラメーターに変換する
   * @param {Object} json JSONデータ
   */
  jsonToUrl: function jsonToUrl(json) {
    return Object.keys(json).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(json[k]);
    }).join('&');
  },
  /**
   * ＵＲＬをＪＳＯＮに変換する
   * @param {String} url URL
   */
  urlToJson: function urlToJson(url) {
    if (!url) {
      return {};
    }
    var hash;
    var json = {};
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      json[hash[0]] = hash[1] === 'true' ? true : hash[1] === 'false' ? false : hash[1];
      // If you want to get in native datatypes
      // json[hash[0]] = JSON.parse(hash[1]); 
    }
    return json;
  },
  /**
   * Base64ファイルのサイズを取得（単位：バイト数）
   * @param {String} b64string Base64ファイルの文字列
   */
  getB64FileSize: function getB64FileSize(b64string) {
    if (b64string && b64string.indexOf(";base64,") >= 0) {
      var arr = b64string.split(';base64,');
      var data = arr[1];
      return data.length * 3 / 4 - (data.match(/=/g) || []).length;
    } else {
      return 0;
    }
  }
};