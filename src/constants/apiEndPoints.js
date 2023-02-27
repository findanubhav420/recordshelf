export const BACKEND_URL ='http://localhost:8080/api/'

export const GET_RECORDS = {
    url: "records",
    method: "get",
  };
  
  export const GET_LIKES = (id) => ({
    url: `records/${id}/likes`,
    method: "get",
  });
  
  export const UPDATE_LIKE = (id) => ({
    url: `records/${id}/likes`,
    method: "patch",
  });
  
