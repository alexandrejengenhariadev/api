'use strict'
import { v4 as uuidv4 } from 'uuid'
const Ong= use('App/Models/Ong');
class OngController {
      
   async store({request}){
       validationOptions = {types: ['imagem'],
                                  size: '2mb',}      

      const dataToCreate=request.only(['nome','cep','endereco','telefone','responsavel','email','imagem']);
      const image = request.file('imagem', this.validationOptions)

    if (image) {
      const imageName = `${uuidv4()}.${image.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: imageName,
      }) 
      return await Ong.create(dataToCreate);
    }
   }
   async list(){
     return await Ong.all();
    }
   async show({params}){
      return await Ong.find(params.id);
   }
   async update({params,request}){
      const ong = await Ong.findOrFail(params.id);
      const dataToUpdate = request.only(['nome','cep','endereco','telefone','responsavel','email','imagem']);
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
