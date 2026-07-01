// 1. Address Interface
interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

// 2. Product Interface
interface Product {
  readonly id: string;
  name: string;
  price: number;
  category: string;
}

// 3. OrderItem Interface
interface OrderItem {
  product: Product;
  quantity: number;
}

// 4. Order Interface
interface Order {
  readonly id: string;
  customer: string;
  items: OrderItem[];
  shippingAddress: Address;
  status: "pending" | "shipped" | "delivered";
  createdAt: Date;
}

// Function to calculate total order amount
function calculateTotal(order: Order): number {
  let total = 0;

  for (const item of order.items) {
    total += item.product.price * item.quantity;
  }

  return total;
}


// Sample Products
const laptop: Product = {
  id: "P001",
  name: "Laptop",
  price: 50000,
  category: "Electronics"
};

const mouse: Product = {
  id: "P002",
  name: "Wireless Mouse",
  price: 1000,
  category: "Accessories"
};


// Sample Order
const order: Order = {
  id: "ORD001",
  customer: "Alice",
  items: [
    {
      product: laptop,
      quantity: 1
    },
    {
      product: mouse,
      quantity: 2
    }
  ],
  shippingAddress: {
    street: "123 Main Road",
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India",
    postalCode: "641001"
  },
  status: "pending",
  createdAt: new Date()
};

console.log("Order Total:", calculateTotal(order));

/*
Recursive Type Example

interface TreeNode {
  value: string;
  children: TreeNode[];
}
A recursive type is a type that refers to itself.In this example, each TreeNode can contain an array of other TreeNode objects, allowing us to represent hierarchical structures such as folders, menus, or trees.
*/