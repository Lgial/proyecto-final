let stockProductos = [
  {id: 1, nombre: "Kit-Razer", tipo: "Auriculares", cantidad: 1, desc: "Un buzo que re va con vos", precio: 12000, talle: "L", img: './images/Razer.jfif'},
  {id: 2, nombre: "Kit-Logitech", tipo: "Auriculares", cantidad: 1, desc: "Un buzo que re va con vos", precio: 9000, talle: "L", img: './images/Logitech.jfif'},
  {id: 3, nombre: "Kit-HyperX", tipo: "Auriculares", cantidad: 1, desc: "Un buzo que re va con vos", precio: 8000, talle: "M", img: './images/HyperX.jfif'},
  {id: 4, nombre: "Kit-Red dragon", tipo: "Auriculares", cantidad: 1, desc: "Un buzo que re va con vos", precio: 5000, talle: "M", img: './images/Reddragon.jfif'},
]

// Desestructuracion de array
const [a, b, c, d] = stockProductos
console.log(a)
console.log(b)
console.log(c)
console.log(d)

// SPREAD ARRAY
const kitsNuevos = [
  {id:"Kit-MSI",product: 'MSI',price: 7000 ,quantity: 1,}, 
  {id:"Kit-NOGANET",product: 'Logitech',price: 5000,quantity: 1,},
  {id:"Kit-COUGAR",product: 'HyperX',price: 10000,quantity: 1,},
];
const kits1 = [...stockProductos, ...kitsNuevos]
console.log(kits1)


// ARRAY ALMACENADO
const localSave = (product, price) => { localStorage.setItem(product, price)}
localSave("kits", JSON.stringify(stockProductos))


function registrarProducto (producto) {
  fetch("https://62e859f7249bb1284ead6466.mockapi.io/kits",{
    method: "POST",
    body: JSON.stringify(producto),
    headers: {
      "Content-type": "application/json",
    },
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
}

const productoAResgistrar = [
  {
    "product": "Razer",
    "price": 12000,
    "quantity": 1,
    "id": "1"
  },
  {
    "product": "Logitech",
    "price": 9000,
    "quantity": 1,
    "id": "2"
  },
  {
    "product": "HyperX",
    "price": 8000,
    "quantity": 1,
    "id": "3"
  },
  {
    "product": "Red-dragon",
    "price": 5000,
    "quantity": 1,
    "id": "4"
  },
  {
    "product": "Msi",
    "price": 8000,
    "quantity": 1,
    "id": "5"
  },
  {
    "product": "Noganet",
    "price": 5000,
    "quantity": 1,
    "id": "6"
  },
  {
    "product": "Cougar",
    "price": 10000,
    "quantity": 1,
    "id": "7"
  }
]
registrarProducto(productoAResgistrar)