const logo = require("asciiart-logo");

module.exports = logo({
  name: "Employee Tracker",
  font: "DOS Rebel",
  lineChars: 20,
  padding: 2,
  margin: 1,
  borderColor: "white",
  logoColor: "green",
  textColor: "white",
})
  .right("by JK")
  .render();
