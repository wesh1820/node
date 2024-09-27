const Person = function (firstname) {
    this.firstname = firstname;
    
    this.sayHello = () => {
        console.log(`Hello ${this.firstname}`);
    };
};

module.exports = Person;

