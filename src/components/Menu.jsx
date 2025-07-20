import React, { useState } from "react";
import { Text, Box, useInput } from "ink";
import { colors, createBox } from "../utils/colors.js";

const menuItems = [
  {
    key: "1",
    value: "about",
    label: "👤 About Me",
    description: "Learn about my background and interests",
  },
  {
    key: "2",
    value: "projects",
    label: "🚀 Projects",
    description: "Explore my latest work and side projects",
  },
  {
    key: "3",
    value: "skills",
    label: "⚡ Skills & Tech Stack",
    description: "Technologies I work with",
  },
  {
    key: "4",
    value: "contact",
    label: "📫 Contact & Social",
    description: "Get in touch or find me online",
  },
];

export default function Menu({ onSelect }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useInput((input, key) => {
    if (key.upArrow)
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : menuItems.length - 1));
    else if (key.downArrow)
      setSelectedIndex((prev) => (prev < menuItems.length - 1 ? prev + 1 : 0));
    else if (key.return) onSelect(menuItems[selectedIndex].value);
    else if (input >= "1" && input <= "4")
      onSelect(menuItems[parseInt(input) - 1].value);
  });

  return (
    <Box flexDirection="column">
      <Text>
        {createBox(colors.ocean("🌟 INTERACTIVE PORTFOLIO 🌟"), {
          textAlignment: "center",
          width: 60,
        })}
      </Text>
      <Box marginTop={1} marginBottom={1}>
        <Text color="gray">
          Navigate with ↑↓ arrow keys or number keys, press Enter to select
        </Text>
      </Box>
      {menuItems.map((item, index) => (
        <Box key={item.key} marginBottom={1}>
          <Box width={50}>
            <Text
              backgroundColor={selectedIndex === index ? "cyan" : undefined}
              color={selectedIndex === index ? "black" : "white"}
            >
              {selectedIndex === index ? "▶ " : "  "}
              {colors.highlight(item.key)}. {item.label}
            </Text>
          </Box>
          <Box marginLeft={2}>
            <Text color="gray">{item.description}</Text>
          </Box>
        </Box>
      ))}
      <Box marginTop={2}>
        <Text>{colors.fire("💡 Pro tip: This portfolio is open source!")}</Text>
      </Box>
    </Box>
  );
}
