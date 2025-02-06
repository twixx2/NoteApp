import './modal.css';
import { useTranslation } from "react-i18next";



const ControlModal = ({
  showModal,
  setShowModal,
  editMode,
  setTitle,
  title,
  setNoteBody,
  noteBody,
  addNote,
  editNote
}) => {

  const { t } = useTranslation();

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className={`modal__view ${showModal ? 'show' : ''}`}>
        <h3>
          {editMode ? t('changeNote') : t('addNote')}
        </h3>
        
        <label htmlFor="">
          <span>{t('title')}</span>
          <input type="text" placeholder={t('title')} value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label htmlFor="">
          <span>{t('note')}</span>
          <input type="text" placeholder={t('note')} value={noteBody} onChange={(e) => setNoteBody(e.target.value)} />
        </label>

        <div className="modal__btns">

          <button onClick={() => setShowModal(false)}>
            <span>{t('cancel')}</span>
          </button>

          {
            editMode ?
              <button onClick={editNote}>
                <span>
                  {t('change')}
                </span>
              </button>
              :
              <button onClick={() => addNote()}>
                <span>
                  {t('add')}
                </span>
              </button>
          }

        </div>

      </div>
    </div>
  );
}
export default ControlModal;