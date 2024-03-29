import express, { json } from 'express'
const app = express()
const port = 3000

app.use(json())

app.post('/', (req, res) => {
  console.log(erq.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
