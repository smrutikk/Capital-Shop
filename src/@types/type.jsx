
 Cart: {
  id: string;
  quantity: number;
}
category: {
  id: number;
  name: string;
  image: string;
}
 Product: {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Object;
  images: string[]
}

export const product = {
  id: 1234125242,
  title: "loading",
  price: 0,
  description: "",
  category: {},
  images: [""],
};