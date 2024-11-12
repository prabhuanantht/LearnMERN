const mongoose = require('mongoose');
const express = require('express');
const app = express();
// mongoose.connect('mongodb://localhost:27017/?directConnection=true');
mongoose.connect('mongodb://127.0.0.1:27017')
  .then(() => console.log('DB Connected Successfully'))
  .catch(err => console.error('DB Connection Error:', err));


const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Listening in Port : ${PORT}`);
})