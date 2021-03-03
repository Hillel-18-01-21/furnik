const result = calc(4);
result.add(9);
result.diff(3);
result.div(2);
result.mult(6);
result.getResult();



function calc(arg) {
    return {
        add: function(sum) {
            return arg += sum;
        },

        diff: function(diff) {
            return arg -= diff;
        },

        div: function(div) {
            return arg /= div;
        }, 

        mult: function(mult) {
            return arg *= mult;
        },

        getResult: function() {
            alert(arg)
        }
    };
};
