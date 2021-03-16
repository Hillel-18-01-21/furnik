let hamburger = new Hamburger('big', 'cheese', 'salad');
console.log(hamburger.getPrice);

function Hamburger(size, toping) {

    this.addToping = toping;
    this.burgerSize = size;
    
    const price = [];
    const calories = [];

    switch(size) {
        case 'small':
            price.push(50);
            calories.push(20);
        break;
        case 'middle':
            price.push(75);
            calories.push(30);
        break;
        case 'big':
            price.push(100);
            calories.push(40);
        break;
    };

    Array.from(arguments).forEach(e => {
        switch(toping) {
            case 'cheese':
                price.push(10);
                calories.push(20);
            break;
            case 'salad':
                price.push(20);
                calories.push(5);
            break;
            case 'potato':
                price.push(15);
                calories.push(10);
            break;
            case 'spice':
                price.push(15);
            break;
            case 'mayonnaise':
                price.push(20);
                calories.push(5);
            break;
        };
    });


    this.getPrice = price.reduce(function(a, b) {
        return a + b;
    });
    this.getCalories = calories.reduce(function(a, b) {
        return a + b;
    });
};

