const propiedades_alquiler = [
  {
    nombre: "Departamento Central",
    src: "https://imgclasificados1.emol.com/Proyectos/imagenes/proyecto/PR_FOTO_4699_Fachada_w1200_1199_883.jpg",
    descripcion: "Como departamento en el centro de la ciudad",
    ubicacion: "Santiago centro",
    habitaciones: 2,
    costo: 400000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa Colonial",
    src: "https://images.adsttc.com/media/images/5d9f/221b/284d/d1ca/5000/0038/large_jpg/casaniemeyer_fachada.jpg?1570710039",
    descripcion: "Casa estilo colonial, amplia y ideal para familias grandes",
    ubicacion: "Providencia",
    habitaciones: 5,
    costo: 600000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa Moderna",
    src: "https://images.homify.com/v1440015283/p/photo/image/832767/JLF_6309.jpg",
    descripcion: "Casa moderna con acabado de lujo",
    ubicacion: "Vitacura",
    habitaciones: 3,
    costo: 800000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Departamento Minimalista",
    src: "https://media.admagazine.com/photos/63ce8e9361e1bc9896834a59/16:9/w_1615,h_908,c_limit/Mumbai-%20This%20450-square-foot%20Khar%20home%20is%20a%20minimalist's%20haven.jpg",
    descripcion: "Departamento ideal para parejas jovenes",
    ubicacion: "Las Condes",
    habitaciones: 2,
    costo: 300000,
    smoke: true,
    pets: false,
  },
];

/* ALQUILER */
let articulosAlquiler = document.getElementById("propiedadesAlquiler");
html = "";

for (let propiedad of propiedades_alquiler) {
  templatea = `

      <div class="card">
        <img src="${propiedad.src}" alt="${propiedad.nombre}">
        <h3>${propiedad.nombre}</h3>
        <p>${propiedad.descripcion}</p>
        <p>📍<strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
        <p><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
        <p><strong>Costo:</strong> $${propiedad.costo.toLocaleString()}</p>
        <p><span>${
          propiedad.smoke ? "🚬 Se permite fumar" : "🚭 No se permite fumar"
        }</span></p>
        <p><span>${
          propiedad.pets
            ? "🐾 Se permiten mascotas"
            : "🚫 No se permiten mascotas"
        }</span></p>
      </div>
    
    `;
  html += templatea;
}

articulosAlquiler.innerHTML = html;
