import { Link } from 'react-router-dom';

export const PaginaInicial = () => {
    return (
        <div>
            <p>Página inicial</p>
            <Link to="/login"> Login </Link>
        </div>
    )
}