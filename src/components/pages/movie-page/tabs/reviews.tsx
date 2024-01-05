import {v4 as uuid} from 'uuid';
import {memo, useEffect} from 'react';
import dateFormat from 'dateformat';

import {Comment} from '../../../../types/film';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {fetchCommentsById} from '../../../../store/api-actions';
import {getComments} from '../../../../store/film-data/selectors';

const Reviews = (props: {id: string}) => {
  const comments: Comment[] = useAppSelector(getComments);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCommentsById(props.id));
  }, [props.id]);

  const firstRatings = comments.slice(0, comments.length / 2);
  const secondRatings = comments.slice(comments.length / 2, comments.length);

  return (
    <div className="film-card__reviews film-card__row">
      {
        [firstRatings, secondRatings].map((ratingGroup) =>
          (
            <div className="film-card__reviews-col" key={uuid()}>
              {
                ratingGroup.map((comment) => (
                  <div className="review" key={uuid()}>
                    <blockquote className="review__quote">
                      <p className="review__text">{comment.comment}</p>

                      <footer className="review__details">
                        <cite className="review__author">{comment.user}</cite>
                        <time className="review__date" dateTime="2016-12-24">
                          {dateFormat(new Date(comment.date), 'mediumDate')}
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{comment.rating}</div>
                  </div>
                ))
              }
            </div>
          ))
      }
    </div>
  );
};

export const MemoizedReviews = memo(Reviews);
