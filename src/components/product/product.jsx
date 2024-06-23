import './product.css';

export const Product = ({ id, nazev, popis, cena, foto }) => {
  return (
    <div className="product">
      <h2>{nazev}</h2>
      <img src={foto} alt={`Obrázek produktu ${nazev}`} className="product-image" />
      <p className="product-price">Cena: {cena} Kč</p>
      <p className="product-description">{popis}</p>
      <a href={`detail.html?id=${id}`}><button>Detail</button></a>
    </div>
  );
};
