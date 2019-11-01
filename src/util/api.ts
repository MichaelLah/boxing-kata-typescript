import { MemberPreferences } from "../components/FamilyPreferences";
import { useState, useEffect } from "react";
const FAMILY_URL = "https://beam-kata.s3.us-east-2.amazonaws.com/perks.json";
export const useApi = (): [MemberPreferences[], boolean, boolean] => {
  const thisCantBeRightWhyDoIHaveToMakeAnEmptyArrayLikeThisThanksTypeScript: Array<
    MemberPreferences
  > = [];
  const [response, setResponse] = useState(
    thisCantBeRightWhyDoIHaveToMakeAnEmptyArrayLikeThisThanksTypeScript
  );
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    // setTimeout(() => fetchData(), 100);
    fetchData();
  }, []);
  return [response, loading, error];
};
