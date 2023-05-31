const express = require('express');
const app = express();
const format = require('date-format');
const PORT = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("HI man");
})

app.get("/api/v1/instagram", (req, res)=>{
    const instaSocial = {
      username: 'Ajaydeep123',
      folowers: 66,
      follows: 70,
      date: format.asString('dd[MM] - hh:mm:ss', new Date()),
    };
    res.status(200).json(instaSocial);
})
app.get('/api/v1/facebook', (req, res) => {
  const instaSocial = {
    username: 'AjaydeepPage',
    folowers: 88,
    follows: 10,
    date: format.asString('dd[MM] - hh:mm:ss', new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get('/api/v1/linkedin', (req, res) => {
  const instaSocial = {
    username: 'Ajay',
    folowers: 800,
    follows: 80,
    date: new Date(),
  };

  res.status(200).json(instaSocial);
});

app.get('/api/v1/:token', (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});



app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});