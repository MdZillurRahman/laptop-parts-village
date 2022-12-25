import { useEffect, useState } from "react";

const useToolDetail = toolId =>{
    const [tools, setTools] = useState([]);

    useEffect( () =>{
        const url = `https://laptop-parts-village-server-site-production.up.railway.app/tools`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setTools(data));

    }, [toolId]);
    return [tools, setTools];
}

export default useToolDetail;