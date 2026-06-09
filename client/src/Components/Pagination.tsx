
interface IPagination {
    page: string;
    maxPages: string;
    updatePage: (newValue: string) => void;
}

function Pagination({maxPages,page, updatePage}: IPagination) {
    const currentPage = parseInt(page)
    const maxiPages = Math.trunc(parseInt(maxPages));
  return (
    <div className="flex flex-row gap-5">
        <div className="hover:text-amber-200 cursor-pointer" onClick={() => updatePage(`${currentPage-1}`)}>{currentPage > 1? <>&lt;&lt; Previous</>: ""}</div>
        <div>{currentPage}/{maxiPages}</div>
        <div className="hover:text-amber-200 cursor-pointer" onClick={() => updatePage(`${currentPage+1}`)}>{currentPage < maxiPages? <>Next &gt;&gt;</>: ""}</div>
    </div>
  )
}

export default Pagination