import { FaArrowRight } from "react-icons/fa6";
import { Bookable } from "../../@types/bookable.interface";
import { ChangeEvent, FC } from "react";

interface BookableListProps {
  indexList: number;
  booksByGroup: Bookable[];
  group: string;
  groups: (string | number)[];
  changeBookableOnClick: (index: number) => void;
  nextBookable: (index: number, books: Bookable[]) => void;
  onChangeGroup: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const BookableList: FC<BookableListProps> = ({
  indexList,
  booksByGroup,
  group,
  groups,
  changeBookableOnClick,
  nextBookable,
  onChangeGroup,
}) => {
  return (
    <div className="bookable_list">
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
        {booksByGroup.map((book, index) => (
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
        onClick={() => nextBookable(indexList, booksByGroup)}
        autoFocus
      >
        <FaArrowRight />
        <span>Next</span>
      </button>
    </div>
  );
};

export default BookableList;
