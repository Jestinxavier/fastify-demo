
const {sampleGetControlListArrayobj,getAllItems, samplePostControl,samplePostControlList, sampleGETControlList} = require("../controller/samplecontroller");
  
const routes =[
    {
        method: 'GET',
        url: '/',
        handler: getAllItems

      },
      {
        method: 'POST',
        url: '/',
        handler: samplePostControl
      },
      {
        method: 'GET',
        url: '/emp',
        handler:  sampleGETControlList

      },
      {
        method: 'POST',
        url: '/emp',
        handler: samplePostControlList

      },
      {
        method: 'GET',
        url: '/emp2',
        handler: sampleGetControlListArrayobj

      }
      



]
module.exports=routes;
