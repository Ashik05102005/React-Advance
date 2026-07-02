import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  MdDelete,
  MdEdit,
  MdArchive,
  MdPushPin
} from "react-icons/md";
import { NoteContext } from "../context/NoteContext";
export default function DataView() 
    {
      const {view,setShowForm,setEditingNote,search,setSearch}=useContext(NoteContext)
      const [notes,setNotes]=useState([])
      useEffect(()=>{
        const fetchData=async ()=>{
          const response=await axios.get('http://localhost:5000/notes');
          setNotes(response.data.sort((a,b)=>b.pinned -a.pinned))
        }
        fetchData()

      },[])
      let filteredNotes = notes ;


      if(view=== "all"){
        filteredNotes = notes.filter((note) => !note.archive);
      }
      if (search){
        filteredNotes=filteredNotes.filter((note)=>note.title.toLowerCase()
                                                   .includes(search.toLowerCase()) ||
                                                   note.content.toLowerCase()
                                                   .includes(search.toLowerCase()));
      }
      if(view=== "pinned"){
        filteredNotes = notes.filter((note) => note.pinned && !note.archive);
      }
      if(view=== "archive"){
        filteredNotes = notes.filter((note) => note.archive);
      }
      if (filteredNotes.length === 0) {
        return (
          <div className="w-full flex flex-col items-center justify-center py-20">
            <h2 className="text-2xl font-semibold text-gray-600">
              No Notes Found
            </h2>

            <p className="text-gray-400 mt-2">
              Create a new note or change your search/filter.
            </p>
          </div>
        );}
      //delete
      const deleteNote=async (id)=>{
        if(confirm("do you want to delete"))
          { 
            try{
              await axios.delete(`http://localhost:5000/notes/${id}`);
              setEditingNote((prev)=>prev.filter((note)=> note.id !==id))
            }
            catch(error){
              console.error(error);
            }
          }
        else {
          console.log("not gone for delete")
        }
      }

      const archiveNote=async(id)=>{
       try{
        const note= notes.find((note)=> note.id === id);
        const res= await axios.put( `http://localhost:5000/notes/${id}`,{...note,archive: !note.archive,});
         setNotes((prev) =>
            prev.map((note) =>
              note.id === id ? response.data : note
            )
          );

       }
       catch(err){
        console.log(err)
       }
      }
      //edit
      const editNote=(id)=>{
        //to find the specified obj to edit
        const nodeToEdit=notes.find(note=>note.id===id);
        setEditingNote(nodeToEdit);
        
        setShowForm(true);
      };
      //pin
      const pinNotes=async(id)=>{
          try{
            const note =notes.find((note)=>note.id===id);
            const res=await axios.put(  `http://localhost:5000/notes/${id}`,{...note,pinned: !note.pinned,});
            const updatedNotes = notes.map((note)=>note.id === id ? res.data : note );
            updatedNotes.sort((a,b)=>b.pinned -a.pinned);
            setNotes(updatedNotes)
        }
        catch(error) {
          console.log(error)
        }
      } 

      return (
        <div className="m-2 p-2  w-full h-full flex gap-10 flex-wrap">
          {
            filteredNotes.map((data,index)=>{
              return (
                
                <div
                  key={data.id}
                  className={`w-72 min-h-48 p-4 m-3 rounded-xl shadow-md border border-gray-100  hover:shadow-lg transition-all duration-200 ${data.color} `}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-lg font-bold "> 
                      {data.title}
                    </h2>

                    <button onClick={()=>pinNotes(data.id)}>
                      <MdPushPin
                          className={`text-xl hover:scale-110 transition ${
                              data.pinned
                                ? "text-yellow-500"
                                : "text-gray-500"
                            }`}
                          />
                    </button>
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 text-sm mb-4 ">
                    {data.content}
                  </p>

                  {/* Tag */}
                  <span className='inline-block px-3 py-1 text-xs rounded-full bg-amber-50 text-black'>
                    {data.tags}
                  </span>

                  {/* Time */}
                  <p className="text-xs text-gray-400 mt-3">
                    {data.time}
                  </p>

                  {/* Actions */}
                  <div className="flex justify-end gap-3 mt-4 border-t pt-3">
                    <button onClick={()=>editNote(data.id)}>
                      <MdEdit className="text-xl text-gray-500 hover:text-blue-500" />
                    </button>

                    <button onClick={()=>archiveNote(data.id)}>
                      <MdArchive className="text-xl text-gray-500 hover:text-green-500" />
                    </button>

                    <button onClick={()=>deleteNote(data.id)}>
                      <MdDelete className="text-xl text-gray-500 hover:text-red-500" />
                    </button>
                  </div>
                </div>
              )
          })}

        </div>
      );
}
