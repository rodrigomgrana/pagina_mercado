const express = require("express");
const path = require("path");

const app = express();
app.set('puerto',process.env.PORT || 3000)



app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));


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

