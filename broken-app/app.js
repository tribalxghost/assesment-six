const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json())

app.post('/', async function (req, res, next) {

  try {
    let results = await Promise.all(req.body.developers.map(d => {
      return axios.get(`https://api.github.com/users/${d}`);
    }));




    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    console.log(out)


    return res.send(JSON.stringify(out));
  } catch (error) {
    console.log("THIS DIDNT WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRRRRRRRRRRRRKKKKKKKKKKKK")
    next(error);
  }
});

app.listen(3000);
