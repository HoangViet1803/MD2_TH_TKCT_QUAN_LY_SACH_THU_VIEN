export class Book {
    public id:string;
    public name:string;

    constructor (id:string, name:string) {
        this.id = id;
        this.name = name
    }
    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
}