const express = require("express");
const path = require("path");

const app = express();
//const PORT = process.env.PORT || 3040;

app.use(express.static("public"));

app.get("/", (req, res) => {
  let indexPath = path.join(__dirname, "./views/home.html");
  res.sendFile(indexPath);
});
app.get("/register", (req, res) => {
  let indexPath = path.join(__dirname, "./views/register.html");
  res.sendFile(indexPath);
});
app.get("/login", (req, res) => {
  let indexPath = path.join(__dirname, "./views/login.html");
  res.sendFile(indexPath);
});

 app.listen(3040, () => console.log("ingresó correctamente")); 
//app.listen(PORT, () => console.log("running on port 3040"));
