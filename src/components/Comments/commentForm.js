import { useState } from "react";
import "./commentsStyles.css";
const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        placeholder="Escrever comentario"
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="atualizar">
        {hasCancelButton && (
          <button
            type="button"
            className="comment-form-button comment-form-cancel-button"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        )}

        <button className="comment-form-button" disabled={isTextareaDisabled}>
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
