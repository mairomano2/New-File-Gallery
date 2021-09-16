//MOSTRAR UN ARTISTA RANDOM
const url = "https://new-file-gallery.000webhostapp.com/artistas/"

const artistas = ["eva-ferran", "kahlil-mendoza" , "irina-zaidz" , "angel-albisu" , "florencia-pena" , "daniel-olcay" , "yasna-orellana" , "pablo-benitez" , "fernanda-gonsalez" , "brayan-viera" , "andres amaya" , "federico-andrade" , "melo" , "giuli-duarte" , "cata-gonzales-rossi" , "rosario-amendolara" , "pablo-funes" , "tati-alvarez" , "anahi-juarez" , "pablo-delbene" , "belu-abdala" , "ariel-fernando-moro" , "vanessa-rojas" , "eva-ferran" , "kahlil-mendoza"];

const random = Math.floor(Math.random() * artistas.length);

const recomendacion = artistas[random]; 

let link = url + recomendacion+ "/" + recomendacion + ".html";

$("#recomendacion").click(function(){
  window.location = link
})