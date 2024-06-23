import { render } from '@czechitas/render';
import '../global.css';
import { Product } from '../components/product/product';


  const response = await fetch('http://localhost:4000/api/data');
  const json = await response.json();
  const data = json.data;

  const HomePage = () => (
    <div className="homepage">
      <h1>Seznam produktů</h1>
      <div className="product-list">
        {data.map(product => (
          <Product
            key={product.id}
            id={product.id}
            nazev={product.nazev}
            cena={product.cena}
            popis={product.popis}
            foto={product.foto}
          />
        ))}
      </div>
    </div>
  );

  document.querySelector('#root').innerHTML = render(<HomePage />);


