import React from "react";
import QuoteDetails from "../components/QuoteDetails";
import QuoteForm from "../components/QuoteForm";
import { useGetAllQuotesQuery } from "../features/quotes/quoteServices";


const Home = () => {
  const {data} = useGetAllQuotesQuery();

  return (
    <div className="home">
      <div className="">
        {data &&
          data.map((quote) => (
            <QuoteDetails key={quote._id} quote={quote} />
          ))}
      </div>
      <QuoteForm />
    </div>
  );
};

export default Home;
