class User extends Cities{
    constructor(user){
        super(user);
        this.name = user.name;
        this.email = user.email;
    }
}

const curtis = new User({
    name: "Curtis",
    email: "tealturboser@gmail.com",
    city: "Mount Juliet",
    state: "Tennessee",
});