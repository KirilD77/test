import express, { json } from 'express'
import cors from 'cors'
const app = express()
const port = 3000

const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(json())

app.post('/', (req, res) => {
  console.log(req.body)

  res.setHeader('Content-Type', 'application/json')
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
