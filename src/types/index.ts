export interface ItemInterface {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface ProductInterface extends ItemInterface {
    price: string;
}