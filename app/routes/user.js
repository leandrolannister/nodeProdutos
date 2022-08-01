const route = require('express').Router();

const users = [
    {id:1, name:"Leandro"},
    {id:2, name:"Soares"},
    {id:3, name:"Ribeiro"},
    {id:4, name:"Tatiana"},
    {id:5, name:"Lucia"},
    {id:6, name:"Nadia"},
]

// route.get('/', (req,res) => {
//   const page = parseInt(req.query.page);
//   const limit = parseInt(req.query.limit); 

//   const startIndex = (page - 1) * limit;
//   const endIndex = page * limit;

//   const result = {};

//   if (endIndex < users.length){
//     result.next = {
//       page:page + 1,
//       limit: limit  
//     }
//   }

//   if (startIndex > 0){
//     result.previous = {
//       page:page - 1,
//       limit: limit  
//     }
//   }
    
//   result.result = users.slice(startIndex,endIndex);
//   res.json(result);

// });

route.get('/', paginateResults(users), (req,res) => {
   res.json(res.paginateResults)
});

function paginateResults(model){
    return (req,res,next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit); 
      
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
      
        const results = {};
      
        if (endIndex < users.length){
          results.next = {
            page:page + 1,
            limit: limit  
          }
        }
      
        if (startIndex > 0){
          results.previous = {
            page:page - 1,
            limit: limit  
          }
        }
          
        results.results = users.slice(startIndex,endIndex);
        
        res.paginateResults = results;
        next();
    }
}

module.exports = route;