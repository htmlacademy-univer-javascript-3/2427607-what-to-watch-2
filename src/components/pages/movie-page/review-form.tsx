import {ChangeEvent, useState} from 'react';

export const ReviewForm = ()=> {
  const [formData, setFormData] = useState({
    rating: 0,
    'review-text': '',
  });
  const fieldHandleChange = (evt: ChangeEvent) => {
    const {name, value} = evt.target as {name: string; value: string};
    setFormData({...formData, [name]: value});
  };
  const reverseArray10 = Array.from(Array(10).keys()).reverse().map((e) => e + 1);
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
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
