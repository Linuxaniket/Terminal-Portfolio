function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from "react";
import { Text, Box, useInput } from "ink";
import terminalLink from "terminal-link";
import { colors, createBox } from "../utils/colors.js";
export default function Projects(_ref) {
  var _project$tech;
  var data = _ref.data,
    onBack = _ref.onBack;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    selectedProject = _useState2[0],
    setSelectedProject = _useState2[1];
  useInput(function (input, key) {
    if (key["return"] || input === "b") onBack();else if (key.leftArrow) setSelectedProject(function (prev) {
      return prev > 0 ? prev - 1 : data.length - 1;
    });else if (key.rightArrow) setSelectedProject(function (prev) {
      return prev < data.length - 1 ? prev + 1 : 0;
    });else if (!isNaN(input) && Number(input) >= 1 && Number(input) <= data.length) setSelectedProject(Number(input) - 1);
  });

  // Handle edge case if data is empty
  if (!data || data.length === 0) return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "red"
  }, "No projects found!"), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1
  }, /*#__PURE__*/React.createElement(Text, {
    color: "gray"
  }, "Press ", colors.highlight("Enter"), " or ", colors.highlight("B"), " to go back")));
  var project = data[selectedProject];
  var statusColors = {
    Live: "green",
    Development: "yellow",
    Planned: "gray"
  };
  var statusEmoji = {
    Live: "🚀",
    Development: "⚙️",
    Planned: "📝"
  };
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, createBox(colors.secondary("🚀 MY PROJECTS"), {
    borderColor: "magenta",
    borderStyle: "double"
  })), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    marginBottom: 1
  }, /*#__PURE__*/React.createElement(Text, null, "Navigate: \u2190 \u2192 arrows or number keys | Project ", selectedProject + 1, " of", " ", data.length)), /*#__PURE__*/React.createElement(Box, {
    marginBottom: 2
  }, data.map(function (_, index) {
    return /*#__PURE__*/React.createElement(Text, {
      key: index,
      color: index === selectedProject ? "cyan" : "gray",
      bold: index === selectedProject
    }, index === selectedProject ? "●" : "○", " ");
  })), /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, null, statusEmoji[project.status] || "📄", " ", colors.fire(project.name), /*#__PURE__*/React.createElement(Text, {
    color: statusColors[project.status],
    bold: true
  }, " [", project.status, "]"))), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    marginBottom: 1
  }, /*#__PURE__*/React.createElement(Text, null, project.description)), /*#__PURE__*/React.createElement(Box, {
    marginBottom: 1
  }, /*#__PURE__*/React.createElement(Text, {
    color: "cyan"
  }, "\uD83D\uDEE0 Tech Stack:")), /*#__PURE__*/React.createElement(Box, {
    marginLeft: 2,
    marginBottom: 1
  }, /*#__PURE__*/React.createElement(Text, null, (_project$tech = project.tech) === null || _project$tech === void 0 ? void 0 : _project$tech.join(" • "))), /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, project.github && /*#__PURE__*/React.createElement(Text, null, "\uD83D\uDCC1 Code:", " ", terminalLink(project.github, project.github, {
    fallback: function fallback(text, url) {
      return colors.primary(url);
    }
  })), project.demo && /*#__PURE__*/React.createElement(Text, null, "\uD83C\uDF10 Demo:", " ", terminalLink(project.demo, project.demo, {
    fallback: function fallback(text, url) {
      return colors.secondary(url);
    }
  })))), /*#__PURE__*/React.createElement(Box, {
    marginTop: 2
  }, /*#__PURE__*/React.createElement(Text, {
    color: "yellow"
  }, "\uD83D\uDCCB All Projects:")), data.map(function (proj, index) {
    return /*#__PURE__*/React.createElement(Box, {
      key: index,
      marginLeft: 2
    }, /*#__PURE__*/React.createElement(Text, {
      color: index === selectedProject ? "cyan" : "gray",
      bold: index === selectedProject
    }, index + 1, ". ", proj.name, /*#__PURE__*/React.createElement(Text, {
      color: statusColors[proj.status],
      bold: true
    }, " [", proj.status, "]")));
  }), /*#__PURE__*/React.createElement(Box, {
    marginTop: 2
  }, /*#__PURE__*/React.createElement(Text, {
    color: "gray"
  }, "Use \u2190 \u2192 to browse projects | Press ", colors.highlight("Enter"), " or", " ", colors.highlight("B"), " to go back")));
}