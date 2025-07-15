enum Status {
    Pending = "pending",
    Published = "published",
    Rejected = "rejected",
}

type ProductT = {
    name: string;
    price: number;
    images: string[];
    status: Status;
};

const product = {
    name: "Shampoo",
    price: 2.99,
    images: ["image-1.png", "image-2.png"],
    status: Status.Pending,
};

console.log(product.price);
