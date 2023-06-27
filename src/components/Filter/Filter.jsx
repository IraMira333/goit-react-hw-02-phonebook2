import PropTypes from 'prop-types';

const Filter = ({ onFilterInput }) => {
  return (
    <div>
      <input placeholder="Search name..." onChange={onFilterInput}></input>
    </div>
  );
};

Filter.propTypes = {
  onFilterInput: PropTypes.func.isRequired,
};
export default Filter;
