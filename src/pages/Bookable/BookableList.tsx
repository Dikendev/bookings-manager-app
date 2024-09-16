import { FaArrowRight } from "react-icons/fa6";
import { Bookable } from "../../@types/bookable.interface";
import React from "react";

interface BookableListProps {
  indexList: number;
  books: Bookable[];
  group: string;
  groups: string[];
  changeBookableOnClick: (index: number) => void;
  nextBookable: (index: number, books: Bookable[]) => void;
  onChangeGroup: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const BookableList: React.FC<BookableListProps> = ({
  books,
  indexList,
  group,
  groups,
  changeBookableOnClick,
  nextBookable,
  onChangeGroup,
}) => {
  return (
    <>
      <select value={group} onChange={(event) => onChangeGroup(event)}>
        {groups.map((group) => {
          return (
            <option value={group} key={group}>
              {group}
            </option>
          );
        })}
      </select>
      <ul className="bookable-ul">
        {books.map((book, index) => (
          <li
            key={book.id}
            className={indexList === index ? "selected" : undefined}
          >
            <button onClick={() => changeBookableOnClick(index)}>
              {book.title}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="btn"
        onClick={() => nextBookable(indexList, books)}
        autoFocus
      >
        <FaArrowRight />
        <span>Next</span>
      </button>
    </>
  );
};

export default BookableList;
