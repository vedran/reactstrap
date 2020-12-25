"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var propTypes = {
  tag: _utils.tagPropType,
  className: _propTypes.default.string,
  cssModule: _propTypes.default.object
};
var defaultProps = {
  tag: 'li'
};
var ListInlineItem = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0, _objectWithoutPropertiesLoose2.default)(props, ["className", "cssModule", "tag"]);
  var classes = (0, _utils.mapToCssModules)((0, _classnames.default)(className, 'list-inline-item'), cssModule);
  return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({}, attributes, {
    className: classes,
    ref: ref
  }));
});
ListInlineItem.propTypes = propTypes;
ListInlineItem.defaultProps = defaultProps;
var _default = ListInlineItem;
exports.default = _default;