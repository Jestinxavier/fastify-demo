const getAllItems =   (request, reply) => {
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


  module.exports = {getAllItems, samplePostControl, samplePostControlList, sampleGETControlList, sampleGetControlListArrayobj}; 