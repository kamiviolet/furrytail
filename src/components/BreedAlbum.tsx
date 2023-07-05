import { Breed } from "@/types";
import styles from "@/css/page.module.css";
import { useEffect, useState } from "react";
import { fetchCatImage } from "@/api";

export default function BreedAlbum({selectedBreed}: {selectedBreed: Breed}) {
    const [catBg, setCatBg] = useState<string>("");

    useEffect(() => {
        fetchCatImage(selectedBreed?.reference_image_id)
            .then((pic) => setCatBg(pic.url));
    }, [selectedBreed])
  

    return (
        <img
            src={catBg}
            alt={selectedBreed.name}
            className={styles.background}
        />
    )
}