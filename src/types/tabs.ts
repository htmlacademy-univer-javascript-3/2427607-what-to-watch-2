export type DetailsProps = {
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
};

export type OverviewProps = {
  description: string;
  director: string;
  starring: string[];
  rating: number;
  ratingDescription: 'Bad' | 'Normal' | 'Good' | 'Very good' | 'Awesome';
  scoresCount: number;
};

export type ReviewProps = {
  author: string;
  date: string;
  review: string;
  rating: number;
};

export type TabProps = {
  overview: OverviewProps;
  details: DetailsProps;
  reviews: ReviewProps[];
};
