const result = calc(4);
result.add(9);
result.sub(3);
result.div(2);
result.mult(6);
result.getResult();



function calc(arg) {
    return {
        add: function(addendum) {
            arg += addendum;
        },

        sub: function(subtrahend) {
            arg -= subtrahend;
        },

        div: function(divider) {
            arg /= divider;
        }, 

        mult: function(multiplier) {
            arg *= multiplier;
        },

        getResult: function() {
            return alert(arg);
        }
    };
};
