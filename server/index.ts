const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// The code below creates an endpoint for the route /api.
// If our React app makes a GET request to that route, we respond (using res, which stands for response) with our JSON data.
// [Note: Make sure to place this above the app.listen function.]
app.get("/api", (req: any, res: any) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});