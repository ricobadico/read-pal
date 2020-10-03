import styles from '../styles/inputSection.module.css'
import Link from 'next/link'

export default function InputSection( { inputText, onInputChange, onInputSubmit }) {

    const selectText = (event) => {
        let textElement = event.currentTarget;
        textElement.select();
    }

     return (
        <div className={styles.grid}>
                <textarea rows="20" cols="150"
                className={styles.textInputBox} name="inputText"
                autoFocus={false}
                onClick={(event => selectText(event))}
                defaultValue={inputText}
                onChange={onInputChange}
                id="inputTextArea"
                />
                <Link 
                href={{
                    pathname: '/output',
                    query: {test: {onInputSubmit}}
                }}>
                    <button className="submitButton">Help Me Read</button>
                </Link>
            </div>
        );
}