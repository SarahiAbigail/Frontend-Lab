<template>
    <div>
        <Header/>
        <div>                        
    </div>  
        <div class="registrarPensum">
        <div class="text-center">   
            <h1 class="h4 text-gray-900 mb-4">Registrar Comisión</h1>     
            <form class="pensum"> 
     
                <div class="form-group">
                    <div class="col-md-6">
                        <input type="text" class="form-control inputPensum" id="exampleDescripcion" placeholder="Descripción">               
                    </div>          
                </div>    
                <div class="form-group">     
                    <div class="col-md-6">           
                        <input type="text" class="form-control inputPensum" id="exampleDocumentoPDF" placeholder="Código del pensum">          
                    </div>                 
                </div> 
                <a href="#" class="btn btn-primary btn-lg btnRegistrar">         
                    Registrar
                </a> 
             
            </form> 
        </div>   
    </div>
    <div class="container-fluid"> 
           
        <div class="row col-md-6 col-md-offset-2 custyle">   
            <table class="table table-hover custab">
                <thead>
                    <div class="input-group">
                        <div class="col-md-10">                       
                            <input type="text" class="form-control" id="buscarPensum" placeholder="Buscar Comisión">            
                        </div>
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-primary btnBuscar">Buscar</button>
                        </div>
                    </div>                  
                    <tr>       
                        <th>Id</th>         
                        <th>Descripción</th>          
                        <th>Pensum</th>           
                        <th class="text-center">Opciones</th>      
                    </tr> 
                </thead>
            
                <tr>
               
                    <td>1</td>
               
                    <td>News</td>
                
                    <td>News Cate</td>
                
                    <td class="text-center"><a class='btn btn-info btn-xs btnModificar' href="#"><span class="glyphicon glyphicon-edit"></span> Modificar</a> <a href="#" class="btn btn-danger btn-xs btnBorrar"><span class="glyphicon glyphicon-remove"></span> Borrar</a></td>
            
                </tr>
            
                <tr>
                
                    <td>2</td>
                
                    <td>Products</td>
                
                    <td>Main Products</td>
                
                    <td class="text-center"><a class='btn btn-info btn-xs btnModificar' href="#"><span class="glyphicon glyphicon-edit"></span> Modificar</a> <a href="#" class="btn btn-danger btn-xs btnBorrar"><span class="glyphicon glyphicon-remove"></span> Borrar</a></td>
            
                </tr>
            
                <tr>
               
                    <td>3</td>
                
                    <td>Blogs</td>
                
                    <td>Parent Blogs</td>
                
                    <td class="text-center"><a class='btn btn-info btn-xs btnModificar' href="#"><span class="glyphicon glyphicon-edit"></span> Modificar</a> <a href="#" class="btn btn-danger btn-xs btnBorrar"><span class="glyphicon glyphicon-remove"></span> Borrar</a></td>
            
                </tr>
    
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
//import axios from "axios";

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
  }
}
</script>