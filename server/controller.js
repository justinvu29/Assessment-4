helpList = ['sleep', 'reading', 'eating']

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A lifetime friend shall soon be made."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getHelpList: (req,res) => {
        res.status(200).send(helpList)
    },
    addHelpToList: (req,res) => {
        console.log(req.body)
        let {help} = req.body
        helpList.push(help)
        res.status(200).send(helpList)
    }
}