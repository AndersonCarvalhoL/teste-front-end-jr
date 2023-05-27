import { useState } from "react";
import { Modal } from "./Modal";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="vitrine">
      {products.map((product, index) => (
        <div className="produto" key={index}>
          <img src={product.photo} alt={product.productName} />
          <p>{product.productName}</p>
          <p>
            <s>R$ 20%</s>
          </p>
          <h3>R$ {product.price}</h3>
          <span>
            <p>ou 2x no cartão da loja</p>
            <h5>Frete grátis</h5>
          </span>
          <button onClick={() => openModal(product)}>Comprar</button>
        </div>
      ))}

      {selectedProduct && (
        <Modal isOpen={true} setOpen={closeModal}>
          <div className="produto">
            <img src={selectedProduct.photo} alt={selectedProduct.productName} />
            <p>{selectedProduct.productName}</p>
            <p>
              <s>R$ 20%</s>
            </p>
            <h3>R$ {selectedProduct.price}</h3>
            <span>
              <p>ou 2x no cartão da loja</p>
              <h5>Frete grátis</h5>
            </span>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductList;
