// song data
const songList = [
    {
        title: "Acoustic Breeze",
        file: "acousticbreeze.mp3",
        cover: "1.jpeg"
    },
    {
        title: "A New Beginning",
        file: "anewbeginning.mp3",
        cover: "2.jpeg"
    },
    {
        title: "Creative Minds",
        file: "creativeminds.mp3",
        cover: "3.jepg"
    },
]

// Capturar elemenos del DOM para trabajar con JS
const songs = document.getElementById("songs");
const audio = document.getElementById("audio");

// Cargar canciones y mostrar listado

function loadSongs(){
    songList.forEach((song, index) => {
        
        // Crear li
        const li = document.createElement("li")
        // Crear a
        const link = document.createElement("a");
        // Hidratar a
        link.textContent = song.title
        link.href = "#"
        // escuchar clicks
        link.addEventListener("click", ()=> loadSong(index))
        // Añadir a li
        li.appendChild(link)
        // Añadir li a ul
        songs.appendChild(li)
    })
}

// Cargar cancion seleccionada
function loadSong(songIndex){
    audio.src = "./audio/" + songList[songIndex].file
    audio.play()
}


// Go!
loadSongs();
