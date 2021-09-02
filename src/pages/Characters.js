import getData from "../utils/getData";
import { getHash } from '../utils/getHash';

const Character = async () => {
  const id = getHash();
  const character = await getData(id);

  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Episodios: <span>${character.episode.length}</span></h3>
        <h3>Estado: <span>${character.status}</span></h3>
        <h3>Especie: <span>${character.species}</span></h3>
        <h3>Genero: <span>${character.gender}</span></h3>
        <h3>Origen: <span>${character.origin.name}</span></h3>
        <h3>Ultima ubicación: <span>${character.location.name}</span></h3>
      </article>
    </div>
  `;

  return view;
};

export default Character;