import { useState } from "react";
import BookableList from "./BookableList";
import { bookableMock } from "../../bookable-mock";
import {
  BookKeys,
  Bookable as BookType,
} from "../../@types/bookable.interface";
import { BookableDetails } from "./BookableDetails";

export const Bookable = () => {
  const [group, setGroup] = useState("Rooms");
  const [state, setState] = useState({
    indexList: 0,
    books: bookableMock,
  });

  const booksByGroup = state.books.filter((book) => book.group === group);

  const groups = getUniqueGroups(state.books, "group");

  function getUniqueGroups(array: BookType[], key: BookKeys) {
    const keysValues = array.map((element) => element[key]);
    return [...new Set(keysValues)];
  }

  const [hasDetails, setHasDetails] = useState<boolean>(() => {
    return roomSelectedToShowDetails(booksByGroup[state.indexList], "Room 1");
  });

  const changeBookableOnClick = (index: number) => {
    console.log("changeBookableOnClick", index);
    setState((prevState) => ({ ...prevState, indexList: index }));

    if (roomSelectedToShowDetails(booksByGroup[index], "Room 1")) {
      setHasDetails(true);
      console.log("Room 1 details");
    } else {
      setHasDetails(false);
      console.log("No details");
    }
  };

  function roomSelectedToShowDetails(book: BookType, room: string) {
    console.log("roomSelectedToShowDetails", book, room);
    return book.title === room;
  }

  const onChangeGroup = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGroup(event.target.value);
    setState((prevState) => ({ ...prevState, indexList: 0 }));
    setHasDetails(false);
  };

  const nextBookable = (index: number, books: BookType[]) => {
    const nextIndex = (index + 1) % books.length;
    setState((prevState) => ({
      ...prevState,
      indexList: nextIndex,
    }));
  };

  const bookable = booksByGroup[state.indexList];

  const details = (hasDetails: boolean) => {
    setHasDetails(hasDetails);
  };

  return (
    <main className="bookable">
      <BookableList
        indexList={state.indexList}
        booksByGroup={booksByGroup}
        group={group}
        groups={groups}
        changeBookableOnClick={changeBookableOnClick}
        nextBookable={nextBookable}
        onChangeGroup={onChangeGroup}
      />
      <BookableDetails
        books={bookable}
        hasDetails={hasDetails}
        setHasDetails={details}
      />
    </main>
  );
};
