function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from "react";
import { Text, Box, useInput } from "ink";
import { colors, createBox } from "../utils/colors.js";
var menuItems = [{
  key: "1",
  value: "about",
  label: "👤 About Me",
  description: "Learn about my background and interests"
}, {
  key: "2",
  value: "projects",
  label: "🚀 Projects",
  description: "Explore my latest work and side projects"
}, {
  key: "3",
  value: "skills",
  label: "⚡ Skills & Tech Stack",
  description: "Technologies I work with"
}, {
  key: "4",
  value: "contact",
  label: "📫 Contact & Social",
  description: "Get in touch or find me online"
}];
export default function Menu(_ref) {
  var onSelect = _ref.onSelect;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    selectedIndex = _useState2[0],
    setSelectedIndex = _useState2[1];
  useInput(function (input, key) {
    if (key.upArrow) setSelectedIndex(function (prev) {
      return prev > 0 ? prev - 1 : menuItems.length - 1;
    });else if (key.downArrow) setSelectedIndex(function (prev) {
      return prev < menuItems.length - 1 ? prev + 1 : 0;
    });else if (key["return"]) onSelect(menuItems[selectedIndex].value);else if (input >= "1" && input <= "4") onSelect(menuItems[parseInt(input) - 1].value);
  });
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, createBox(colors.ocean("🌟 INTERACTIVE PORTFOLIO 🌟"), {
    textAlignment: "center",
    width: 60
  })), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    marginBottom: 1
  }, /*#__PURE__*/React.createElement(Text, {
    color: "gray"
  }, "Navigate with \u2191\u2193 arrow keys or number keys, press Enter to select")), menuItems.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Box, {
      key: item.key,
      marginBottom: 1
    }, /*#__PURE__*/React.createElement(Box, {
      width: 50
    }, /*#__PURE__*/React.createElement(Text, {
      backgroundColor: selectedIndex === index ? "cyan" : undefined,
      color: selectedIndex === index ? "black" : "white"
    }, selectedIndex === index ? "▶ " : "  ", colors.highlight(item.key), ". ", item.label)), /*#__PURE__*/React.createElement(Box, {
      marginLeft: 2
    }, /*#__PURE__*/React.createElement(Text, {
      color: "gray"
    }, item.description)));
  }), /*#__PURE__*/React.createElement(Box, {
    marginTop: 2
  }, /*#__PURE__*/React.createElement(Text, null, colors.fire("💡 Pro tip: This portfolio is open source!"))));
}