import { BrowserRouter, Route, Routes as RoutesSwitch, Navigate } from 'react-router-dom';
import { Login, PaginaInicial } from '../pages';

export const Routes = () => {
    return (
        <BrowserRouter>
            <RoutesSwitch>
                <Route path="/pagina-inicial" element={<PaginaInicial />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to ="pagina-inicial" />} />
            </RoutesSwitch>
        </BrowserRouter>
    )
}