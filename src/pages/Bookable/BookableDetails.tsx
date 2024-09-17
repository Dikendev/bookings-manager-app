import React from "react";
import { Bookable } from "../../@types/bookable.interface";

interface BookableDetailsProps {
  books: Bookable;
  hasDetails: boolean;
  setHasDetails: (e: boolean) => void;
}

export const BookableDetails: React.FC<BookableDetailsProps> = (
  props: BookableDetailsProps
) => {
  return (
    <div>
      <div>
        <h2>Unchanged UI for list of bookables</h2>
      </div>

      {props.books && (
        <div>
          <div>
            <h2>{props.books.title}</h2>
            <span>
              <label>
                <input
                  type="checkbox"
                  checked={props.hasDetails}
                  onChange={() => props.setHasDetails(!props.hasDetails)}
                />
                Show Details
              </label>
            </span>
          </div>
        </div>
      )}

      {props.books.notes}

      {props.hasDetails ? (
        <div>
          <h3>Availability</h3>
          <div>
            <ul>
              {props.books.days.sort().map((day) => {
                return (
                  <li key={day} value={day}>
                    {" "}
                    days {day}
                  </li>
                );
              })}
            </ul>
            <ul>
              {props.books.sessions.map((session) => {
                return (
                  <li key={session} value={session}>
                    {" "}
                    sessions {session}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="hasDetails_empty"></h3>
        </div>
      )}
    </div>
  );
};
