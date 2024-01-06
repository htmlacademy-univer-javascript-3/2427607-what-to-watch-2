import {memo, useMemo} from 'react';
import {OverviewProps} from '../../../../types/tabs';
import {getRatingDescription} from '../../../../utils/rating-description';

const Overview = (props: OverviewProps) => {
  const ratingDescription = useMemo(() => getRatingDescription(props.rating), [props.rating]);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{props.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingDescription}</span>
          <span className="film-rating__count">{props.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{props.description}</p>

        <p className="film-card__director"><strong>Director: {props.director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {props.starring?.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
};

export const MemoizedOverview = memo(Overview);
