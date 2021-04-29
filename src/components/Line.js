const Line = (props) => {
  return (
    <div className={props.lineStyle}>
      <h1>😎 Emoji Search 😎</h1>
      <input
        type="text"
        placeholder="what emoji are you looking for?"
        value={props.searchValue}
        onChange={props.searchOnChange}
      />
    </div>
  );
};

export default Line;
