import styles from "@/css/menu.module.css"
import { Breed } from "@/types"
import BreedCard from "@/components/BreedCard";

export default function Menu({listOfBreeds, maxIndex, setSelectedBreed}: {
    listOfBreeds: Breed[],
    maxIndex: number,
    setSelectedBreed: (selectedBreed:Breed) => void
}) {
    return (
        <section className={styles.filmFrames}>
            <div className={styles.filmContainer}>
                <div className={styles.filmWrapper}>
                {
                listOfBreeds.map((breed, index) => {
                    if (index < maxIndex) {
                    return (
                        <BreedCard
                        key={breed.id}
                        breed={breed}
                        setSelectedBreed={setSelectedBreed}
                        />
                    )
                    }
                })
                }
                </div>
            </div>
        </section>
    )
}