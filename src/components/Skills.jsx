import React from "react";
import { Text, Box, useInput } from "ink";
import { colors, createBox } from "../utils/colors.js";

export default function Skills({ data, onBack }) {
  useInput((input, key) => {
    if (key.return || input === "b") onBack();
  });

  const skillCategories = [
    { title: "🌐 Languages", items: data.languages, color: "red" },
    { title: "⚛️ Frontend", items: data.frontend, color: "blue" },
    { title: "🔧 Backend", items: data.backend, color: "green" },
    { title: "🛠 Tools & Platforms", items: data.tools, color: "yellow" },
    { title: "📚 Currently Learning", items: data.learning, color: "magenta" }
  ];

  const createSkillBar = (skill, level = Math.floor(Math.random() * 6) + 5) => {
    const totalBars = 10;
    const filledBars = Math.min(level, totalBars);
    const emptyBars = totalBars - filledBars;
    return (
      <Box>
        <Box width={20}><Text>{skill}</Text></Box>
        <Text color="cyan">{"█".repeat(filledBars)}</Text>
        <Text color="gray">{"░".repeat(emptyBars)}</Text>
      </Box>
    );
  };

  return (
    <Box flexDirection="column">
      <Text>{createBox(colors.warning("⚡ SKILLS & EXPERTISE"), { borderColor: "yellow" })}</Text>
      <Box marginTop={1} marginBottom={2}>
        <Text color="gray">Technologies I work with and my proficiency levels</Text>
      </Box>
      {skillCategories.map((category, index) => (
        <Box key={index} marginBottom={2} flexDirection="column">
          <Text color={category.color}>{category.title}</Text>
          <Box marginTop={1} flexDirection="column">
            {category.items.slice(0, 5).map((skill, skillIndex) => (
              <Box key={skillIndex} marginLeft={2}>
                {createSkillBar(skill)}
              </Box>
            ))}
            {category.items.length > 5 && (
              <Box marginLeft={2}>
                <Text color="gray">+ {category.items.length - 5} more...</Text>
              </Box>
            )}
          </Box>
        </Box>
      ))}
      <Box marginTop={1}>
        <Text>{colors.ocean("💡 Always learning and exploring new technologies!")}</Text>
      </Box>
      <Box marginTop={2}>
        <Text color="gray">Press {colors.highlight("Enter")} or {colors.highlight("B")} to go back</Text>
      </Box>
    </Box>
  );
}
