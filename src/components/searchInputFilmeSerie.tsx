"use client";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "./icons";
import { useRef } from "react";

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const input = inputRef.current;
    if (!input) return;
    console.log(input.value);
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
          className="hidden lg:inline-block cursor-ponter"
          keys={["command"]}
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
