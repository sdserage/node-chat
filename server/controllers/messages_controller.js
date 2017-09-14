let messages = [];
let id = 0;

module.exports={
  create(req,res,next){
    const {text, time} = req.body;
    messages.push({id, text, time});
    id++;
    res.status(200).send(messages);
  },
  read(req,res,next){
    res.status(200).send(messages);
  },
  readById(req,res,next){
    const reqId = req.params.id;
    message = messages.filter(message=>message.id==reqId);
    res.status(200).send(message);
  },
  update(req,res,next){
    const reqId = req.params.id;
    const {text} = req.body;
    messages.forEach((message,i,messages)=>{
      if(message.id==reqId){
        messages[i].text = text || messages[i].text;
      }
    });
    res.status(200).send(messages);
  },
  delete(req,res,next){
    const reqId = req.params.id;
    const index = messages.findIndex(message => message.id==reqId);
    messages.splice(index,1);
    res.status(200).send(messages);
  }
}
