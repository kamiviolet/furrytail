import { useEffect, useState, MouseEvent } from "react";
import Image from "next/image";
import { Breed } from "@/types";
import { fetchCatImage } from "@/api";
import styles from "@/css/breedcard.module.css";

export default function BreedCard({breed, setSelectedBreed}: {
    breed: Breed,
    setSelectedBreed: (selectedBreed:Breed) => void
}) {
    const [catImage, setCatImage] = useState<string>("");

    useEffect(() => {
        fetchCatImage(breed.reference_image_id)
            .then((pic) => setCatImage(pic.url));
    }, [])

    const handleSelection = (e:MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setSelectedBreed(breed);
    }

    return (
        <>
            <div
                className={styles.breedcard}
                onClick={(e)=>handleSelection(e)}
            >
                <div
                    className={styles.breedcontainer}
                >
                {
                    catImage
                    ? <>
                        <Image
                            src={catImage}
                            alt={breed.name}
                            fill={true}
                            sizes="100%"
                            style={{objectFit: "cover"}}
                        />
                    </>
                    : <></>
                }
                </div>
            </div>
        </>
    )
}