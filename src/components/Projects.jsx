import React, { useState } from "react";
import { Text, Box, useInput } from "ink";
import terminalLink from "terminal-link";
import { colors, createBox } from "../utils/colors.js";

export default function Projects({ data, onBack }) {
  const [selectedProject, setSelectedProject] = useState(0);

  useInput((input, key) => {
    if (key.return || input === "b") onBack();
    else if (key.leftArrow)
      setSelectedProject((prev) => (prev > 0 ? prev - 1 : data.length - 1));
    else if (key.rightArrow)
      setSelectedProject((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    else if (
      !isNaN(input) &&
      Number(input) >= 1 &&
      Number(input) <= data.length
    )
      setSelectedProject(Number(input) - 1);
  });

  // Handle edge case if data is empty
  if (!data || data.length === 0)
    return (
      <Box flexDirection="column">
        <Text color="red">No projects found!</Text>
        <Box marginTop={1}>
          <Text color="gray">
            Press {colors.highlight("Enter")} or {colors.highlight("B")} to go
            back
          </Text>
        </Box>
      </Box>
    );

  const project = data[selectedProject];

  const statusColors = {
    Live: "green",
    Development: "yellow",
    Planned: "gray",
  };

  const statusEmoji = {
    Live: "🚀",
    Development: "⚙️",
    Planned: "📝",
  };

  return (
    <Box flexDirection="column">
      <Text>
        {createBox(colors.secondary("🚀 MY PROJECTS"), {
          borderColor: "magenta",
          borderStyle: "double",
        })}
      </Text>
      <Box marginTop={1} marginBottom={1}>
        <Text>
          Navigate: ← → arrows or number keys | Project {selectedProject + 1} of{" "}
          {data.length}
        </Text>
      </Box>
      <Box marginBottom={2}>
        {data.map((_, index) => (
          <Text
            key={index}
            color={index === selectedProject ? "cyan" : "gray"}
            bold={index === selectedProject}
          >
            {index === selectedProject ? "●" : "○"}{" "}
          </Text>
        ))}
      </Box>
      <Box flexDirection="column">
        <Box>
          <Text>
            {statusEmoji[project.status] || "📄"} {colors.fire(project.name)}
            <Text color={statusColors[project.status]} bold>
              {" ["}
              {project.status}
              {"]"}
            </Text>
          </Text>
        </Box>
        <Box marginTop={1} marginBottom={1}>
          <Text>{project.description}</Text>
        </Box>
        <Box marginBottom={1}>
          <Text color="cyan">🛠 Tech Stack:</Text>
        </Box>
        <Box marginLeft={2} marginBottom={1}>
          <Text>{project.tech?.join(" • ")}</Text>
        </Box>
        <Box flexDirection="column">
          {project.github && (
            <Text>
              📁 Code:{" "}
              {terminalLink(project.github, project.github, {
                fallback: (text, url) => colors.primary(url),
              })}
            </Text>
          )}
          {project.demo && (
            <Text>
              🌐 Demo:{" "}
              {terminalLink(project.demo, project.demo, {
                fallback: (text, url) => colors.secondary(url),
              })}
            </Text>
          )}
        </Box>
      </Box>
      <Box marginTop={2}>
        <Text color="yellow">📋 All Projects:</Text>
      </Box>
      {data.map((proj, index) => (
        <Box key={index} marginLeft={2}>
          <Text
            color={index === selectedProject ? "cyan" : "gray"}
            bold={index === selectedProject}
          >
            {index + 1}. {proj.name}
            <Text color={statusColors[proj.status]} bold>
              {" ["}
              {proj.status}
              {"]"}
            </Text>
          </Text>
        </Box>
      ))}
      <Box marginTop={2}>
        <Text color="gray">
          Use ← → to browse projects | Press {colors.highlight("Enter")} or{" "}
          {colors.highlight("B")} to go back
        </Text>
      </Box>
    </Box>
  );
}
