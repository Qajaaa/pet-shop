import { render } from '@czechitas/render';
import './detail.css';

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const response = await fetch(`http://localhost:4000/api/data/${productId}`);
const json = await response.json();
const data = json.data;

document.querySelector('#root').innerHTML = render(
  <div className="product-detail">
    <h1>Detail produktu</h1>
    <h2>{data.nazev}</h2>
    <p>Cena: {data.cena} Kč</p>
    <p>{data.popis}</p>
    <img src={data.foto} alt={`Obrázek produktu ${data.nazev}`} />
  </div>
);

