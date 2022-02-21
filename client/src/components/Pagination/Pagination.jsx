import React from "react";
import "./Pagination.css";

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
  if (totalPages !== 0) {
    return (
      <>
        <div className="pagination-custom">
          <button onClick={handleBack} className="pagination-button">
            Back
          </button>
          {window.screen.width < 950 ? (
            <div className="pagination-button">{currentPage}</div>
          ) : null}
          {window.screen.width > 950
            ? pageNumbers.map((number) => {
                return (
                  <button
                    key={number}
                    value={number}
                    onClick={changePage}
                    className={
                      number === currentPage
                        ? "pagination-button-selected"
                        : "pagination-button"
                    }
                  >
                    {number}
                  </button>
                );
              })
            : null}
          <button onClick={handleNext} className="pagination-button">
            Next
          </button>
        </div>
      </>
    );
  }
  return <></>;
};
