let hamburger = new Hamburger('big');

hamburger.addTopping('potato', 'cheese');

hamburger.getPrice();
hamburger.getCalories();

function Hamburger(size) {

    this.burgerSize = size;
        
    let price = 0;
    let calories = 0;

    this.addTopping = function() {
        Array.from(arguments).forEach(e => {
            switch(e) {
                case 'cheese':
                    price += 10;
                    calories += 20;
                break;
                case 'salad':
                    price += 20;
                    calories += 5;
                break;
                case 'potato':
                    price += 15;
                    calories += 10;
                break;
                case 'spice':
                    price += 15;
                break;
                case 'mayonnaise':
                    price += 20;
                    calories += 5;
                break;
            };
        });
    };

    switch(size) {
        case 'small':
            price += 50;
            calories += 20;
        break;
        case 'middle':
            price += 75;
            calories += 30;
        break;
        case 'big':
            price += 100;
            calories += 40;
        break;
    };
    


    this.getPrice = function() {
        console.log(price);
    };
    this.getCalories = function() {
        console.log(calories);
    };
};
