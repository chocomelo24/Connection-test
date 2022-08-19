const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally
const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 6969); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors
app.get("/", (req, res) => {
  res.json({ msg: "Hey There Stranger" });
});

const staticPath = path.join(__dirname + "public");
// connecting my index.html
app.use(express.static(staticPath));

const userRoute = require("./routes/userRoute");
app.use("/users", userRoute);

const productsRoute = require("./routes/productRoute");
app.use("/products", productsRoute);

app.use(express.static("public"));
app.get("products", function (req, res) {
  res.sendFile(_dirname + "/" + "product.html");
});

app.listen(app.get("port"), () => {
  console.log(`https://localhost:${app.get("port")}`);
  console.log("Press Ctrl+C to exit server");
});



