const propiedades_venta = [
  {
    nombre: "Casa de Campo",
    src: "https://planosdecasas.shop/wp-content/uploads/2021/11/Casa-campo-12x12-B_Photo-4.webp",
    descripcion:
      "Casa en la tranquilidad del campo, ideal para una vida relajada",
    ubicacion: "Santa Cruz",
    habitaciones: 4,
    costo: 90000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa Lolol",
    src: "https://images.homify.com/c_fill,f_auto,h_500,q_auto,w_1280/v1453460846/p/photo/image/1264233/06.jpg",
    descripcion:
      "Casa en la tranquilidad del campo, ideal para una vida relajada",
    ubicacion: "Lolol",
    habitaciones: 6,
    costo: 120000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa Peralillo",
    src: "https://planosdecasas.shop/wp-content/uploads/2021/08/Planos-casa-de-campo-sencilla-de-un-piso-10-x-15.webp",
    descripcion:
      "Casa en la tranquilidad del campo, ideal para una vida relajada",
    ubicacion: "Peralillo",
    habitaciones: 2,
    costo: 70000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa Pichilemu",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/420999972.jpg?k=613f941416b6dc7635f9dd3aa88a828fdf887ba25d6a5073120f58ad03c046cf&o=&hp=1",
    descripcion:
      "Casa en la capital del surf, con vista a la playa y a 4 minutos de Punta de Lobos",
    ubicacion: "Pichilemu",
    habitaciones: 3,
    costo: 1500000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa Quisco",
    src: "https://a0.muscache.com/im/pictures/6aa4515b-f7ca-4eb0-bb19-a4f3453eb9f4.jpg",
    descripcion: "Casa con vista a la playa, perfecta para veraneo",
    ubicacion: "El Quisco",
    habitaciones: 3,
    costo: 1100000000,
    smoke: true,
    pets: true,
  },
];

/* VENTA */
const articulosVenta = document.getElementById("propiedadesVenta");
htmlv = "";

for (let propiedadv of propiedades_venta) {
  templatev = `

      <div class="card">
        <img src="${propiedadv.src}" alt="${propiedadv.nombre}">
        <h3>${propiedadv.nombre}</h3>
        <p>${propiedadv.descripcion}</p>
        <p>📍<strong>Ubicación:</strong> ${propiedadv.ubicacion}</p>
        <p><strong>Habitaciones:</strong> ${propiedadv.habitaciones}</p>
        <p><strong>Costo:</strong> $${propiedadv.costo.toLocaleString()}</p>
        <p><span>${
          propiedadv.smoke ? "🚬 Se permite fumar" : "🚭 No se permite fumar"
        }</span></p>
        <p><span>${
          propiedadv.pets
            ? "🐾 Se permiten mascotas"
            : "🚫 No se permiten mascotas"
        }</span></p>
      </div>
    
    `;
  htmlv += templatev;
}
articulosVenta.innerHTML = htmlv;
