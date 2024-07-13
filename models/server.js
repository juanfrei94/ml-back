const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    // Private methods
    const routes = () => {
      const paths = {
        product: '/api/items'
      };
      this.app.use(paths.product, require("../routes/items"));
    };

    const middlewares = () => {
      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(express.static("public"));
    };

    // Class props
    this.app = express();
    this.port = process.env.PORT || "8080";

    // Init private methods
    routes();
    middlewares();
  }

  // Public methods
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Backend corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
