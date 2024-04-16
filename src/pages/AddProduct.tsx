import { useState } from 'React';
import './AddProduct.scss';

function AddProduct() {

  const [article, setArticle()] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // function axios
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  return (
    <main>
      <h1>Ceci est la page Add Product.</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input onChange={handleInputChange} value={article.name} type="text" name="name" />

        <label htmlFor="category">Category :</label>
        <input onChange={handleInputChange} value={article.category} type="text" name="category" id="category" />

        <label htmlFor="brand">Brand :</label>
        <input onChange={handleInputChange} value={article.brand} type="text" name="brand" id="brand" />

        <label htmlFor="price">Price :</label>
        <input onChange={handleInputChange} value={article.price} type="number" name="price" id="price" />

        <label htmlFor="content">Content :</label>
        <textarea onChange={handleInputChange} value={article.content} name="content" id="content" cols={30} rows={10}></textarea>

        <label htmlFor="stock">Stock :</label>
        <input onChange={handleInputChange} value={article.stock} type="number" name="stock" id="stock" />

        <label htmlFor="online">Online :</label>
        <input onChange={handleInputChange} value={article.online} type="checkbox" name="online" id="online" />

        <label htmlFor="picture">Picture :</label>
        <input onChange={handleInputChange} value={article.picture} type="url" name="picture" id="picture" />
        
        <button>Envoyer</button>

      </form>
    </main>
  );
}

export default AddProduct;