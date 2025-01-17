/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "rgba(255, 255, 255, 1)",
    cardBackground: "#ffffff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    border: "#E0E0E0",
    shadow: "rgba(0, 0, 0, 1)",
    primary: "#0cb3eb",
    placeholder: "#9BA1A6",
    error: "#ed6464",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    cardBackground: "#3a4042",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    border: "#505050",
    shadow: "#ffffff",
    primary: "#095a75",
    placeholder: "#9BA1A6",
    error: "#ed6464",
  },
};
