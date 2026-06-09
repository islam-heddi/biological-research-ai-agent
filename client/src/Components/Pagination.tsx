
interface IPagination {
    page: string;
    maxPages: string;
    updatePage: (newValue: string) => void;
}

function Pagination({maxPages,page, updatePage}: IPagination) {
    const currentPage = parseInt(page)
  return (
    <div className="flex flex-row gap-2">
        <div onClick={() => updatePage(`${currentPage-1}`)}>{currentPage > 1 ? currentPage-1: "" }</div>
        <div>{currentPage}/{maxPages}</div>
        <div onClick={() => updatePage(`${currentPage+1}`)}>{currentPage < parseInt(maxPages)? currentPage+1: "" }</div>
    </div>
  )
}

export default Pagination