require("dotenv").config();
require("./config/db.config");

const Food = require("./models/Food.model");

Food.insertMany(([
    {
        name: 'Pizza',
        imageUrl: 'https://www.pizzaextra.si/wp-content/uploads/revslider/albertoshomeslider/bg-pizza.jpg',
        description: 'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo.',
        price: 12,
        options: [
            {
                firstOption: '25 cm',
                secondOption: '35 cm',
                thirdOption: '45 cm'
            } 
        ]
    },
    {
        name: 'Burger',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/450px-RedDot_Burger.jpg',
        description: 'A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chiles; condiments such as ketchup, mustard, mayonnaise, relish, or a "special sauce", often a variation of Thousand Island dressing; and are frequently placed on sesame seed buns.',
        price: 8,
        options: [
            {
                firstOption: 'extra cheese',
                secondOption: 'extra onion',
                thirdOption: 'extra pickle',
                fourthOption: 'extra mayo',
                fifthOption: 'extra ketchup'
            } 
        ]
    },
    {
        name: 'Borscht',
        imageUrl: 'https://www.tripsavvy.com/thmb/YvXrjlEzLC_mqgiC7jUU1X6IC1U=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5033415296_4d025683af_o-5b953ba946e0fb00251ecdb5.jpg',
        description: 'Borscht is a beet soup that originated in the Ukraine and was quickly adopted as a Russian specialty as well. Beets may seem like a strange base for soup to many Westerners, but there are plenty of reasons that this hearty soup is one of Russia’s most famous dishes. It is full of meat and sautéed vegetables, including cabbage, carrots, onions, and potatoes. It can be served hot or cold, and is best served with a dollop of fresh sour cream on top.',
        price: 17
        
    }
]))
  .then(() => {
    console.log("Products added");
    process.exit();
  })
  .catch((err) => {
    console.log("Problems with adding: ", err);
  });
