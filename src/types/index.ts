export interface ItemInterface {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface ProductInterface extends ItemInterface {
    price: number;
}

export interface CartItemInterface extends ProductInterface {
    amount: number;
}