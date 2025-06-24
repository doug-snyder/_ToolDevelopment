// TODO: Populate options using JSON and input variable

const DropdownCreator = (props) => {
  return (
    <select className="dropdownField">
      <option value="optionOne">{props.dropdownType} 1</option>
      <option value="optionTwo">{props.dropdownType} 2</option>
    </select>
  );
};
export default DropdownCreator;
