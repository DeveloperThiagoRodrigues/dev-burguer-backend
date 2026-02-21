import app from './app.js'
import './database/index.js'

const PORT = process.env.PORT || 3001





app.listen(3001, () => console.log("Server is running at port 3001..."));

