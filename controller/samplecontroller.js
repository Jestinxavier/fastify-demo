const {name} = require("../modal/indexmodal")
const getAllItems =   async (request, reply) => {
 await name
    reply.send({ hello: 'world' })
  } 
  const samplePostControl =(request, reply)=> {
    reply.send({ hello: 'IM post' })
  }
  const sampleGETControlList =(request, reply)=> {
    reply.send({ id: 1,Name: 'Jestin', DOB: "17-06-1998", Age: 23 })
  }
  const samplePostControlList =(request, reply)=> {
    reply.send({ id: 1,Name: 'Name', DOB: "DD-MM-YYYY", Age: "num" })
  }
  const sampleGetControlListArrayobj =(request, reply)=> {
    reply.send([{ id: 1,Name: 'Jestin', DOB: "17-06-1998", Age: "23" },{ id: 2,Name: 'Jaimy', DOB: "17-04-2000", Age: "21" },{ id: 2,Name: 'Joyal', DOB: "16-04-2000", Age: "21" }])
  }
const example = async (request, reply)=> {
  let firstName = request.body.name
  let lastName = request.body.lastname
  let filename = request.body.file
  console.log(filename,"********");
 let result = await name(firstName,lastName)
 if(result){

   reply.send({
    msg: `The name ${firstName} and ${lastName} is created`,
    status : 1,
   })
 }else{
  reply.send({
    msg: `The name ${firstName} and ${lastName} is not created `,
    status : 0,
   })
 }
}

  module.exports = {getAllItems, example, samplePostControl, samplePostControlList, sampleGETControlList, sampleGetControlListArrayobj}; 