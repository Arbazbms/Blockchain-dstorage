import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import Card from "../core/Card";


  const CategorySearch = (props) => {

     const [myFiles, setMyFiles] = useState([]);
     const [search, setSearch] = useState("");
     const [filteredproducts, setFilteredProducts] = useState([]);
     const [categories, setCategories]= useState([])
     const [selectedCategory, setSelectedCategory] = useState();
     const loadFiles = () => {
        setMyFiles(props.files);
        console.log("myfiles from useEffect" + myFiles)
    };

    const loadCategories = () => {
      let catArr = [];
      myFiles.forEach((cat)=>{
        catArr.push(cat.fileCategory)
      })

      setCategories(catArr);
      console.log("CATEGORIES state variable::", JSON.stringify(categories))
      console.log("CatArr--> ", JSON.stringify(catArr))


    }

    useEffect(() => {
            loadFiles();
            loadCategories();
    }, [props]);

    useEffect(() => {
            setFilteredProducts(
                myFiles.filter((file) =>
                    file.fileName.toLowerCase().includes(search.toLowerCase())
                )
            );
    }, [search, myFiles]);

    const searchBox = () => {
            return (
               <div>
                {/* <i className="fa fa-search"></i> */}
                <input
                    type="text"
                    className="form-control sb"
                    placeholder="Search for a File"
                    onChange={(e) => setSearch(e.target.value)}
                    autofocus
                />
                </div>
            );
    };

    function handleCategoryChange(event){
      setSelectedCategory(event.target.value);
    }



    function getFilteredCategoryList(){
      if(!selectedCategory){
        return filteredproducts
      }
      return filteredproducts.filter((item)=> item.fileCategory === selectedCategory)
    }
    
    let catFilteredList = useMemo(getFilteredCategoryList, [selectedCategory, filteredproducts])

    const categoryDropDown = () => {
      return (
         <div>
            <form action="#">
                  <label for="category" className="categoryName">Category</label>
                    <select name="file category" id="category" onChange={handleCategoryChange} className="categoryList">
                    <option value="" >All Categories</option>
                      {categories.map((category, index) => {
                                  return (
                                    <option value={category} key={index}>{category}</option>
                                  );
                      })}
                    </select>
                  {/* <input type="submit" value="Submit" /> */}
            </form>
          </div>
      );
};


      console.log("Files from Home Page: " + typeof(props.files));
        document.title="Home | DStorage for OER";
        return (
        <>
            <Base title = "Welcome To Open Educational Resources.!" description="Decentralised Storage System for Educational Resources Using IPFS & Ethereum Blockchain.">
            {/* {searchBox()} */}
            <div className="row">
              <div className="col-md-2 offset-md-2">
                <Link
                  className="btn btn-block btn-outline-info mb-3 homeBtn"
                  to="/dashboard"
                >
                  <span className="fa fa-tachometer"></span> Dashboard 
                </Link>
              </div>
              <div className="col-md-4">
                 {categoryDropDown()}     
              </div>
              <div className="col-md-2">
                <h3 style={{ 'fontSize': '18px' }} className="text-center btn btn-block homeBtn btn-outline-info">File count: <span className="badge badge-success">{catFilteredList.length}</span></h3>
              </div>
          </div>


                <br />

                <div className="row text-center">
                        <div className="row">
                            {catFilteredList.map((file, index) => {
                                return (
                                    <div key={index} className="col-3 mb-4">
                                        <Card file={file} />
                                    </div>
                                );
                            })}
                            {/* {files.length} */}
                        </div>
                </div>
            </Base>            
        </>
    );
  }

  export default CategorySearch; 