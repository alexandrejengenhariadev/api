'use strict'
const Ong= use('App/Models/Ong');
class OngController {
   async store({request}){

        const dataToCreate=request.only(['nome','cep','endereco']);
       return await Ong.create(dataToCreate);
    }
   async list(){
     return await Ong.all();
    }
   async show({params}){
      return await Ong.find(params.id);
   }
   async update({params,request}){
      const ong = await Ong.findOrFail(params.id);
      const dataToUpdate = request.only(['nome','cep','endereco']);
      ong.merge(dataToUpdate);
      await ong.save();
      return ong;

   }
   async delete({params}){
      const ong = await Ong.findOrFail(params.id);
      await ong.delete();
      return {
         message:'Ong excluida com sucesso!'
      }
   }
}

module.exports = OngController
