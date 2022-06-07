// CRUD
// C reate - Criar
// R ead - Ler
// U pdate - Atualizar
// D elete - Deletar
const userController = {
  // Read - Ler
  // Ler/Listar todos os usuários e pode filtrar eles
  index: (req, res) => {
    const users = [
      {
        id: 1,
        nome: "Henrique",
      },
      {
        id: 2,
        nome: "Paula",
      },
    ];
    res.json({ data: users });
  },
  // Read - Ler
  // Ler apenas um usuário
  show: (req, res) => {
    const { id } = req.params;
    res.send(`Show ${id}`);
  },
  // Create - Criar
  // Criar um usuário
  store: (req, res) => {
    res.send("Store");
  },
  // Update - Atualizar
  // Atualizar um usuário
  update: (req, res) => {
    const { id } = req.params;
    res.send(`Update ${id}`);
  },
  // Delete - Deletar
  // Deletar um usuário
  delete: (req, res) => {
    const { id } = req.params;
    res.send(`Delete ${id}`);
  },
  save: (req, res) => {
    const { id, name } = req.params;
    if (name) {
      res.send(`Save ${id} e ${name}`);
    } else {
      res.send(`Save ${id}`);
    }
  },
};
module.exports = userController;
