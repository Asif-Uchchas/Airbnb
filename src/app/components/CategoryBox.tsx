'use client'
import React, { useCallback } from 'react';
import { CategoryBoxProps } from '../../../types';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { categories } from './navbar/Categories';

const CategoryBox = ({ icon: Icon, label, selected }: CategoryBoxProps) => {
    
    const router = useRouter()
    const params = useSearchParams();

    const handleClick = useCallback(() => { 

        let currentquery = {}
        
        if (params) {
            currentquery = queryString.parse(params.toString())
        }
        
        const updatedQuery: any = {
            ...currentquery,
            category: label
        }

        if (params?.get('category') === label) {
            delete updatedQuery.category
        }

        const url = queryString.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true })
        
        router.push(url)

    }, [label, params, router])

  return (
      <div
          onClick={handleClick}
          className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 
    hover:text-neutral-800 transition cursor-pointer
    ${selected ? 'border-b-neutral-800 text-neutral-800'
                : 'border-transparent text-neutral-500'}
    `}>
      
          <Icon size={26} />
          <div className='font-medium text-sm'>
              {label}
          </div>
    </div>
  );
}

export default CategoryBox;
