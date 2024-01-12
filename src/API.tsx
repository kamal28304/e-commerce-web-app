import React from "react";
import axios from "axios";



 export type GetProductsProp={
  sortBy? :any;
  query?:string;
  page? :number;
  sortType? :any;
  search? :any;

}

export async function getProductList( 
  sortBy?:any ,
  page?:number,
  search?:any,
  sortType?:any,
){

   let params:GetProductsProp = {};

  if (sortBy) {
    params.sortBy = sortBy;
  }
  
  if (search) {
    console.log("search",search)
    params.search=search;
  }
  
    if (page) {
    params.page= +page;
  }

 if (sortType) {
   params.sortType=sortType
  }

  return axios
.get("https://myeasykart.codeyogi.io/products",{
params ,
  }).then(function(response:any) {
    return response.data;
  });

}


export async function getProductData(id:string) {
  return axios.get("https://myeasykart.codeyogi.io/product/" + id).then(function(response) {
      return response.data;
    });
}

      export async function getProductByIds(ids:any){
        console.log(ids)
        const comaSeperatedIds=ids.join();
        return axios.get("https://myeasykart.codeyogi.io/products/bulk",{
          params:{
            ids:comaSeperatedIds,
          },
        }).then((response)=>(response.data))
      }
//export function nextItemsData() {
  //return axios.get("https://dummyjson.com/products?limit=30&skip=30&select=title,price,thumbnail,category,id").then(function(response) {
    //return response.data.products;
  //});}

//export function LastFourtyItemsData() {
  //return axios.get("https://dummyjson.com/products?limit=40&skip=60&select=title,price,thumbnail,category,id").then(function(response) {
  //  return response.data.products;
 // });}