<template>
    <div>
        <Header/>
         <div class="registrarPensum">
        <div class="text-center">   
            <h1 class="h4 text-gray-900 mb-4">Registrar Usuario</h1>     
            <form class="usuario"> 
     
                <div class="form-group">
                    <div class="col-md-6">
                        <input type="email" class="form-control inputPensum" id="exampleCorreo" placeholder="Email">               
                    </div>          
                </div>  
                <div class="form-group">  
                    <div class="col-md-6">      
                        <input type="password" class="form-control inputPensum" id="exampleContrasena" placeholder="Contraseña">              
                    </div>          
                </div>  
                <div class="form-group">     
                    <div class="col-md-6">           
                        <input type="text" class="form-control inputPensum" id="exampleRol" placeholder="Rol">          
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
                            <input type="text" class="form-control" id="buscarUsuario" placeholder="Buscar Usuario">            
                        </div>
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-primary btnBuscar">Buscar</button>
                        </div>
                    </div>                  
                    <tr>       
                        <th>Email</th>         
                        <th>Contraseña</th>          
                        <th>Rol</th>           
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