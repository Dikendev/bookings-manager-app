export interface Bookable {
  id: number;
  group: string;
  title: string;
  notes: string;
  sessions: number[];
  days: number[];
}

export type BookKeys = keyof Omit<Bookable, "sessions" | "days">;

export type BookableGroup = Bookable[];
