import chalk from "chalk";
import gradient from "gradient-string";
import boxen from "boxen";

export const colors = {
  primary: chalk.cyan,
  secondary: chalk.magenta,
  success: chalk.green,
  warning: chalk.yellow,
  error: chalk.red,
  muted: chalk.gray,
  highlight: chalk.bold.white,
  rainbow: gradient("cyan", "magenta"),
  ocean: gradient("blue", "cyan"),
  fire: gradient("red", "orange"),
  instagram: gradient.instagram,
  matrix: gradient(["#00FF41", "#005520"])
};

export const createBox = (content, options = {}) =>
  boxen(content, {
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan",
    ...options
  });
