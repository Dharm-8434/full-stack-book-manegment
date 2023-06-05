import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import DataTable from "react-data-table-component"
import Navbar from './navbar'

function GetBookByID(){

    const [book,setBook]=useState([])
    useEffect(()=>{
        const getBooks = async()=>{
          const response = await axios.get("http://localhost:5000/books/:bookId'")
          console.log(response.data)
          setBook(response.data.data)
        }
        getBooks()
      },[])

      const columns = [
        {
          name:"TITLE",
          selector:(row)=>row.title,
          style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.9)',
                    color: 'white',
                
        },
            divider: {
              default: 'rgba(0,0,0,.12)',
            },
    },
        
        {
          name:"CATEGORY",
          selector:(row)=>row.category
        },
        {
          name:"EXCERPT",
          selector:(row)=>row.excerpt,
          style: {
                        backgroundColor: 'rgba(187, 204, 221, 1)',
                    },
                divider: {
                  default: 'rgba(0,0,0,.12)',
                },
        },
        {
          name:"RELEASE-DATE",
          selector:(row)=>row.releasedAt,
          
        },
        
      ]

      return (
        <>
        <Navbar/>
        <h1 className="htext" style={{textAlign:"center"}}>User Book</h1>
          <DataTable  columns={columns} data={book} pagination/>
          </>
          
        )
}
export default GetBookByID