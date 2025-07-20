function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState, useEffect } from "react";
import { Box, Text, useInput, useApp } from "ink";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import Welcome from "./components/Welcome.js";
import Menu from "./components/Menu.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
import { colors } from "./utils/colors.js";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var portfolioData = JSON.parse(readFileSync(join(__dirname, "data", "portfolio.json"), "utf8"));
var SCREENS = {
  WELCOME: "welcome",
  MENU: "menu",
  ABOUT: "about",
  PROJECTS: "projects",
  SKILLS: "skills",
  CONTACT: "contact"
};
export default function App() {
  var _useState = useState(SCREENS.WELCOME),
    _useState2 = _slicedToArray(_useState, 2),
    currentScreen = _useState2[0],
    setCurrentScreen = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    showWelcome = _useState4[0],
    setShowWelcome = _useState4[1];
  var _useApp = useApp(),
    exit = _useApp.exit;
  useEffect(function () {
    if (showWelcome) {
      var timer = setTimeout(function () {
        setShowWelcome(false);
        setCurrentScreen(SCREENS.MENU);
      }, 3000);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [showWelcome]);
  useInput(function (input, key) {
    if (key.ctrl && input === "c") exit();
    if (input === "q" && currentScreen !== SCREENS.WELCOME) exit();
    if ((key.escape || input === "m") && currentScreen !== SCREENS.MENU && currentScreen !== SCREENS.WELCOME) {
      setCurrentScreen(SCREENS.MENU);
    }
    if (showWelcome) {
      setShowWelcome(false);
      setCurrentScreen(SCREENS.MENU);
    }
  });
  var handleMenuSelect = function handleMenuSelect(selection) {
    return setCurrentScreen(selection);
  };
  var renderScreen = function renderScreen() {
    switch (currentScreen) {
      case SCREENS.WELCOME:
        return /*#__PURE__*/React.createElement(Welcome, {
          data: portfolioData.personal
        });
      case SCREENS.MENU:
        return /*#__PURE__*/React.createElement(Menu, {
          onSelect: handleMenuSelect
        });
      case SCREENS.ABOUT:
        return /*#__PURE__*/React.createElement(About, {
          data: portfolioData,
          onBack: function onBack() {
            return setCurrentScreen(SCREENS.MENU);
          }
        });
      case SCREENS.PROJECTS:
        return /*#__PURE__*/React.createElement(Projects, {
          data: portfolioData.projects,
          onBack: function onBack() {
            return setCurrentScreen(SCREENS.MENU);
          }
        });
      case SCREENS.SKILLS:
        return /*#__PURE__*/React.createElement(Skills, {
          data: portfolioData.skills,
          onBack: function onBack() {
            return setCurrentScreen(SCREENS.MENU);
          }
        });
      case SCREENS.CONTACT:
        return /*#__PURE__*/React.createElement(Contact, {
          data: portfolioData.personal,
          onBack: function onBack() {
            return setCurrentScreen(SCREENS.MENU);
          }
        });
      default:
        return /*#__PURE__*/React.createElement(Menu, {
          onSelect: handleMenuSelect
        });
    }
  };
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, renderScreen(), currentScreen !== SCREENS.WELCOME && /*#__PURE__*/React.createElement(Box, {
    marginTop: 1
  }, /*#__PURE__*/React.createElement(Text, {
    color: "gray"
  }, "Press ", colors.highlight("ESC"), " or ", colors.highlight("M"), " for menu \u2022 ", colors.highlight("Q"), " to quit \u2022 ", colors.highlight("Ctrl+C"), " to exit")));
}