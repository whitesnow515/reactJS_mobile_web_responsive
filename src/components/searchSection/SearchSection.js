import React from 'react'

import { Switch } from "@material-tailwind/react";
import Dropdown from '../../components/dropdown/Dropdown';
import {DatePicker, Input} from "antd"
import { SearchOutlined } from '@ant-design/icons';

export default function SearchSection(){
  
  const onSearch = () => {
    console.log("search");
  }
  return(
    <>
      <div className="w-full  justify-between px-5 h-0 lg:h-auto lg:flex visible lg:visible">  
        <div className='flex'>
          <Dropdown />
          <div className='w-[150px]'>
            <DatePicker 
              size='large'
            />
          </div>
        </div>
        
        <div className='flex'>
          <Switch 
            color='green'
            defaultChecked
          />
          <p className='text-black text-lg text-right ml-2 pt-[4px]'>
            Save Search
          </p>
        </div>
        <div>
          <Input 
            placeholder="Search by Address"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
            suffix={<SearchOutlined />}
          />              
        </div>
      </div>
    </>
  )
}