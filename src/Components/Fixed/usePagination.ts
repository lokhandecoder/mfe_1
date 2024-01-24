import React, { useEffect, useState } from "react";

function usePagination(items, pageLimit) {
  const [pageNumber, setPageNumber] = useState(0);
  const [reachlimit, setreachlimit] = useState<Boolean>(false);
  const [pageCount, setpageCount] = useState(
    Math.ceil(items.length / pageLimit)
  );

  const changePage = (pN) => {
    setPageNumber(pN);
  };

  const pageData = () => {
    const s = pageNumber * pageLimit;
    const e = s + pageLimit;
    return items.slice(s, e);
  };

  const lastpagedata = () => {
    return items.slice(0, pageCount);
  };
  const nextPage = () => {
    setPageNumber(Math.min(pageNumber + 1, pageCount - 1));
  };
  useEffect(() => {}, [pageNumber]);

  const previousPage = () => {
    setPageNumber(Math.max(pageNumber - 1, 0));
    setreachlimit(false);
  };
  const LastPage = () => {
    setPageNumber(lastpagedata().length - 1);
    setreachlimit(true);
  };
  const firstpage = () => {
    setPageNumber(0);
    setreachlimit(false);
  };

  return {
    pageNumber,
    pageCount,
    changePage,
    pageData,
    nextPage,
    previousPage,
    LastPage,
    setpageCount,
    reachlimit,
    firstpage,
  };
}

export default usePagination;
