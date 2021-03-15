const students = [
    {
        name: 'Mark',
        marks: [100, 65, 88, 90, 50],
        attends: 0,
        average: getAvgMark,
        max: getMaxMark,
        attend: setAttend,
        info: getInfo
    },
    {
        name: 'John',
        marks: [83, 10, 65, 0, 50, 83],
        attends: 0,
        average: getAvgMark,
        max: getMaxMark,
        attend: setAttend,
        info: getInfo
    },
    {
        name: 'Joel',
        marks: [100, 65, 90, 20],
        attends: 0,
        average: getAvgMark,
        max: getMaxMark,
        attend: setAttend,
        info: getInfo
    }
];



students.forEach(e => {
    for (let i = 0; i < 3; i++){
        e.attend();
    }
});

students.forEach(e => {
    console.log(e.info());
})

function getAvgMark() {
    let result = this.marks.reduce(function(a, b) {
        return a + b;
    });
    return result/this.marks.length;
};

function getMaxMark() {
    return Math.max.apply(Math, this.marks);
}; 

function setAttend() {
    return this.attends++
};

function getInfo() {
    return `Name: ${this.name}
    Max mark: ${this.max()}
    Average: ${this.average()}
    Attends: ${this.attends}
    `;
};
