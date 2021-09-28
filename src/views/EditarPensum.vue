<template>
    <div class="registrarPensum">
        <div class="text-center">   
            <h1 class="h4 text-gray-900 mb-4">Registrar Pensum</h1>     
            <form v-on:submit.prevent="ActualizarRegistro" class="pensum" > 
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
</template>


<script>

export default {
  data() {
    return {

        pensum: {}
    }
  },
  created:function(){
    this.consultarPensum()
  },
  methods: {
      ObtenerInfoID(){
        fetch('http://localhost:3000/api/pensum/'+ this.$route.param.id)
        .then(res => res.json())
        .then((datosresp)=>{
            
            console.log(datosresp)
            this.pensums=datosresp[0]

        })
      }
  }
}
</script>




