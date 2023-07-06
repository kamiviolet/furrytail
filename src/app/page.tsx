"use client"

import { useEffect, useState } from "react";
import { Breed } from "@/types";
import { fetchCatImage, fetchListOfBreeds } from "@/api";
import BreedDetails from "@/components/BreedDetails";
import BreedAlbum from "@/components/BreedAlbum";
import Menu from "@/components/Menu";
import About from "@/components/About";
import "@/app/globals.css";
import Header from "@/components/Header";

export default function Home() {
  const [listOfBreeds, setListofBreeds] = useState<Breed[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<Breed|undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [maxIndex, setMaxIndex] = useState<number>(10);
  const [catBg, setCatBg] = useState<string>("");

  useEffect(() => {
      fetchCatImage(selectedBreed?.reference_image_id)
          .then((pic) => setCatBg(pic?.url));
  }, [selectedBreed])


  useEffect(() => {
    fetchListOfBreeds()
      .then((data) => setListofBreeds(data))
  }, [])

  return (
    <>
    <Header />
    <main>
      {
        (selectedBreed && catBg)
        ? <BreedAlbum selectedBreed={selectedBreed} catBg={catBg} sizes="100vw"/>
        : <></>
      }
      {
        (selectedBreed)
        ? <BreedDetails selectedBreed={selectedBreed} catBg={catBg}/>
        : <About />
      }
      <Menu
        listOfBreeds={listOfBreeds}
        maxIndex={maxIndex}
        setSelectedBreed={setSelectedBreed}
      />
    </main>
    </>
  )
}
