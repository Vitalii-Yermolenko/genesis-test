import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
// import { ErrorPageWrapper } from "../style/StyleComponents";

export function ErrorPage(){
    const navigate = useNavigate();
    return(
        <div>
            <p>Not found</p>
            <p>Please return to main page</p>
            <Button
            className="back-button"
            text='Back to main page'
            backgroundColor='green'
            handleClick={() => {
                navigate('/')
            }}
            />
        </div>
    )
}
