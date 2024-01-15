// Write a “person” class to hold all the details

class Person {
    constructor(firstName, lastname, mailID, age, gender,education,phoneNumber,address) {
        this.firstName = firstName;
        this.lastname = lastname;
        this.mailID = mailID;
        this.age = age;
        this.gender = gender;
        this.education = education;
        this.phoneNumber= phoneNumber;
        this.address = address;
    }
    getDetails() {
        console.log("firstName:", this.firstName);
        console.log("LastName:", this.lastname);
        console.log("Mail ID :", this.mailID);
        console.log("Age : ", this.age);
        console.log("Gender : ", this.gender);
        console.log("Education : ", this.education);
        console.log("Phone Number : ",this.phoneNumber);
        console.log("Address : ", this.address);
    }
}
let person1 = new Person("Rajkumar", "A", "rajkumaranbu192@gmail.com", 22, "male","B.E(CSE)","9791507082", "Idumban kovil street,Muthalipalayam,Coimbatore,Tamilnadu,India.");

person1.getDetails()

/*Output: 

firstName: Rajkumar
LastName: A
Mail ID : rajkumaranbu192@gmail.com
Age :  22
Gender :  male
Education :  B.E(CSE)
Phone Number :  9791507082
Address :  Idumban kovil street,Muthalipalayam,Coimbatore,Tamilnadu,India.

*/
