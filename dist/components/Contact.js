import React from "react";
import { Text, Box, useInput } from "ink";
import terminalLink from "terminal-link";
import { colors, createBox } from "../utils/colors.js";
export default function Contact(_ref) {
  var data = _ref.data,
    onBack = _ref.onBack;
  useInput(function (input, key) {
    if (key["return"] || input === "b") onBack();
  });
  var contactMethods = [{
    icon: "📧",
    label: "Email",
    value: data.email,
    link: "mailto:".concat(data.email)
  }, {
    icon: "🌐",
    label: "Website",
    value: data.website,
    link: data.website
  }, {
    icon: "💼",
    label: "LinkedIn",
    value: data.linkedin,
    link: data.linkedin
  }, {
    icon: "🐙",
    label: "GitHub",
    value: data.github,
    link: data.github
  }, {
    icon: "🐦",
    label: "Twitter",
    value: data.twitter,
    link: data.twitter
  }];
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, createBox(colors.success("📫 GET IN TOUCH"), {
    borderColor: "green"
  })), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    marginBottom: 2
  }, /*#__PURE__*/React.createElement(Text, null, "Let's connect! I'm always open to interesting conversations and opportunities.")), /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, contactMethods.map(function (contact, index) {
    return /*#__PURE__*/React.createElement(Box, {
      key: index,
      marginBottom: 1
    }, /*#__PURE__*/React.createElement(Box, {
      width: 3
    }, /*#__PURE__*/React.createElement(Text, null, contact.icon)), /*#__PURE__*/React.createElement(Box, {
      width: 12
    }, /*#__PURE__*/React.createElement(Text, {
      color: "cyan"
    }, contact.label, ":")), /*#__PURE__*/React.createElement(Text, null, terminalLink(contact.value, contact.link, {
      fallback: function fallback(text, url) {
        return colors.primary(text);
      }
    })));
  })), /*#__PURE__*/React.createElement(Box, {
    marginTop: 3,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "yellow"
  }, "\uD83E\uDD1D What I'm looking for:"), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    marginLeft: 2,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, "\u2022 Interesting full-time opportunities"), /*#__PURE__*/React.createElement(Text, null, "\u2022 Freelance and consulting projects"), /*#__PURE__*/React.createElement(Text, null, "\u2022 Open source collaborations"), /*#__PURE__*/React.createElement(Text, null, "\u2022 Speaking opportunities at events"), /*#__PURE__*/React.createElement(Text, null, "\u2022 Just a friendly chat about tech!"))), /*#__PURE__*/React.createElement(Box, {
    marginTop: 2
  }, /*#__PURE__*/React.createElement(Text, null, colors.fire("⚡ Response time: Usually within 24 hours!"))), /*#__PURE__*/React.createElement(Box, {
    marginTop: 2
  }, /*#__PURE__*/React.createElement(Text, {
    color: "gray"
  }, "Press ", colors.highlight("Enter"), " or ", colors.highlight("B"), " to go back")));
}