import emulsifyTheme from "gatsby-theme-emulsify/src/gatsby-plugin-theme-ui";
import merge from "lodash.merge";

export default merge({}, emulsifyTheme, {
  // Custom items here
  colors: {
    background: "#F7FAF9",
    text: "#2F495C",
    primary: "#003594",
    muted: "#DAE2E2",
    highlight: "#2F495C"
  },
  fonts: {
    body: "'PT Serif', serif",
    heading: "'Inter', sans-serif",
  },
  styles: {
    root: {
      fontSize: 5
    }
  }
})
