const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getCarList, addCarToList, editCar, deleteCar } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get('/api/car', getCarList)
app.post('/api/car', addCarToList)
app.put('/api/car', editCar)
app.delete('/api/car/:index', deleteCar)

app.listen(4000, () => console.log("Server running on 4000"));
