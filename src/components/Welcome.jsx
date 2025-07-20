import React from "react";
import { Text, Box } from "ink";
import figlet from "figlet";
import { colors, createBox } from "../utils/colors.js";

export default function Welcome({ data }) {
  const asciiArt = figlet.textSync(data.name, {
    font: "ANSI Shadow",
    horizontalLayout: "fitted",
  });

  return (
    <Box flexDirection="column" alignItems="center">
      <Text color="cyan">{asciiArt}</Text>
      <Box marginTop={1}>
        <Text>{colors.rainbow(data.title)}</Text>
      </Box>
      <Box marginTop={1}>
        <Text color="gray">"{data.tagline}"</Text>
      </Box>
      <Box marginTop={2}>
        <Text color="yellow">⚡ Loading portfolio...</Text>
      </Box>
      <Box marginTop={1}>
        <Text color="gray">Press any key to continue</Text>
      </Box>
    </Box>
  );
}
