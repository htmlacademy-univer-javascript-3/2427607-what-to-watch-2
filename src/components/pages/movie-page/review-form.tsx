import {ChangeEvent, FormEvent, useState} from 'react';
import {addComment} from '../../../store/api-actions';
import {useAppDispatch} from '../../../hooks';

export const ReviewForm = ()=> {
  const [formData, setFormData] = useState({
    rating: '0',
    'review-text': '',
  });
  const dispatch = useAppDispatch();
  const fieldHandleChange = (evt: ChangeEvent) => {
    const {name, value} = evt.target as HTMLInputElement;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.rating || formData['review-text']) {
      dispatch(addComment({
        rating: parseInt(formData.rating, 10),
        comment: formData['review-text'],
      }));
    }
  };

  const reverseArray10 = Array.from(Array(10).keys()).reverse().map((e) => e + 1);
  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {reverseArray10.map((e) => (
              <>
                <input
                  className="rating__input"
                  id={`star-${e}`}
                  type="radio"
                  name="rating"
                  value={e}
                  key={e}
                  onChange={fieldHandleChange}
                />
                <label className="rating__label" htmlFor={`star-${e}`}>Rating {e}</label>
              </>))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text"
            placeholder="Review text" onChange={fieldHandleChange} value={formData['review-text']}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};
