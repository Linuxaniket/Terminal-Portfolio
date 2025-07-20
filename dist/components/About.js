import React from "react";
import { Text, Box, useInput } from "ink";
import terminalLink from "terminal-link";
import { colors, createBox } from "../utils/colors.js";
export default function About(_ref) {
  var data = _ref.data,
    onBack = _ref.onBack;
  useInput(function (input, key) {
    if (key["return"] || input === "b") onBack();
  });
  var personal = data.personal,
    about = data.about,
    experience = data.experience,
    education = data.education;
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, createBox(colors.primary("👤 ABOUT ME"), {
    borderColor: "blue"
  })), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1
  }, /*#__PURE__*/React.createElement(Text, null, colors.highlight("Name: "), " ", personal.name, " |", " ", colors.highlight("Location: "), " ", personal.location)), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    marginBottom: 1
  }, /*#__PURE__*/React.createElement(Text, null, about.description)), /*#__PURE__*/React.createElement(Box, {
    marginBottom: 1
  }, /*#__PURE__*/React.createElement(Text, {
    color: "cyan"
  }, "\uD83C\uDFAF Current Focus:")), /*#__PURE__*/React.createElement(Box, {
    marginLeft: 2,
    marginBottom: 1
  }, /*#__PURE__*/React.createElement(Text, null, about.currentFocus)), /*#__PURE__*/React.createElement(Box, {
    marginBottom: 1
  }, /*#__PURE__*/React.createElement(Text, {
    color: "cyan"
  }, "\uD83D\uDCA1 Interests & Passions:")), /*#__PURE__*/React.createElement(Box, {
    marginLeft: 2,
    marginBottom: 2
  }, about.interests.map(function (interest, index) {
    return /*#__PURE__*/React.createElement(Text, {
      key: index
    }, "\u2022 ", interest);
  })), /*#__PURE__*/React.createElement(Text, {
    color: "magenta"
  }, "\uD83D\uDCC8 EXPERIENCE"), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1
  }, experience.map(function (exp, index) {
    return /*#__PURE__*/React.createElement(Box, {
      key: index,
      marginBottom: 1,
      flexDirection: "column"
    }, /*#__PURE__*/React.createElement(Text, null, colors.highlight(exp.position), " @ ", colors.secondary(exp.company)), /*#__PURE__*/React.createElement(Text, {
      color: "yellow"
    }, exp.duration), /*#__PURE__*/React.createElement(Text, {
      color: "gray"
    }, "\u21B3 ", exp.description));
  })), /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column",
    marginTop: 2,
    marginBottom: 2
  }, /*#__PURE__*/React.createElement(Text, {
    color: "magenta"
  }, "\uD83C\uDF93 EDUCATION"), education.map(function (edu, idx) {
    return /*#__PURE__*/React.createElement(Box, {
      key: idx,
      marginBottom: 1,
      flexDirection: "column"
    }, /*#__PURE__*/React.createElement(Text, null, edu.institution), /*#__PURE__*/React.createElement(Text, {
      color: "cyan"
    }, edu.degree, edu.cgpa ? " - CGPA: ".concat(edu.cgpa) : edu.percentage ? " - Percentage: ".concat(edu.percentage) : ""), /*#__PURE__*/React.createElement(Text, {
      color: "yellow"
    }, edu.duration, " | ", edu.location));
  })), /*#__PURE__*/React.createElement(Box, {
    marginTop: 2,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "green"
  }, "\uD83D\uDCC4 Download Resume:"), /*#__PURE__*/React.createElement(Text, null, terminalLink(personal.resumeUrl, personal.resumeUrl, {
    fallback: function fallback(text, url) {
      return colors.primary(url);
    }
  })), /*#__PURE__*/React.createElement(Text, {
    color: "gray"
  }, "(Ctrl+Click or click the link to open in your browser)")), /*#__PURE__*/React.createElement(Box, {
    marginTop: 2
  }, /*#__PURE__*/React.createElement(Text, {
    color: "gray"
  }, "Press ", colors.highlight("Enter"), " or ", colors.highlight("B"), " to go back")));
}