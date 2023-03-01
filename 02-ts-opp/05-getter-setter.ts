// OOP abstraccion, herencia, accesibilidad, polimorfismo 

class MyDategetter {
    private year: number;
    public month: number;
    day: number;
    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printdate(){
        return `${this.year}/${this.month}/${this.day}`;
    }

    get getYear() {
        return this.year;
    }

    set setYear(newYear: number) {
        this.year = newYear;
    }
}

const myDate5 = new MyDategetter(1995, 2, 15);
myDate5.setYear = 15;

