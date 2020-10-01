import styles from './outputSection.module.css'
import ConvertedWord from './convertedWord'

export default function OutputSection() {

    const textArray = ["hello", "you", "seadog"];

    return (
        <div className={styles.grid}>
            {textArray.map((element) => (
                <ConvertedWord className={styles.convertedText}
                wordToConvert={element} />
            ))}
        </div>
        );
}