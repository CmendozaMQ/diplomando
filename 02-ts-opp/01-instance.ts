const date =  new Date();
const date2 =  new Date(2002, 1, 12);

class MyDate {
    year: number;
    month: number;
    day: number;
    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

const myDate = new MyDate(1995, 2, 15);
//const myDate = new MyDate();
console.log(myDate);


const arrwFunc = () => {};