import { useNavigate } from 'react-router-dom';
import {Button} from './styles'


export const LoginButton = (props: any) => {
    const history = useNavigate();
    const handleClick = () => {
        history("./pagina-inicial")
    }
    return (
        <Button onClick={handleClick}> {props.children} </Button>
    )
}