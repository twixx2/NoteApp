import { useTranslation } from "react-i18next";

const NoteListItem = ({ grid, note, removeNote, getEditedNote, }) => {

    const { t } = useTranslation();

    const { title, noteBody, date, id } = note;



    return (
        <article>
            <div className={`note__list-item-header ${grid ? 'between' : ''}`}>
                <h3>{title}</h3>
                <span>{date}</span>
            </div>
            <p>{noteBody}</p>
            <div className="btns__group">
                <button onClick={() => getEditedNote(id, true)}>

                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.06 0.590005L17.41 1.94C18.2 2.72 18.2 3.99 17.41 4.77L4.18 18H0V13.82L10.4 3.41L13.23 0.590005C14.01 -0.189995 15.28 -0.189995 16.06 0.590005ZM2 16L3.41 16.06L13.23 6.23L11.82 4.82L2 14.64V16Z" fill="#6750A4" />
                    </svg>

                    <span>{t('edit')}</span>
                </button>
                <button className="remove" onClick={() => removeNote(id)}>

                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="#CF1B1B" />
                    </svg>

                    <span>{t('del')}</span>
                </button>
            </div>
        </article>
    );
}

export default NoteListItem;