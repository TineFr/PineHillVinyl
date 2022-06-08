import { useEffect, useState } from "react";

const useAxios = (config) => {
  const {
    axiosInstance,
    method,
    url,
    requestConfig = {}
  } = config;

    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isBusy, setIsBusy] = useState(false);

    useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
        try {
            const response = await axiosInstance[method.toLowerCase()](url,
              {...requestConfig,
              signal: controller.signal});
            setData(response.data);
        } catch (error : any) {
          setError(error.message);
        } finally {
          setLoaded(true);
        }
      };
    }, []);
    return { data, error, isBusy };
  };



//   useEffect( () =>{
//     setIsBusy(true);
//     axios.get<Product[]>("http://localhost:5000/api/v1/products")

//     .then(res => {
//       setProducts(res.data);
//       setIsBusy(false);
//     })
//     .catch((err) => {

//       setIsBusy(false);
//     });;
//   }, [])