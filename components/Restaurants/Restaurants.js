class Restaurants extends Cities {
    constructor(restaurant) {
        super(restaurant);
        this.name =  restaurant.name;
        this.type = restaurant.type;
        this.ethnicity = restaurant.ethnicity;
        this.details = restaurant.details;
        this.visited = restaurant.visited;
    }
    stamp () {
        // Procedure to signify if a restaurant is visited or not
    }
    delete (){
        // 
    }
}