import React from "react";
import { Text, Box, useInput } from "ink";
import terminalLink from "terminal-link";
import { colors, createBox } from "../utils/colors.js";

export default function About({ data, onBack }) {
  useInput((input, key) => {
    if (key.return || input === "b") onBack();
  });

  const { personal, about, experience, education } = data;

  return (
    <Box flexDirection="column">
      <Text>
        {createBox(colors.primary("👤 ABOUT ME"), { borderColor: "blue" })}
      </Text>
      <Box marginTop={1}>
        <Text>
          {colors.highlight("Name: ")} {personal.name} |{" "}
          {colors.highlight("Location: ")} {personal.location}
        </Text>
      </Box>
      <Box marginTop={1} marginBottom={1}>
        <Text>{about.description}</Text>
      </Box>
      <Box marginBottom={1}>
        <Text color="cyan">🎯 Current Focus:</Text>
      </Box>
      <Box marginLeft={2} marginBottom={1}>
        <Text>{about.currentFocus}</Text>
      </Box>
      <Box marginBottom={1}>
        <Text color="cyan">💡 Interests & Passions:</Text>
      </Box>
      <Box marginLeft={2} marginBottom={2}>
        {about.interests.map((interest, index) => (
          <Text key={index}>• {interest}</Text>
        ))}
      </Box>
      <Text color="magenta">📈 EXPERIENCE</Text>
      <Box marginTop={1}>
        {experience.map((exp, index) => (
          <Box key={index} marginBottom={1} flexDirection="column">
            <Text>
              {colors.highlight(exp.position)} @ {colors.secondary(exp.company)}
            </Text>
            <Text color="yellow">{exp.duration}</Text>
            <Text color="gray">↳ {exp.description}</Text>
          </Box>
        ))}
      </Box>
      {/* Education section */}
      <Box flexDirection="column" marginTop={2} marginBottom={2}>
        <Text color="magenta">🎓 EDUCATION</Text>
        {education.map((edu, idx) => (
          <Box key={idx} marginBottom={1} flexDirection="column">
            <Text>{edu.institution}</Text>
            <Text color="cyan">
              {edu.degree}
              {edu.cgpa
                ? ` - CGPA: ${edu.cgpa}`
                : edu.percentage
                ? ` - Percentage: ${edu.percentage}`
                : ""}
            </Text>
            <Text color="yellow">
              {edu.duration} | {edu.location}
            </Text>
          </Box>
        ))}
      </Box>
      {/* Resume Download Section */}
      <Box marginTop={2} flexDirection="column">
        <Text color="green">📄 Download Resume:</Text>
        <Text>
          {terminalLink(
            personal.resumeUrl,
            personal.resumeUrl,
            { fallback: (text, url) => colors.primary(url) }
          )}
        </Text>
        <Text color="gray">
          (Ctrl+Click or click the link to open in your browser)
        </Text>
      </Box>
      <Box marginTop={2}>
        <Text color="gray">
          Press {colors.highlight("Enter")} or {colors.highlight("B")} to go back
        </Text>
      </Box>
    </Box>
  );
}
