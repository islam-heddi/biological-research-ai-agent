import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState, useTransition } from "react"
import { api } from "../api/api";
import { GET_RESEARCH_BY_PAGE } from "../api/endpoints.constants";
import { toast } from "react-toastify";
import type { PaginationResponseType, ResearchType } from "../types/types";
import Skeleton from "react-loading-skeleton";
import React from "react";
import ResearchCard from "../Components/ResearchCard";
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Components/Pagination';

function Researchs() {
  const [data, setData] = useState<PaginationResponseType>()
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. Get a specific query value (e.g., ?query=apple)
  const page = searchParams.get('page') || 1;

  const handleUpdate = (newValue: string) => {
    // 2. Set/Update the query parameters in the URL
    setSearchParams({ page: newValue });
    window.location.reload();
  };
  const [loading, startTransition] = useTransition();
  const [researchs, setResearchs] = useState<ResearchType[]>([])
  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await api.get(GET_RESEARCH_BY_PAGE+page)
       // console.log(res)
        setResearchs((res.data as PaginationResponseType).researchs)
        setData(res.data)
      } catch (error) {
        toast.error("cant load researchs")
      }

    })
  },[])

  return (
    <div className='max-h-[calc(100vh-4rem)] overflow-y-auto pb-4'>
      <div className='space-y-4'>
        {loading? <Skeleton baseColor='#0d0d0d5b' count={5} enableAnimation={true}/> : researchs.map((value, index) => <React.Fragment key={index}>
          <ResearchCard research={value}/>
        </React.Fragment>)}
      </div>
      <div className='flex flex-row justify-center items-center mt-4'>
        <Pagination page={data?.currentPage as string} maxPages={data?.pages as string} updatePage={handleUpdate} />
      </div>
    </div>
  )
}

export default Researchs