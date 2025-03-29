import { useNavigate } from "react-router-dom"




function Landing(){
    const navigate = useNavigate();



    return(
        <>
            <div>
                <button onClick={() =>navigate("/Track")}>Try it Out</button>
            </div>
        </>
    )
}

export default Landing