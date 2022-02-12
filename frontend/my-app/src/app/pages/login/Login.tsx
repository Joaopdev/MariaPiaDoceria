import { LoginButton } from "../../shared/components"
import { Wrapper }from "./styles"

export const Login = (props: any) => {
    
    /* const [ email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log(email, password)
    } */

    return (
        <div> 
            <Wrapper>
                <LoginButton> Home </LoginButton> 
                
            </Wrapper>    
        </div>
    )
}