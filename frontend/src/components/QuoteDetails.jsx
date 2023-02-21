import React from "react";
import { useDeleteQuoteMutation } from "../features/quotes/quoteServices";
import {useSelector} from "react-redux";

const QuoteDetails = ({ quote }) => {
  const [deleteQuote] = useDeleteQuoteMutation();
  const {user} = useSelector((state) => state.auth);

  const handleClick = async () => {
    if(!user?.token){
      return
    }
    await deleteQuote(quote._id);
  };


  return (
    <div className="quote-details">
      <h4>{quote.title}</h4>
      <span onClick={handleClick}> X </span>
    </div>
  );
};

export default QuoteDetails;
