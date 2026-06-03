"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  tableProps: {
    title: _propTypes["default"].string,
    tableHeaderColor: _propTypes["default"].oneOf(["warning", "primary", "danger", "success", "info", "rose", "gray"]),
    tableHead: _propTypes["default"].arrayOf(_propTypes["default"].object),
    tableData: _propTypes["default"].arrayOf(_propTypes["default"].object),
    tableProps: _propTypes["default"].object
  },
  tablePropsDefault: {
    tableHeaderColor: "gray",
    tableHead: [],
    tableData: []
  },
  tableActionProps: {
    tableActions: _propTypes["default"].arrayOf(_propTypes["default"].object),
    rowActions: _propTypes["default"].arrayOf(_propTypes["default"].object),
    actionsTrigger: _propTypes["default"].func
  },
  tableActionPropsDefault: {
    tableActions: [],
    rowActions: []
  },
  INFO: {
    NO_DATA: 'データはありません。',
    INPUT_KEYWORD: '検索キーワードを入力し、エンターキーを押下してください。',
    DELETE_CONFIRM: 'データを削除します、よろしいですか？',
    NO_NOTIFICATIONS: '通知はありません。'
  },
  ERROR: {
    REQUIRE_FIELD: '%(name)sは必須項目です。',
    FORM_CHECK_ERROR: 'エラー発生しました。',
    INVALID_DATA: '有効なデータを入力してください。',
    FILE_SIZE_LIMIT: 'ファイルサイズは制限%(limit)sを超えました。'
  }
};