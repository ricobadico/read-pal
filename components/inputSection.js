import styles from './inputSection.module.css'

export default function InputSection() {
     return (
        <div className={styles.grid}>
                <textarea rows="20" cols="150"
                className={styles.textInputBox} name="inputText"
                autoFocus={true}
                defaultValue="Put some text here.!!!"/>
                <button>Help Me Read</button>
            </div>
        );
}