var express = require("express");
var app = express();

const cardList = [
    {
        title: "Golden Retriever",
        path: "../views/images/dog1.png",
        link: "https://www.akc.org/dog-breeds/golden-retriever/",
        description: "The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America's most popular dog breeds..."
    },
    {
        title: "Border Collie",
        path: "/views/images/dog2.png",
        link: "https://www.akc.org/dog-breeds/border-collie/",
        description: "The Border Collie is an amazing dog maybe a bit too amazing for owners without the time, energy, or means to keep it occupied...."
    },
    {
        title: "Siberian Husky",
        path: "/views/images/dog3.png",
        link: "https://www.akc.org/dog-breeds/siberian-husky/",
        description: "Siberian Husky, a thickly coated, compact sled dog of medium size and great endurance, was developed to work in packs, pulling light loads at moderate speeds over vast frozen expanses...."
    },
    {
        title: "Alaskan Malamute",
        path: "/views/images/dog4.png",
        link: "https://www.akc.org/dog-breeds/alaskan-malamute/",
        description: "The Alaskan Malamute is an affectionate, loyal, and playful but dignified dog..."
    }
];

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.render('pages/index',{dogs:cardList});
});

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port);
});