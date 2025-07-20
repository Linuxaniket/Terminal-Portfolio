import React from "react";
import { Text, Box } from "ink";
import figlet from "figlet";
import { colors, createBox } from "../utils/colors.js";
export default function Welcome(_ref) {
  var data = _ref.data;
  var asciiArt = figlet.textSync(data.name, {
    font: "ANSI Shadow",
    horizontalLayout: "fitted"
  });
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "cyan"
  }, asciiArt), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1
  }, /*#__PURE__*/React.createElement(Text, null, colors.rainbow(data.title))), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1
  }, /*#__PURE__*/React.createElement(Text, {
    color: "gray"
  }, "\"", data.tagline, "\"")), /*#__PURE__*/React.createElement(Box, {
    marginTop: 2
  }, /*#__PURE__*/React.createElement(Text, {
    color: "yellow"
  }, "\u26A1 Loading portfolio...")), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1
  }, /*#__PURE__*/React.createElement(Text, {
    color: "gray"
  }, "Press any key to continue")));
}