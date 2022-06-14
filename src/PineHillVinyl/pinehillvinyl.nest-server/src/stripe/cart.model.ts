interface CartItem{
    title: string;
    artist: string;
    price : number;
    quantity: number;
    _id : string;
}

export type Cart = CartItem[];