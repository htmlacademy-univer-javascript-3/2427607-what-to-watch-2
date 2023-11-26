type Detail = {
  name: string;
  value: string;
};

export type Details = Detail[];

export const DetailData: Details = [
  {
    name: 'Director',
    value: 'Wes Anderson',
  },
  {
    name: 'Starring',
    value: `Bill Murray, <br>
                    Edward Norton, <br>
                    Jude Law, <br>
                    Willem Dafoe, <br>
                    Saoirse Ronan, <br>
                    Tony Revoloru, <br>
                    Tilda Swinton, <br>
                    Tom Wilkinson, <br>
                    Owen Wilkinson, <br>
                    Adrien Brody, <br>
                    Ralph Fiennes, <br>
                    Jeff Goldblum`,
  },
  {
    name: 'Run Time',
    value: '1h 39m',
  },
  {
    name: 'Genre',
    value: 'Comedy',
  },
  {
    name: 'Released',
    value: '2014',
  }
];

