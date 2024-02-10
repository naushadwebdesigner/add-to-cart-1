export class Product {    
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    quantity : number;
    

    constructor(id: number, title: string, price: number, description: string, category: string, image: string, quantity:number) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.quantity = quantity
    }
}