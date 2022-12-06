let carList = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A lifetime friend shall soon be made.", "All your hard work will soon pay off.", "Any day above ground is a good day."];
              let randomIndex = Math.floor(Math.random() * fortunes.length);
              let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    }, 
    getCarList: (req,res) => {
        res.status(200).send(carList)
    },
    addCarToList: (req,res) => {
        console.log(req.body)
        let {car} = req.body
        carList.push(car)
        res.status(200).send(carList)
    },
    deleteCar: (req,res) => {
        let { index } = req.params
        carList.splice(index,1)
        res.status(200).send(carList)
    },
    editCar: (req,res) => {
        console.log(req.body)
        let {index, car} = req.body
        carList.splice(index,1,car)
        res.status(200).send(carList)
    }
}