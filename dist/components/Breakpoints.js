"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsWidthDown = useIsWidthDown;
exports.useIsWidthUp = useIsWidthUp;
var _core = require("@material-ui/core");
function useIsWidthUp(breakpoint) {
  var theme = (0, _core.useTheme)();
  return (0, _core.useMediaQuery)(theme.breakpoints.up(breakpoint));
}
function useIsWidthDown(breakpoint) {
  var theme = (0, _core.useTheme)();
  return (0, _core.useMediaQuery)(theme.breakpoints.down(breakpoint));
}