export class Task {
    static esPar(input: number): boolean {
        const validation = input % 2 == 0;
        console.log(`resultado ====> ${validation}`);
        
        return validation;
    }
}