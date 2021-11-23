import { useCallback, useEffect, useState } from "react";
import { Status } from "../types";

export const useAsync = function <T = unknown>(
  asyncFunction: (args?: unknown) => Promise<T>,
  immediate = true
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<(Error & { status: number }) | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const execute = useCallback(() => {
    setStatus("pending");
    setData(null);
    setError(null);
    return asyncFunction()
      .then((response) => {
        setData(response);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { execute, status, data, error };
};
