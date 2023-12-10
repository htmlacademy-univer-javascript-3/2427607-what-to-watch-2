import {v4 as uuid} from 'uuid';
import {ReviewProps} from '../../../../types/tabs';

export const Reviews = (props: { reviews: ReviewProps[] }) => {
  const firstRatings = props.reviews.slice(0, props.reviews.length / 2);
  const secondRatings = props.reviews.slice(props.reviews.length / 2, props.reviews.length);
  return (
    <div className="film-card__reviews film-card__row">
      {
        [firstRatings, secondRatings].map((ratingGroup) =>
          (
            <div className="film-card__reviews-col" key={uuid()}>
              {
                ratingGroup.map((review) => (
                  <div className="review" key={uuid()}>
                    <blockquote className="review__quote">
                      <p className="review__text">{review.review}</p>

                      <footer className="review__details">
                        <cite className="review__author">{review.author}</cite>
                        <time className="review__date" dateTime="2016-12-24">{review.date}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{review.rating}</div>
                  </div>
                ))
              }
            </div>
          ))
      }
    </div>
  );
};
