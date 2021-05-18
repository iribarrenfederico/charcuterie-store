export const enlacesNav = [
  ['Home', '/home'],
  ['Precios', '/precios'],
  ['Productos', '/productos', 'fiambres', 'tablas'],
]


export const listaProductos = ListaProductos();

export function ListaProductos() {
  return ([{
    "codigo": "M001",
    "familia": "fiambres",
    "variedad": "trufas",
    "nombre": "salame con trufas",
    "precio": 6300,
    "texto": "Black Truffle and Porcini soft Salami",
    "img": "/images/productos/salame-trufa.jpg",
    "mostrar": true,
    "stock": 100
  }, {
    "codigo": "M002",
    "familia": "fiambres",
    "variedad": "king",
    "nombre": "king peter ham",
    "precio": 5900,
    "texto": "King Peter Ham Trim",
    "img": "/images/productos/jamon-crudo.jpg",
    "mostrar": true,
    "stock": 180
  }, {
    "codigo": "M003",
    "familia": "fiambres",
    "variedad": "jamon",
    "nombre": "jamon crudo",
    "precio": 3800,
    "texto": "King Peter Ham",
    "img": "/images/productos/royalty-jamon.jpg",
    "mostrar": true,
    "stock": 23
  }, {
    "codigo": "M004",
    "familia": "fiambres",
    "variedad": "salame",
    "nombre": "salame",
    "precio": 2700,
    "texto": "Achari Spiced Salami",
    "img": "/images/productos/salame.jpg",
    "mostrar": true,
    "stock": 4
  }, {
    "codigo": "M005",
    "familia": "fiambres",
    "variedad": "jowl",
    "nombre": "guanciale",
    "precio": 25000,
    "texto": "Cold Smoked Jowl/Guanciale (200g)",
    "img": "/images/productos/jowl.jpg",
    "mostrar": true,
    "stock": 2
  }, {
    "codigo": "M006",
    "familia": "fiambres",
    "variedad": "loin",
    "nombre": "lomito",
    "precio": 2800,
    "texto": "Spiced Loin.",
    "img": "/images/productos/lomito.jpg",
    "mostrar": true,
    "stock": 0
  }, {
    "codigo": "H001",
    "familia": "tablas",
    "variedad": "completa",
    "nombre": "tabla completa",
    "precio": 37000,
    "texto": "Sliced mixed selection for 2-3 people",
    "img": "/images/productos/tabla1.png",
    "mostrar": true,
    "stock": 10
  }, {
    "codigo": "H002",
    "familia": "tablas",
    "variedad": "picada",
    "nombre": "picada full",
    "precio": 47000,
    "texto": "Sliced mixed selection for 2-3 people",
    "img": "/images/productos/tabla2.png",
    "mostrar": true,
    "stock": 10
  }, {
    "codigo": "H003",
    "familia": "tablas",
    "variedad": "british",
    "nombre": "tabla british",
    "precio": 15000,
    "texto": "British Charcuterie Board",
    "img": "/images/productos/tabla-fiambres.png",
    "mostrar": true,
    "stock": 10
  }
  ]
  )
}
