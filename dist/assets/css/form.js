"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _colors = require("@material-ui/core/colors");
var formStyle = function formStyle(theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      width: "calc(100% - ".concat(theme.spacing(2), "px)")
    },
    helpText: {
      color: 'gray',
      fontSize: theme.spacing(1.5)
    },
    inputFileBtnHide: {
      opacity: 0,
      appearance: 'none',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      cursor: 'pointer'
    },
    fileWrapper: {
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    fileNameWrapper: {
      display: 'inline-block',
      borderBottom: '1px solid lightgray',
      marginLeft: '5px',
      lineHeight: '35px',
      flex: 1,
      cursor: 'pointer',
      width: '100%'
    },
    fileDownloadWrapper: {
      position: 'absolute',
      right: 0,
      backgroundColor: 'white'
    },
    fileDownloadIcon: {
      padding: theme.spacing(1)
    },
    autoCompleteWrapper: {
      '& .MuiFormControl-root': {
        margin: 0
      }
    },
    required: {
      color: _colors.red[500],
      fontSize: theme.spacing(1.8),
      fontWeight: 'bold'
    }
  };
};
var _default = exports["default"] = formStyle;