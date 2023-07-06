import { Breed } from "@/types";
import Image from "next/image";
import styles from "@/css/page.module.css";

export default function BreedAlbum({selectedBreed, catBg, sizes}: {selectedBreed: Breed, catBg: string, sizes: string}) {

    if (catBg) {
        return (
            <Image
                src={catBg}
                fill={true}
                sizes={sizes}
                style={{objectFit: "cover"}}
                alt={selectedBreed.name}
                className={styles.background}
            />
        )
    }
}