import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

export default function constroiCard(item) {
  const video = document.createElement('li');
  video.className = 'videos__item';
  video.innerHTML = 
    `<iframe width="100%" height="72%" src="${item.url}"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    <div class="descricao-video">
      <img src="${item.imagem}" alt="logo canal alura">
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
    </div>`;
  
  return video;
}

async function listaVideos() {
  try {
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(element => {
      lista.appendChild(constroiCard(element));
    });
  } catch {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
  }
}

listaVideos();