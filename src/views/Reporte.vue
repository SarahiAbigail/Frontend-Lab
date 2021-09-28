<template>
    <div>
      <Header/>
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