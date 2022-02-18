const express = require('express');
const pa11y = require ('pa11y');
const cors = require('cors');
const { allowedNodeEnvironmentFlags } = require('process');
const PORT = process.env.PORT || 5000

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.static('public'))

app.get('/api/test', async (req, res) => {
    if(!req.query.url){
        res.status(400).json({error: 'url is requires'});
    }else{
        const results = await pa11y(req.query.url)
        res.status(200).json(results);
    }
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
