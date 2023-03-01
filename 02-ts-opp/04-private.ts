// OOP abstraccion, herencia, accesibilidad, polimorfismo 

class MyDate4 {
    private year: number;
    public month: number;
    day: number;
    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    private printdate(){
        return `${this.year}/${this.month}/${this.day}`;
    }
}

const myDate4 = new MyDate4(1995, 2, 15);

