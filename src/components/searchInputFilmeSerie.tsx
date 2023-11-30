"use client";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "./icons";
import { useRef } from "react";
import { FilmesServices } from "../app/(authenticated)/filmes/services";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = async () => {
    const input = inputRef.current;
    if (!input) return;
    console.log(input.value);
    const result = await FilmesServices.getByName(input.value);
    console.log(result);
    if (result) {
      router.push(`/filmes?name=${result.list[0].vod_id}`);
    }
  };
  return (
    <Input
      ref={inputRef}
      aria-label="Buscar filme ou série.."
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd
          onClick={handleSearch}
          className="hidden lg:inline-block cursor-pointer"
          keys={["enter"]}
        ></Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
};
