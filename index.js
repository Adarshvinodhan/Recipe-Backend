const express = require('express');
require('dotenv/config');
const connectDb = require('./database/dbconfig.js')
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
app.use(express.json());
const PORT =  process.env.PORT;

connectDb();

app.use('/api',recipeRoutes)

app.listen(PORT || 3000,console.log(`SERVER UP @${PORT}`));


