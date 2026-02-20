import app from './app.js'
import './database/index.js'

const port = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

