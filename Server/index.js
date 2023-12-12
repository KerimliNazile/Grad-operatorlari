import express from 'express'
const app = express()
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
let  arr = [
{
  id:1,
  name:"Nazile",
  surname:"Karimli"
},
{
  id:2,
  name:"Naz",
  surname:"Karimli"
},
{
  id:3,
  name:"Nazi",
  surname:"Karim"
}
]



app.get('/', (req, res) => {
  res.send(arr)
})

app.get('/:id', (req, res) => {
  const { id } = req.params
  const item = arr.find(x => x.id === +id)
  res.send(item)
})


app.post('/user', (req, res) => {
  res.send('Got a POST request')
})
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})
app.delete('/users/:id', (req, res) => {
  const { id } = req.params
  const item = arr.find(x => x.id == id)
  const filteredUsers=arr.filter((x)=>x.id !=id)
  if(item){
    res.send(filteredUsers);
  }
})