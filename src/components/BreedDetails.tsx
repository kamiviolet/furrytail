import { Breed } from "@/types";
import styles from "@/css/breeddetails.module.css";
import BreedAlbum from "./BreedAlbum";

export default function BreedDetails({selectedBreed, catBg}: {selectedBreed: Breed, catBg: string}) {
    return (
        <section>
        <article className={styles.mainContent} data-catType={selectedBreed.name} >
            <div className={styles.imageContainer}>
                {
                    catBg
                    ? <BreedAlbum selectedBreed={selectedBreed} catBg={catBg} sizes="50%"/>
                    : <></>
                }
            </div>
            <div className={styles.textContainer}>
                    <h2>{selectedBreed.name}</h2>
                    <div className={styles.rows}>
                        <p>
                            {selectedBreed.description}
                        </p>
                    </div>
                    <div className={styles.splitRows}>
                        <span>Weight</span>
                        <span>{selectedBreed.weight_metric || "/"}</span>
                    </div>
                    <div className={styles.splitRows}>
                        <span>Origin</span>
                        <span>{selectedBreed.origin} ({selectedBreed.country_code})</span>
                    </div>
                    <div className={styles.splitRows}>
                        <span>Temperament</span>
                        <span>{selectedBreed.temperament}</span>
                    </div>
                    <div className={styles.splitRows}>
                        <span>Life span</span>
                        <span>{selectedBreed.life_span}</span>
                    </div>
                    <div className={styles.splitRows}>
                        <span>Alternative names</span>
                        <span>{selectedBreed.alt_names || "/"}</span>
                    </div>
            </div>
        </article>
        </section>
    )
}