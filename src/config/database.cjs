module.exports = {
  dialect: 'postgres',
  // Aqui está a mudança principal: ele tenta ler a variável do Easypanel, 
  // e se não existir, usa 'localhost' como padrão para o seu PC
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'devburger',
  port: process.env.DB_PORT || 5432,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
