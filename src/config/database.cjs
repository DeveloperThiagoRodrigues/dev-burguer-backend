console.log('DEBUG DB_USER:', process.env.DB_USER)

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER, // Precisa ser igual ao nome no Easypanel
  password: process.env.DB_PASS, // Precisa ser igual ao nome no Easypanel
  database: process.env.DB_NAME, // Precisa ser igual ao nome no Easypanel
  port: process.env.DB_PORT || 5432,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },

