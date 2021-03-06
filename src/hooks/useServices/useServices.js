import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    // fetch services from services json file
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices];
}

export default useServices;