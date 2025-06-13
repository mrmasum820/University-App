"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const updateParam = useCallback(
    (key: string, value: string | number | null | undefined) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));

      if (value === null || value === undefined || value === "") {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }

      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  const removeParam = useCallback(
    (key: string) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      params.delete(key);
      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  const getParam = useCallback(
    (key: string): string | null => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  return {
    getParam,
    updateParam,
    removeParam,
    params: Object.fromEntries(searchParams),
  };
}
