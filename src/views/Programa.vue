<template>
    <div>
        <div class="navbar navbar-expand-lg navbar-dark bg-dark menu">       
        <h2 class="navbar-brand">Registro Académico DCyT <span class="material-icons" id="icon-graduate">                          
            school                           
        </span></h2>              
            
        <button class="navbar-toggler" data.toggle="collapse" data.target="#mylist">                                 
            <span class="navbar-toggler-icon"></span>                       
        </button>               
                  
        <div class="collapse navbar-collapse justify-content-end" id="mylist" >                   
            <div class="navbar-nav">                              
                 <router-link :to="{name:'Pensum'}" class="nav-link">Gestionar Usuarios</router-link> 
                <router-link :to="{name:'Home'}" class="nav-link">Gestionar Usuarios</router-link>
                <router-link :to="{name:'Home'}" class="nav-link">Gestionar Programas</router-link>
                <router-link :to="{name:'Home'}" class="nav-link">Gestionar Reporte</router-link>
                <router-link :to="{name:'Home'}" class="nav-link">Cerrar Sesión</router-link>                              
            </div>      
        </div>                              
    </div>  
        <div class="registrarPensum">
        <div class="text-center">   
            <h1 class="h4 text-gray-900 mb-4">Registrar Programa</h1>     
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
                            <input type="text" class="form-control" id="buscarPensum" placeholder="Buscar Pensum">            
                        </div>
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-primary btnBuscar">Buscar</button>
                        </div>
                    </div>                  
                    <tr>       
                        <th>Descripcion</th>         
                        <th>Fecha</th>          
                        <th>Documento PDF</th>           
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
    </div>
</template>