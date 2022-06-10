const indexController = {
  home: (req, res) => {
    return res.render("index", { title: "Home" });
  },
  products: (req, res) => {
    return res.render("products", { title: "Produtos" });
  },
  login: (req, res) => {
    return res.render("login", { title: "Login" });
  },
};

module.exports = indexController;
