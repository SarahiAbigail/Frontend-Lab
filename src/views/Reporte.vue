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
        <div class="text-center">
        <h1 class="h4 text-gray-900 mb-4">
            Cantidad de Pensum por Registrados por Programa 
        </h1>
    </div>
<div class="containerTabla">
    <div class="container-fluid text-center">
        <div class="row col-md-6 col-md-offset-2 custyle">
          <table class="table table-hover custab">
            <thead>
              <div class="input-group">
                <div class="col-md-10">
                  <input
                    type="text"
                    class="form-control"
                    id="buscarPensum"
                    placeholder="Buscar Pensum"
                  />
                </div>
                <div class="input-group-btn">
                  <button type="button" class="btn btn-primary btnBuscar">
                    Buscar
                  </button>
                </div>
              </div>
              <tr>
                <th>Cantidad de Pensum</th>
                <th class="text-center">Programa</th>
              </tr>
            </thead>

            <tr>
              <td>1</td>

              <td>News</td>
            </tr>

            <tr>
              <td>2</td>

              <td>Products</td>
            </tr>
          </table>
        </div>
      
    </div>
</div>
    </div>
</template>