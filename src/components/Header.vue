<template>
<div>
    <div class="navbar navbar-expand-lg navbar-dark bg-dark menu">       
        <h3 class="navbar-brand style-4">Registro Académico DCyT                           
            school</h3>              
            
        <button class="navbar-toggler" data.toggle="collapse" data.target="#mylist">                                 
            <span class="navbar-toggler-icon"></span>                       
        </button>               
                  
        <div class="collapse navbar-collapse justify-content-end" id="mylist" >                   
            <div class="navbar-nav">                              
                 <router-link :to="{name:'Pensum'}" class="nav-link style-3">Gestionar Pensum</router-link> 
                <router-link :to="{name:'User'}" class="nav-link style-3">Gestionar Usuarios</router-link>
                <router-link :to="{name:'Programa'}" class="nav-link style-3">Gestionar Programas</router-link>
                <router-link :to="{name:'Reporte'}" class="nav-link style-3">Gestionar Reporte</router-link>
                <router-link :to="{name:'Home'}" class="nav-link style-3">Cerrar Sesión</router-link>                              
            </div>      
        </div>                              
    </div>  
</div>
</template>