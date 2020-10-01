import styles from '../styles/inputSection.module.css'

export default function InputSection( { inputText, onInputChange }) {
     return (
        <div className={styles.grid}>
                <textarea rows="20" cols="150"
                className={styles.textInputBox} name="inputText"
                autoFocus={true}
                defaultValue={inputText}
                onChange={onInputChange}
                />
                <button>Help Me Read</button>
            </div>
        );
}