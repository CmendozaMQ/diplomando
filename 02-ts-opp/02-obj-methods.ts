class MyDate2 {
    year: number;
    month: number;
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

const myDate2 = new MyDate2(1995, 2, 15);
//const myDate = new MyDate();
console.log(myDate2.printdate());