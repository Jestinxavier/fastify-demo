const multer = require('fastify-multer')
const {sampleGetControlListArrayobj,getAllItems,example, samplePostControl,samplePostControlList, sampleGETControlList} = require("../controller/samplecontroller");
const upload = multer({ dest: 'uploads/' })
const fileUploaded = function(request, reply) {
  console.log("file has been uplaoded",request.file );
};
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

      },
      {
        method: 'POST',
        url: '/example',
        preHandler:upload.any(),
        handler: example,
       

      }
      



]
module.exports=routes;
