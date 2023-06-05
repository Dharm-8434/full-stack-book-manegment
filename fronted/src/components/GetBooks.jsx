import {React,useEffect, useState} from "react";
import axios from "axios";
import DataTable from "react-data-table-component"
import Navbar from './navbar'

function GetBooks(){
  const [books,setBooks]=useState([])
 
  useEffect(()=>{
    const getBooks = async()=>{
      const response = await axios.get("http://localhost:5000/books")
      // console.log(response)
      setBooks(response.data.data)
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
  <h1 className="htext" style={{textAlign:"center"}}>All Books</h1>
    <DataTable  columns={columns} data={books} pagination/>
    </>
    
  )
}

export default GetBooks;
