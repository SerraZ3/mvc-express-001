const indexController = {
  home: (req, res) => {
    return res.render("index", { title: "" });
  },
  products: (req, res) => {
    const produtos = [
      {
        nome: "Camisa Legal",
        preco: "R$ 29,99",
        descricao: "Camisa muito top",
      },
      {
        nome: "Short Legal",
        preco: "R$ 49,99",
        descricao: "Short muito top",
      },
      {
        nome: "Calça Estilosa",
        preco: "R$ 99,99",
        descricao: "Calça da hora",
      },
      {
        nome: "Bone Paloso",
        preco: "R$ 99,99",
        descricao: "Boné da hora",
      },
    ];
    return res.render("products", { title: "Produtos", produtos: produtos });
  },
  login: (req, res) => {
    return res.render("login", { title: "Login" });
  },
  users: (req, res) => {
    const users = [
      {
        nome: "Henrique",
        sobrenome: "Serra",
        idade: 22,
      },
      {
        nome: "Roberto Carlos",
        sobrenome: "Silva",
        idade: 89,
      },
      {
        nome: "Augusto",
        sobrenome: "Souza",
        idade: 33,
      },
    ];
    // return res.render("users", { title: "Usuários", users: [] });
    return res.render("users", { title: "Usuários", users });
  },
};

module.exports = indexController;
