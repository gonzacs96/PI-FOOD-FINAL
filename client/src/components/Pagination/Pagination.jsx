import React from "react";
import s from './Pagination.module.css'

export const Pagination = ({
  currentPage,
  totalPages,
  changePage,
  handleBack,
  handleNext,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  if(totalPages!==0){
    return (
      <>
        <div className={s.container}>
        <button onClick={handleBack} className={s.button1}>Back</button>
          {pageNumbers.map((number) => {
            return (
              <button key={number} value={number} onClick={changePage} className={number===currentPage?s.buttonSelected:s.button1}>
                {number}
              </button>
            );
          })}
        <button onClick={handleNext} className={s.button1}>Next</button>  
        </div>
      </>
    );
  }
  return (
    <>
    </>
  )
};
