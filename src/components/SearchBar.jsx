import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState("")
  
  const onSubmit = (e) => {
    e.preventDefault();
   
   onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} action="" className="ui form">
        <div className="field">
          <label htmlFor="">Video Ssearch</label>
          <input
            value={term}
            type="text"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
