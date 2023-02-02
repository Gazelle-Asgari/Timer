import Box from "./Box";
import {useParams} from 'react-router-dom'

function SavedTimer(){
    const {time} = useParams();

    return(
        <Box defaultValue={time} />
    )
}

export default SavedTimer;