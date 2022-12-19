import './ListContainer.css';
import ListItem from '../ListItem/ListItem';

const ListContainer = () => {
  return (
    <>
      <div className="listContainer">
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </>
  );
};

export default ListContainer;
