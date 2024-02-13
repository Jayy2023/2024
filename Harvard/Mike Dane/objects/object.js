
const person = {
    name: 'Jordan',
    age: 26,
    occupation: 'programmer',
    isMale: true,

    printName: function() {
        document.write("<h1>"+ this.name +"</h1>");
    }

};
person.printName();