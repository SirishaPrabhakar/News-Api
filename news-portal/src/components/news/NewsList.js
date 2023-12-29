import React, { useEffect, useState } from "react";
import "./NewsList.css"

const NewsList = () => {

    const [mynews , setMyNews] =useState ([])

    const fetchData = async() => {
        let resonse = await fetch(" https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=63bda85e4d364c0983afcee8f9ad891f");
        let data = await resonse.json();
        setMyNews(data.articles)
    }

    useEffect (() => {
        fetchData();
    },[])

  return (
    <>
      <div className="mainDiv">
        {mynews.map((ele) => {
            console.log(ele)     
            return (
                <>
          
    
    <div class="card" style={{width: "300px" , height :"400px" ,marginLeft:"7.2rem" ,marginTop:"2rem"}}>
    
    <img src={ele.urlToImage  == null ? "https://sportshub.cbsistatic.com/i/r/2023/08/09/3db4aa9e-59a9-4936-bca8-3bedbd15c16d/thumbnail/1200x675/45e2724baadfe7ced16243037d16ab21/pzs-official-zero-of-nfl-3.jpg:*" : ele.urlToImage } class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{ele.author}</h5>
      <p class="card-text">
        {ele.title}
      </p>
      <a href={ele.url} target="__blank"class="btn btn-primary">Read More</a>
    </div>
  </div>
    
    </>  
            );
     })}
  </div>
 </> 
  );
};


export default NewsList