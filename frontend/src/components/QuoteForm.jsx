import React, { useState } from "react";
import {useSelector} from "react-redux";
import { useCreateQuoteMutation } from "../features/quotes/quoteServices";

const QuoteForm = () => {
  const {user} = useSelector((state) => state.auth);
  const [createQuote, {error}] = useCreateQuoteMutation();
  const [title, setTitle] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!user.token){
      return
    }

    const quote = { title };
    await createQuote(quote);
    setTitle("");
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Quote</h3>

      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <button>Add Quote</button>
      {error?.data?.error && <div className="error">{error?.data?.error}</div>}
    </form>
  );
};

export default QuoteForm;
