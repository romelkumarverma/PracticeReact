import express from 'express'
let app = express();
app.use(express.json())
let port = 3000;

let data = [{
    id:"AA1",
    name:"Rkumar"
},{
    id:"AA2",
    name:"RVerma"
},{
    id:"AA3",
    name:"Romel Hamraj"
}
]

app.get('/emp', (req, res) => {
    res.send(data);
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});