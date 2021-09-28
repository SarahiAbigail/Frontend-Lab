<template>
    <div>
        <div>
            <Header/>
        </div>
    <div class="registrarPensum">
        <div class="text-center">   
            <h1 class="h4 text-gray-900 mb-4">Registrar Pensum</h1>     
            <form v-on:submit.prevent="AgregarRegistro" class="pensum" > 
                <div class="form-group">
                    <div class="col-md-6">
                        <input  type="text" 
                        class="form-control inputPensum" v-model="pensum.description"
                        placeholder="Descripción breve">              
                    </div>          
                </div>  
                <div class="form-group">        
                    <div class="col-md-6">
                        <input type="file" @change="uploadFile" >
                    </div>                                 
                </div> 
                <button type="submit" class="btn btn-primary btn-lg btnRegistrar">         
                    Registrar
                </button> 
            </form> 
        </div>   
    </div>
    <div class="container-fluid"> 
        <div class="row col col-md-offset-2 custyle"> 
             
        <div class="row col buttonCol">
                <div class="col-md-8">                       
                <input type="text" class="form-control" id="buscarPensum" placeholder="Buscar Pensum">            
            </div>
            <div class="col input-group-btn">
                <button type="button" class="btn btn-primary btnBuscar">Buscar</button>
            </div>
        </div>


            <table class="table table-hover custab">
                <thead>                 
                    <tr>       
                        <th>Descripcion</th>         
                        <th>Fecha</th>          
                        <th>Documento PDF</th>           
                        <th class="text-center">Opciones</th>      
                    </tr> 
                </thead>
                <tbody>
                    <tr v-for="pensum in pensums" :key="pensum._Id">
                        <td>{{ pensum.description }}</td>
                        <td>{{ pensum.createdAt }}</td>
                        <td>
                            <div @click.prevent="Download(item)">
                                {{ pensum.file }}
                            </div>
                            <button class='btn btn-info style-2'
                            href="#" @click.prevent=" downloadItem({ url: 'http://localhost:3000/api/file' + pensum.file , label: 'pensum.pdf',})">
                            download
                            </button>
                        </td>
                        <td class="text-center">
                        <button  type="button"  class='btn btn-info btn-xs style-1'>
                            <router-link :to="{name:'EditarPensum', param:{id:pensum.id}}" class='style-1' >Editar</router-link>
                        </button>
                        
                        <button  v-on:click="borrarPensum(pensum._id)" class="btn btn-danger btn-xs style-1">
                            Delete
                        </button>
                        </td>
                        
                    </tr>
                </tbody>
    
            </table>
            <div class="text-center">
            <a href="#" class="btn btn-primary btn-lg btnRegistrar">         
                Guardar
            </a> 
            </div>
    
   
        </div>

    
    </div>
        <Footer />
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from "axios";

export default {
  data() {
    return {
        pensums:[],

        files: null,

        pensum: {}
    }
  },
  created:function(){
    this.consultarPensum()
  },
   components:{
        Header,
        Footer,
    },
  methods: {
      consultarPensum(){

        fetch('http://localhost:3000/api/pensum/')
        .then(res => res.json())
        .then((datosresp)=>{
            console.log(datosresp)
            this.pensums=[]
            if(typeof datosresp[0].success==='undefined')
            {
                this.pensums=datosresp
            }
        })
      },

      async downloadItem({ url, label }) {
      const response = await axios.get(url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = label;
      link.click();
      URL.revokeObjectURL(link.href);
      },

       uploadFile (event) {
        this.files = event.target.files
        },
      AgregarRegistro(){
          const datosEnviar={file:this.files,description:this.pensum.description}
          fetch('http://localhost:3000/api/pensum',
          {
            method: "POST",
            body: JSON.stringify(datosEnviar)
          })
          .then(respuesta=>respuesta.json)
          .then((datosRespuesta)=>
          {
              console.log(datosRespuesta)
              window.location.href='Pensum'
          })
      },

      borrarPensum(id){

          fetch('http://localhost:3000/api/pensum/'+ id,
          {
            method: "delete",
          })
          .then(respuesta=>respuesta.json)
          .then((datosRespuesta)=>{
              console.log(datosRespuesta)
              this.makeToast("Hecho","Pensum Eliminado","success");
              window.location.href='Pensum'
          })
          .catch(console.log)
    }
    }
}
</script>
