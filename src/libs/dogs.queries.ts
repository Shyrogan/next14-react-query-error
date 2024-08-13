"use client";
import { useQuery } from "@tanstack/react-query";
import ky from "ky";

export interface Dog {
  message: string;
  status: string;
}

const fetchDogImage = async (): Promise<Dog> => {
  const json = await ky.get("https://dog.ceo/api/breeds/image/random").json();

  return json as Dog;
};

export const useDog = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["dog"],
    queryFn: fetchDogImage,
  });
  return { data, error, isLoading };
};
