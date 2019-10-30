// export interface ApiInterface {
//   fetchFamilyData(): Array<Object>;
// }

// export default class Api {
//   async fetchFamilyData(): Promise<Array<Object>> {
//     // const apiResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const apiResponse = await fetch(
//       "https://beam-kata.s3.us-east-2.amazonaws.com/perks.json"
//     );
//     const perks = await apiResponse.json();
//     return perks;
//   }
// }
import { useState, useEffect } from "react";
const FAMILY_URL = "https://beam-kata.s3.us-east-2.amazonaws.com/perks.json";
export const useApi = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetch(FAMILY_URL);
      const jsonData = await result.json();
      setResponse(jsonData);
    } catch {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  debugger;
  return [response, loading, error];
};

// export const fetchFamilyData = async () => {
//   // const apiResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   const apiResponse = await fetch(
//     "https://beam-kata.s3.us-east-2.amazonaws.com/perks.json"
//   );

//   const perks = await apiResponse.json();
//   console.log(perks);
//   return perks;
// };
