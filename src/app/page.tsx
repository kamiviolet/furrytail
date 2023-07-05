"use client"

import { useEffect, useState } from "react";
import { Breed } from "@/types";
import { fetchListOfBreeds, fetchCatImage } from "@/api";
import BreedDetails from "@/components/BreedDetails";
import BreedAlbum from "@/components/BreedAlbum";
import "@/app/globals.css";
import Menu from "@/components/Menu";
import About from "@/components/About";

export default function Home() {
  const [listOfBreeds, setListofBreeds] = useState<Breed[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<Breed|undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [maxIndex, setMaxIndex] = useState<number>(10);

  useEffect(() => {
    fetchListOfBreeds()
      .then((data) => setListofBreeds(data))
  }, [])

  return (
    <main>
      {
        (selectedBreed)
        ? <BreedAlbum selectedBreed={selectedBreed} />
        : <></>
      }
      {
        (selectedBreed)
        ? <BreedDetails selectedBreed={selectedBreed} />
        : <About />
      }
      <Menu
        listOfBreeds={listOfBreeds}
        maxIndex={maxIndex}
        setSelectedBreed={setSelectedBreed}
      />
    </main>
  )
}
