// //MOSTRAR UN ARTISTA RANDOM
const url = "https://new-file-gallery.com.ar/artistas/"
const artistas = ["hiroko-miura-velarde", "david-de-la-obviedad", "lot", "nicole-sepliarsky", "pablo-puente", "sofia-montoya", "fiorella-balbo", "vanessa-karin", "marianela-muniz", "gaby-lobato", "tania-sagle", "cristobal-morales", "jimena-yengle", "vale-lozano", "eva-ferran", "kahlil-mendoza", "irina-zaidz", "angel-albisu", "florencia-pena", "daniel-olcay", "yasna-orellana", "pablo-benitez", "fernanda-gese", "brayan-viera", "andres-amaya", "federico-andrade", "melo", "giuli-duarte", "cata-gonsalez-rossi", "rosario-amendolara", "pablo-funes", "tati-alvarez", "anahi-juarez", "pablo-delbene", "belu-abdala", "vanessa-rojas", "ariel-fernando-moro"];
const random = Math.floor(Math.random() * artistas.length);
const recomendacion = artistas[random];
let link = url + recomendacion + "/" + recomendacion + ".html";

document.querySelector("#recomendacion").addEventListener("click", mostrarArtista);
function mostrarArtista() {
  window.location = link
};

//FILTRO DE CATEGORIAS
const categorias = document.querySelectorAll('.categorias');
const todas = document.querySelectorAll('.todas');

for (let i = 0; i < categorias.length; i++) {
  categorias[i].addEventListener('click', filterPosts.bind(this, categorias[i]));
}

function filterPosts(item) {
  changeActivePosition(item);
  for (let i = 0; i < todas.length; i++) {
    if (todas[i].classList.contains(item.attributes.id.value)) {
      todas[i].style.display = "block";
    } else {
      todas[i].style.display = "none";
    };
  };
};

function changeActivePosition(activeItem) {
  for (let i = 0; i < categorias.length; i++) {
    categorias[i].classList.remove('active');
  };
  activeItem.classList.add('active');
};