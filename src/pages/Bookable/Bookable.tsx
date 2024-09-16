import { useState } from "react";
import BookableList from "./BookableList";
import { bookableMock } from "../../bookable-mock";
import { Bookable as BookType } from "../../@types/bookable.interface";

export const Bookable = () => {
  const [group, setGroup] = useState("Rooms");
  const [state, setState] = useState({
    indexList: 0,
    books: bookableMock,
  });

  const filterGroup = bookableMock.filter((book) => book.group === group);

  const groups = [...new Set(bookableMock.map((book) => book.group))];

  const changeBookableOnClick = (index: number) => {
    console.log("changeBookableOnClick", index);
    setState((prevState) => ({ ...prevState, indexList: index }));
  };

  const nextBookable = (index: number, books: BookType[]) => {
    const nextIndex = (index + 1) % books.length;

    setState((prevState) => ({
      ...prevState,
      indexList: nextIndex,
    }));
  };

  const onChangeGroup = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGroup(event.target.value);
  };

  return (
    <main>
      <BookableList
        indexList={state.indexList}
        books={filterGroup}
        group={group}
        groups={groups}
        changeBookableOnClick={changeBookableOnClick}
        nextBookable={nextBookable}
        onChangeGroup={onChangeGroup}
      />
    </main>
  );
};
