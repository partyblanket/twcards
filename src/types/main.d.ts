type CardType = {
  tw: string;
  zh: string;
  tl: string;
  interval: number;
  due?: Date;
};

interface Deck {
  [key: string]: CardType;
};
