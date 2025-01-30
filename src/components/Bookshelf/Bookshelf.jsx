import { useState } from "react";

const Bookshelf = (props) => {
  let initialState = {
    title: "",
    author: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    console.log(event.target.name);
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addBooks(formData)
    setFormData(initialState)
}

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Title:</label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.title}
              name="title"
            />
            <label htmlFor="">Author:</label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.author}
              name="author"
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          {props.books.map((book) => (
            <>
            <h3>{book.author}</h3>
            <p>{book.title}</p>
            <br />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
