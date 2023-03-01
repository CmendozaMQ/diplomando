// OOP abstraccion, herencia, accesibilidad, polimorfismo 

class MyDate3 {
    public year: number;
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
}

const myDate3 = new MyDate2(1995, 2, 15);

