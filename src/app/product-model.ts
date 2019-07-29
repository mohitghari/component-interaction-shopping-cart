export class ProductModel {
    id?:number;
    name?:string;
    price?:number;
    is_available?:boolean;
    image_url?:string;
}

export class CartProductModel{
    id?:number;
    name?:string;
    price?:number;
    is_available?:boolean;
    image_url?:string;
    quantity?:number;
}
