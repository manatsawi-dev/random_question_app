export interface Questions {
  id: number;
  question: string;
  ans: string;
  choices: string[];
}

export interface RowPoint {
  playerName: string;
  score: number;
}
