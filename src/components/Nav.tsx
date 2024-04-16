import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Accueil</Link></li>
            <li><Link to='/add-product'>Ajouter un produit</Link></li>
        </ul>
    </nav>
  )
}

export default Nav;