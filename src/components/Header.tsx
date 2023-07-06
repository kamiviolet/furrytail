import styles from "@/css/header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1
                className={styles.title}
                data-description="powered by TheCatAPI.com"
            >
                FurryTail
            </h1>
        </header>
    )
}