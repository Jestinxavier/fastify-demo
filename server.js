const routes = require("./routs/samplerouts")
// const sampleController = require("./controller.samplecontroller.js") 
// const sampleControllerPostItem = require("./controller.samplePostController.js")
const fastify = require('fastify')({
    // logger: true
  })
  routes.map(route => fastify.route(route)) //route is reg to fastify




  // use only at the btm
  fastify.listen(4000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })



  