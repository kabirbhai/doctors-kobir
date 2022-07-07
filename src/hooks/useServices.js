// import { useEffect, useState } from "react";
// import { format } from "date-fns";

// const useServices = () => {

//   const formattedDate = format(date, "PP");
//   const [services, setServices] = useState([]);
//   useEffect(() => {
//     const url = `http://localhost:5000/available?date=${formattedDate}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);
//   return [services, setServices];
// };

// export default useServices;
