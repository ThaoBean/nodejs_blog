const express = require('express')
const app = express()
const port = 3030

app.get('/news', (req, res) => {
    var a = 1, b = 2;
    var c = a + b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})