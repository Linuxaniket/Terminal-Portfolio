import React from "react";
import { Text, Box, useInput } from "ink";
import { colors, createBox } from "../utils/colors.js";
export default function Skills(_ref) {
  var data = _ref.data,
    onBack = _ref.onBack;
  useInput(function (input, key) {
    if (key["return"] || input === "b") onBack();
  });
  var skillCategories = [{
    title: "🌐 Languages",
    items: data.languages,
    color: "red"
  }, {
    title: "⚛️ Frontend",
    items: data.frontend,
    color: "blue"
  }, {
    title: "🔧 Backend",
    items: data.backend,
    color: "green"
  }, {
    title: "🛠 Tools & Platforms",
    items: data.tools,
    color: "yellow"
  }, {
    title: "📚 Currently Learning",
    items: data.learning,
    color: "magenta"
  }];
  var createSkillBar = function createSkillBar(skill) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.floor(Math.random() * 5) + 3;
    var totalBars = 8;
    var filledBars = Math.min(level, totalBars);
    var emptyBars = totalBars - filledBars;
    return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
      width: 20
    }, /*#__PURE__*/React.createElement(Text, null, skill)), /*#__PURE__*/React.createElement(Text, {
      color: "cyan"
    }, "█".repeat(filledBars)), /*#__PURE__*/React.createElement(Text, {
      color: "gray"
    }, "░".repeat(emptyBars)));
  };
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, createBox(colors.warning("⚡ SKILLS & EXPERTISE"), {
    borderColor: "yellow"
  })), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    marginBottom: 2
  }, /*#__PURE__*/React.createElement(Text, {
    color: "gray"
  }, "Technologies I work with and my proficiency levels")), skillCategories.map(function (category, index) {
    return /*#__PURE__*/React.createElement(Box, {
      key: index,
      marginBottom: 2,
      flexDirection: "column"
    }, /*#__PURE__*/React.createElement(Text, {
      color: category.color
    }, category.title), /*#__PURE__*/React.createElement(Box, {
      marginTop: 1,
      flexDirection: "column"
    }, category.items.slice(0, 5).map(function (skill, skillIndex) {
      return /*#__PURE__*/React.createElement(Box, {
        key: skillIndex,
        marginLeft: 2
      }, createSkillBar(skill));
    }), category.items.length > 5 && /*#__PURE__*/React.createElement(Box, {
      marginLeft: 2
    }, /*#__PURE__*/React.createElement(Text, {
      color: "gray"
    }, "+ ", category.items.length - 5, " more..."))));
  }), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1
  }, /*#__PURE__*/React.createElement(Text, null, colors.ocean("💡 Always learning and exploring new technologies!"))), /*#__PURE__*/React.createElement(Box, {
    marginTop: 2
  }, /*#__PURE__*/React.createElement(Text, {
    color: "gray"
  }, "Press ", colors.highlight("Enter"), " or ", colors.highlight("B"), " to go back")));
}