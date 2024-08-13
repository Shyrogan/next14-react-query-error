"use client";
import { useDog } from "@/libs/dogs.queries";
import Login from "../ui/login";

export default function LoginFeature() {
  const { data } = useDog();
  const dog =
    data?.message ||
    "https://images.dog.ceo/breeds/terrier/norfolk/n02094114_1003.jpg";
  return <Login dog={dog} />;
}
