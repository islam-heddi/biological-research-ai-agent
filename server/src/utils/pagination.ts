import { ResearchType } from "../types/research.types.js";

const pagination = (page: number, table: ResearchType[]) => {
    const pageSize = 25;
    const currentPage = Math.max(1, page);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return table.slice(startIndex, endIndex);
}

const numberOfPage = (table: ResearchType[]) => {
    const pageSize = 25;
    const numberPages = table.length / pageSize;
    return numberPages + table.length % pageSize;
}

export {
    pagination,
    numberOfPage
};