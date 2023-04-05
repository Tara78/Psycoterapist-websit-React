const BASE_URL =

  process.env.API_URL ||
  /*  "https://gestalt-therapie-nicolas-v.up.railway.app" */
  "https://squealing-bath-production.up.railway.app"
 /*  "http://localhost:8080"; */



// Slug is a suffix of the request and it comes after base url request/
// Slug is sort of the end point of the reuest
export const API_URL = (slug) => `${BASE_URL}/${slug}`;
