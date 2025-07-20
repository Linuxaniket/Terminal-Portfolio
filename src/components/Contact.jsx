import React from "react";
import { Text, Box, useInput } from "ink";
import terminalLink from "terminal-link";
import { colors, createBox } from "../utils/colors.js";

export default function Contact({ data, onBack }) {
  useInput((input, key) => {
    if (key.return || input === "b") onBack();
  });

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: data.email,
      link: `mailto:${data.email}`
    },
    {
      icon: "🌐",
      label: "Website",
      value: data.website,
      link: data.website
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: data.linkedin,
      link: data.linkedin
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: data.github,
      link: data.github
    },
    {
      icon: "🐦",
      label: "Twitter",
      value: data.twitter,
      link: data.twitter
    }
  ];

  return (
    <Box flexDirection="column">
      <Text>{createBox(colors.success("📫 GET IN TOUCH"), { borderColor: "green" })}</Text>
      <Box marginTop={1} marginBottom={2}>
        <Text>Let's connect! I'm always open to interesting conversations and opportunities.</Text>
      </Box>
      <Box flexDirection="column">
        {contactMethods.map((contact, index) => (
          <Box key={index} marginBottom={1}>
            <Box width={3}>
              <Text>{contact.icon}</Text>
            </Box>
            <Box width={12}>
              <Text color="cyan">{contact.label}:</Text>
            </Box>
            <Text>
              {terminalLink(
                contact.value,
                contact.link,
                { fallback: (text, url) => colors.primary(text) }
              )}
            </Text>
          </Box>
        ))}
      </Box>
      <Box marginTop={3} flexDirection="column">
        <Text color="yellow">🤝 What I'm looking for:</Text>
        <Box marginTop={1} marginLeft={2} flexDirection="column">
          <Text>• Interesting full-time opportunities</Text>
          <Text>• Freelance and consulting projects</Text>
          <Text>• Open source collaborations</Text>
          <Text>• Speaking opportunities at events</Text>
          <Text>• Just a friendly chat about tech!</Text>
        </Box>
      </Box>
      <Box marginTop={2}>
        <Text>{colors.fire("⚡ Response time: Usually within 24 hours!")}</Text>
      </Box>
      <Box marginTop={2}>
        <Text color="gray">Press {colors.highlight("Enter")} or {colors.highlight("B")} to go back</Text>
      </Box>
    </Box>
  );
}
