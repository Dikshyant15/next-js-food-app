import db from '../../../Utilities/db'
import '../../../model/Product'


export default async function handler(req, res) {
    const {method}=req;
    db() // calling the db connection 

    if(method==="GET"){}
    if(method==="POST"){
        try{
            const product = await Product.create(req.body)
            res.status(200).json(product) //takes the body of the api
        }catch(err){
            res.status(500).json(err)
        }
    }
  
}