import express, { json } from 'express'
const app = express()
const port = 3000

app.use(json())

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(JSON.stringify(req.body))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
