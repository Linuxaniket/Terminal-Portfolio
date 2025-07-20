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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const portfolioData = JSON.parse(
  readFileSync(join(__dirname, "data", "portfolio.json"), "utf8")
);

const SCREENS = {
  WELCOME: "welcome",
  MENU: "menu",
  ABOUT: "about",
  PROJECTS: "projects",
  SKILLS: "skills",
  CONTACT: "contact",
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.WELCOME);
  const [showWelcome, setShowWelcome] = useState(true);
  const { exit } = useApp();

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setCurrentScreen(SCREENS.MENU);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  useInput((input, key) => {
    if (key.ctrl && input === "c") exit();
    if (input === "q" && currentScreen !== SCREENS.WELCOME) exit();

    if (
      (key.escape || input === "m") &&
      currentScreen !== SCREENS.MENU &&
      currentScreen !== SCREENS.WELCOME
    ) {
      setCurrentScreen(SCREENS.MENU);
    }
    if (showWelcome) {
      setShowWelcome(false);
      setCurrentScreen(SCREENS.MENU);
    }
  });

  const handleMenuSelect = (selection) => setCurrentScreen(selection);

  const renderScreen = () => {
    switch (currentScreen) {
      case SCREENS.WELCOME:
        return <Welcome data={portfolioData.personal} />;
      case SCREENS.MENU:
        return <Menu onSelect={handleMenuSelect} />;
      case SCREENS.ABOUT:
        return (
          <About
            data={portfolioData}
            onBack={() => setCurrentScreen(SCREENS.MENU)}
          />
        );
      case SCREENS.PROJECTS:
        return (
          <Projects
            data={portfolioData.projects}
            onBack={() => setCurrentScreen(SCREENS.MENU)}
          />
        );
      case SCREENS.SKILLS:
        return (
          <Skills
            data={portfolioData.skills}
            onBack={() => setCurrentScreen(SCREENS.MENU)}
          />
        );
      case SCREENS.CONTACT:
        return (
          <Contact
            data={portfolioData.personal}
            onBack={() => setCurrentScreen(SCREENS.MENU)}
          />
        );
      default:
        return <Menu onSelect={handleMenuSelect} />;
    }
  };

  return (
    <Box flexDirection="column">
      {renderScreen()}
      {currentScreen !== SCREENS.WELCOME && (
        <Box marginTop={1}>
          <Text color="gray">
            Press {colors.highlight("ESC")} or {colors.highlight("M")} for menu
            • {colors.highlight("Q")} to quit • {colors.highlight("Ctrl+C")} to
            exit
          </Text>
        </Box>
      )}
    </Box>
  );
}
