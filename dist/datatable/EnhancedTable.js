"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _uuid = require("uuid");
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
var _DataTableCell = _interopRequireDefault(require("./DataTableCell"));
var _DataTableHead = _interopRequireDefault(require("./DataTableHead"));
var _DataTablePagination = _interopRequireDefault(require("./DataTablePagination"));
var _DataTableToolbar = _interopRequireDefault(require("./DataTableToolbar"));
var _DataTableFixedHead = _interopRequireDefault(require("./DataTableFixedHead"));
var _datatable = _interopRequireDefault(require("../assets/css/datatable"));
var _utils = require("../utils");
var _components = require("../components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // @material-ui/core components
// core components
var useStyles = (0, _core.makeStyles)(_datatable["default"]);
function EnhancedTable(props) {
  var title = props.title,
    storageKey = props.storageKey,
    pushpinTop = props.pushpinTop,
    server = props.server,
    pk = props.pk,
    selectable = props.selectable,
    rowsPerPageOptions = props.rowsPerPageOptions,
    tableHead = props.tableHead,
    tableActions = props.tableActions,
    rowActions = props.rowActions,
    toolbar = props.toolbar,
    allowCsv = props.allowCsv,
    showTitle = props.showTitle,
    showAggregate = props.showAggregate,
    addProps = props.addProps,
    editProps = props.editProps,
    deleteProps = props.deleteProps,
    filterLayout = props.filterLayout,
    tableStyles = props.tableStyles,
    tableHeaderColor = props.tableHeaderColor,
    tableProps = props.tableProps;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    tableData = _useState2[0],
    setTableData = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    page = _useState6[0],
    setPage = _useState6[1];
  var _useState7 = (0, _react.useState)(25),
    _useState8 = _slicedToArray(_useState7, 2),
    rowsPerPage = _useState8[0],
    setRowsPerPage = _useState8[1];
  var _useState9 = (0, _react.useState)('asc'),
    _useState0 = _slicedToArray(_useState9, 2),
    order = _useState0[0],
    setOrder = _useState0[1];
  var _useState1 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    orderBy = _useState10[0],
    setOrderBy = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    orderNumeric = _useState12[0],
    setOrderNumeric = _useState12[1];
  var _useState13 = (0, _react.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    filters = _useState14[0],
    setFilters = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    tableId = _useState16[0],
    setTableId = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    toolbarId = _useState18[0],
    setToolbarId = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    fixedTableId = _useState20[0],
    setFixedTableId = _useState20[1];
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    fixedHeaderId = _useState22[0],
    setFixedHeaderId = _useState22[1];
  var classes = useStyles();
  var location = (0, _reactRouterDom.useLocation)();
  var history = (0, _reactRouterDom.useHistory)();
  (0, _react.useEffect)(function () {
    setTableData(_utils.table.initTableData(props.tableData));
  }, [props.tableData]);
  (0, _react.useEffect)(function () {
    setRowsPerPage(props.rowsPerPage);
  }, [props.rowsPerPage]);
  (0, _react.useEffect)(function () {
    var json = _utils.common.urlToJson(location.search);
    var order = _utils.table.getOrder(location);
    if (json.__rowsPerPage) {
      setRowsPerPage(json.__rowsPerPage);
    }
    if (json.__page) {
      setPage(json.__page);
    }
    if (order) {
      setOrder(order.__order);
      setOrderBy(order.__orderBy);
      setOrderNumeric(order.__orderNumeric);
    }
    var urlFilters = _utils.table.loadFilters(location, props.tableHead);
    var storageFilter = getFilter();
    if (!_utils.common.isEmpty(storageFilter)) {
      setFilters(storageFilter);
    } else if (!_utils.common.isEmpty(urlFilters)) {
      setFilters(urlFilters);
    }
  }, [location.search]);
  (0, _react.useEffect)(function () {
    setTableId((0, _uuid.v4)());
    setToolbarId((0, _uuid.v4)());
    setFixedTableId((0, _uuid.v4)());
    setFixedHeaderId((0, _uuid.v4)());
  }, []);
  (0, _react.useEffect)(function () {
    if (tableId && toolbarId && fixedTableId && fixedHeaderId) {
      window.addEventListener('scroll', handleFixedHeader);
      window.addEventListener('resize', handleFixedHeader);
      return function () {
        window.removeEventListener('scroll', handleFixedHeader);
        window.removeEventListener('resize', handleFixedHeader);
      };
    }
  }, [tableId, toolbarId, fixedTableId, fixedHeaderId]);
  (0, _react.useEffect)(function () {
    handleFixedHeader();
  });
  var handleFixedHeader = function handleFixedHeader() {
    if (tableId && toolbarId && fixedTableId && fixedHeaderId) {
      _utils.common.setFixedTableHeader(fixedHeaderId, toolbarId, tableId, fixedTableId, pushpinTop);
    }
  };

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (JSON.stringify(this.props.tableData) !== JSON.stringify(nextProps.tableData)) {
  //     const { selected } = this.state;
  //     const tableData = table.initTableData(nextProps.tableData);
  //     this.setState({tableData});
  //     if (!common.isEmpty(selected)) {
  //       // テーブルのデータ変更したら、選択したデータも変更する。
  //       let pkList = [];
  //       let key = null;
  //       for (let data of selected) {
  //         if (!key) {
  //           key = this.getDataKey(data);
  //         }
  //         pkList.push(data[key]);
  //       }
  //       const newSelected = tableData.filter(row => pkList.indexOf(row[key]) >= 0);
  //       this.setState({ selected: newSelected });
  //     }
  //   }
  // }

  var handleChangePage = function handleChangePage(event, page) {
    handleFixedHeader();
    setPage(page);
    // if (urlReflect === true) {
    //   table.changePaginationUrl(page, location, history);
    // }
  };
  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    handleFixedHeader();
    if (server) {
      // TODO: サーバーからデータ取得
    } else {
      setRowsPerPage(event.target.value);
    }
    // 1ページ目に移動
    handleChangePage(event, 0);
    // if (urlReflect === true) {
    //   table.changePageSizeUrl(event.target.value, location, history);
    // }
  };
  var handleSort = function handleSort(event, property, _orderNumeric) {
    var _orderBy = property;
    var _order = 'desc';
    if (orderBy === property && order === 'desc') {
      _order = 'asc';
    }
    handleFixedHeader();
    setOrder(_order);
    setOrderBy(_orderBy);
    setOrderNumeric(_orderNumeric);
    // if (urlReflect === true) {
    //   table.changeOrderUrl(_order, _orderBy, _orderNumeric, location, history);
    // }
  };
  var handleChangeFilter = function handleChangeFilter(event, _filters) {
    handleFixedHeader();
    _filters = _utils.table.resetFilter(_filters, tableHead);
    setFilters(_filters);
    saveFilter(_filters);
    // filter 変化時に URL のフィルターパラメーターを同期する。
    // これにより chip 削除後に同一リンクを再クリックしても location.search が変化して再フィルターが機能する。
    _utils.table.changeFilterUrl(_filters, location, history);
    // 1ページ目に移動
    handleChangePage(event, 0);
  };

  /**
   * 絞り込み条件を保存する。
   * 他画面に遷移してまた戻る時に、入力した検索条件を維持するため。
   */
  var saveFilter = function saveFilter(_filters) {
    if (storageKey) {
      localStorage.setItem("".concat(location.pathname, "-key-").concat(storageKey), JSON.stringify(_filters));
    }
  };

  /**
   * 絞り込み条件を取得する。
   * 他画面に遷移してまた戻る時に、入力した検索条件を維持するため。
   */
  var getFilter = function getFilter() {
    if (storageKey) {
      var data = localStorage.getItem("".concat(location.pathname, "-key-").concat(storageKey));
      return JSON.parse(data);
    } else {
      return {};
    }
  };
  var isSelected = function isSelected(data) {
    if (!data) {
      return false;
    }
    var key = getDataKey(data);
    if (!selected) {
      return false;
    } else {
      return selected.filter(function (row) {
        return row[key] === data[key];
      }).length > 0;
    }
  };
  var getDataKey = function getDataKey(data) {
    var key = null;
    if (data.id !== null && data.id !== undefined) {
      key = 'id';
    } else if (data.pk !== null && data.pk !== undefined) {
      key = pk;
    } else {
      key = '__index__';
    }
    return key;
  };
  var handleRowSelect = function handleRowSelect(data) {
    if (selectable === 'none') {
      return;
    }
    var _isSelected = isSelected(data);
    var newSelected = [];
    var key = getDataKey(data);
    if (selectable === 'multiple') {
      if (_isSelected === true) {
        var selectedIndex = selected.findIndex(function (i) {
          return i[key] === data[key];
        });
        newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
      } else {
        newSelected = newSelected.concat(selected, data);
      }
    } else if (selectable === 'single') {
      if (_isSelected === true) {
        newSelected = [];
      } else {
        newSelected = [data];
      }
    }
    setSelected(newSelected);
  };
  var handleSelectAllClick = function handleSelectAllClick(event, checked) {
    if (checked) {
      var _results = _utils.common.stableFilter(tableData, filters);
      setSelected(_results);
      return;
    } else {
      clearSelected();
    }
  };
  var clearSelected = function clearSelected() {
    setSelected([]);
  };
  var handleSaveCallback = function handleSaveCallback(data) {
    if (Array.isArray(selected) && selected.length === 1) {
      // 変更成功の場合、変更後のデータをテーブルに更新する
      setSelected([data]);
    }
  };
  var getHistories = function getHistories(_row, _col) {
    if (_row && _col.history && _row.histories) {
      if (Array.isArray(_col.history)) {
        return _row.histories.filter(function (i) {
          return _col.history.indexOf(i.key) >= 0;
        });
      } else {
        return _row.histories.filter(function (i) {
          return i.key === _col.history;
        });
      }
    }
    return [];
  };
  var results = _utils.common.stableSort(tableData, _utils.common.getSorting(order, orderBy, orderNumeric));
  if (!_utils.common.isEmpty(filters)) {
    results = _utils.common.stableFilter(results, filters);
  }
  var headerProps = {
    classes: classes,
    tableHeaderColor: tableHeaderColor,
    tableHead: tableHead,
    onSort: handleSort,
    order: order,
    orderBy: orderBy,
    selectable: selectable,
    selected: selected,
    data: results,
    onSelectAllClick: handleSelectAllClick
  };
  var toolbarProps = {
    title: title,
    showTitle: showTitle,
    filters: filters,
    filterLayout: filterLayout,
    tableHead: tableHead,
    tableData: results,
    selected: selected,
    onChangeFilter: handleChangeFilter,
    tableActions: tableActions,
    rowActions: rowActions,
    allowCsv: allowCsv,
    pk: pk,
    addProps: addProps,
    editProps: editProps,
    saveCallback: handleSaveCallback,
    deleteProps: deleteProps,
    clearSelected: clearSelected
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.tableResponsive
  }, toolbar ? /*#__PURE__*/_react["default"].createElement(_DataTableToolbar["default"], _extends({
    id: toolbarId
  }, toolbarProps)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'auto',
      overflowX: "auto"
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Table, _extends({
    className: classes.table,
    id: tableId
  }, tableProps, {
    style: _objectSpread({}, tableStyles)
  }), /*#__PURE__*/_react["default"].createElement(_DataTableHead["default"], headerProps), /*#__PURE__*/_react["default"].createElement(_core.TableBody, null, results.length > 0 ? _utils.common.getDataForDisplay(results, rowsPerPage, page).map(function (row, key) {
    var rowStyles = _utils.common.getExtraRowStyles(row, tableHead);
    var _isSelected = isSelected(row);
    var chkCell = null;
    if (selectable === 'multiple' || selectable === 'single') {
      chkCell = /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
        padding: "none"
      }, /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
        checked: _isSelected,
        onClick: function onClick() {
          return handleRowSelect(row);
        }
      }));
    }
    return /*#__PURE__*/_react["default"].createElement(_core.TableRow, {
      key: key,
      className: classes.tableRow,
      role: "checkbox",
      "aria-checked": _isSelected,
      selected: _isSelected,
      style: _objectSpread({}, rowStyles)
    }, chkCell, tableHead.map(function (col, key) {
      return /*#__PURE__*/_react["default"].createElement(_DataTableCell["default"], {
        key: key,
        classes: classes,
        column: col,
        data: row,
        histories: getHistories(row, col)
      });
    }));
  }) : /*#__PURE__*/_react["default"].createElement(_core.TableRow, {
    className: classes.tableRow
  }, /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
    colSpan: tableHead.length + (selectable === 'none' ? 0 : 1)
  }, _utils.constant.INFO.NO_DATA))), /*#__PURE__*/_react["default"].createElement(_core.TableFooter, null, results.length > 0 && showAggregate === true ? /*#__PURE__*/_react["default"].createElement(_components.AggregateFooter, {
    classes: classes,
    tableHead: tableHead,
    tableData: results,
    selectable: selectable
  }) : null))), /*#__PURE__*/_react["default"].createElement(_DataTablePagination["default"], {
    component: "div",
    count: results.length,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: rowsPerPageOptions,
    page: page,
    backIconButtonProps: {
      'aria-label': 'Previous Page'
    },
    nextIconButtonProps: {
      'aria-label': 'Next Page'
    },
    onPageChange: handleChangePage,
    onRowsPerPageChange: handleChangeRowsPerPage
  }), !(0, _components.useIsWidthDown)('xs') ? /*#__PURE__*/_react["default"].createElement(_DataTableFixedHead["default"], {
    id: fixedHeaderId,
    tableId: fixedTableId,
    classes: classes,
    tableHeader: /*#__PURE__*/_react["default"].createElement(_DataTableHead["default"], headerProps),
    toolbar: toolbar ? /*#__PURE__*/_react["default"].createElement(_DataTableToolbar["default"], toolbarProps) : null
  }) : null);
}
EnhancedTable.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _utils.constant.tableProps), _utils.constant.tableActionProps), {}, {
  selectable: _propTypes["default"].oneOf(['none', 'single', 'multiple']),
  pk: _propTypes["default"].string,
  rowsPerPage: _propTypes["default"].number,
  rowsPerPageOptions: _propTypes["default"].array,
  server: _propTypes["default"].bool,
  toolbar: _propTypes["default"].bool,
  filters: _propTypes["default"].object,
  filterLayout: _propTypes["default"].array,
  pushpinTop: _propTypes["default"].number,
  tableActions: _propTypes["default"].arrayOf(_propTypes["default"].object),
  rowActions: _propTypes["default"].arrayOf(_propTypes["default"].object),
  allowCsv: _propTypes["default"].bool,
  urlReflect: _propTypes["default"].bool,
  showTitle: _propTypes["default"].bool,
  showAggregate: _propTypes["default"].bool,
  addProps: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    schema: _propTypes["default"].array.isRequired,
    handleOk: _propTypes["default"].func.isRequired,
    visible: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func])
  }),
  editProps: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    schema: _propTypes["default"].array.isRequired,
    handleOk: _propTypes["default"].func.isRequired,
    visible: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func])
  }),
  deleteProps: _propTypes["default"].shape({
    handleDelete: _propTypes["default"].func.isRequired,
    visible: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func])
  }),
  storageKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
});
EnhancedTable.defaultProps = _objectSpread(_objectSpread(_objectSpread({}, _utils.constant.tablePropsDefault), _utils.constant.tableActionPropsDefault), {}, {
  selectable: 'none',
  pk: 'id',
  rowsPerPage: 10,
  rowsPerPageOptions: [5, 10, 25, 50, 100],
  server: false,
  toolbar: true,
  filters: {},
  pushpinTop: 0,
  tableActions: [],
  rowActions: [],
  allowCsv: false,
  urlReflect: false,
  showTitle: false,
  showAggregate: false,
  addProps: null,
  editProps: null,
  deleteProps: null
});
var _default = exports["default"] = EnhancedTable;