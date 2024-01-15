// write a class to calculate the Uber price.

// class UberPrice {
//     constructor(surgeMultiplier) {
//         this.surgeMultiplier = surgeMultiplier;
//     }
//     getPG() {
//         return this.surgeMultiplier = surgeMultiplier || 1;
//     }
// }

class UberPrice {
    booking_fee = 30;
    rupeesPerKm = 17;
    rupeesPerMinute = 2;
    minimunCharge = 30;
    

    constructor(distanceTravelled, duration,surgeMultiplier) {
        this.distanceTravelled = distanceTravelled;
        this.duration = duration;
        this.surgeMultiplier = surgeMultiplier || 1;
    }

    getTravelPrice() {
        let finalfare;

        if (this.distanceTravelled > 5) {
            finalfare = ((this.distanceTravelled * this.rupeesPerKm) + (this.duration * this.rupeesPerMinute));
        }
        else {
            finalfare =  (this.minimunCharge + (this.distanceTravelled * this.rupeesPerKm) + (this.duration * this.rupeesPerMinute));
        }

        return ((this.booking_fee + finalfare) * this.surgeMultiplier);

    }
}

let customer1 = new UberPrice(5, 25);

console.log("The total price for the ride : ",customer1.getTravelPrice(),"Rupees");

// Output : The total price for the ride :  195 Rupees
