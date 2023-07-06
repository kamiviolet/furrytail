import styles from "@/css/about.module.css";

export default function About() {
    return (
        <section>
        <div className={styles.about}>
            <h2>About this site</h2>
            <p>This site serves as an experimental mini project for myself to sharpen my NextJS and TypeScript.</p>
            <p>The API used in this site is provided by <span  className={styles.about_credit} data-source="https://thecatapi.com/">TheCatAPI.com</span>.</p>
        </div>
        </section>
    )
}