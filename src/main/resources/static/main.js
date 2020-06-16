Vue.component('player-card', {
    props: ['player'],
    template: `<div class="card">
                <div class="card-body">
                    <h6 class="card-title">
                        {{ player.name }}
                    </h6>
                    <p class="card-text">
                        <div>
                        {{ player.description }}
                        </div>
                    </p>
                </div>
            </div>`
});



Vue.component('form-pesadas',{
    template:`
    <div>

    <v-container fluid cols="12" sm="6">
    <form @submit.prevent="limpiarCampos">


    <v-row align="center">
      <v-col class="d-flex"  >
        <v-select v-model="bascula" 
          :items="basculas"
          label="Seleccionar bascula"
        ></v-select>        
      </v-col>
    </v-row>

    <v-row align="center">
    <v-col class="d-flex"  >
      <v-select v-model="producto" 
        :items="productos"
        label="Seleccionar producto"
      ></v-select>        
    </v-col>
    </v-row>

    <v-row align="center">
      <v-col class="d-flex"  >
        <v-text-field color="success" class="d-flex right-input" label="Peso" v-model="peso"  readonly> </v-text-field>
      </v-col>
    </v-row>   

    <v-row align="center">
      <v-col class="d-flex"  >
        <v-text-field color="success" class="d-flex right-input"  label="Precio" v-model="precio"  readonly align="right"> </v-text-field>
      </v-col>
    </v-row>   

    <v-row align="center">
      <v-col class="d-flex"  >
        <v-text-field color="success" class="d-flex right-input"  label="Total" v-model="total"  readonly align="right"> </v-text-field>
      </v-col>
    </v-row>   
    

    <v-row align="center">
    <v-col class="d-flex"  >
        <v-btn type="submit" color="primary" dark  >Agregar</v-btn>
    </v-col>
  </v-row>
  
  </form>

 
  </v-container>    

    
    </div>`,
    data(){
        return {

            numero:0,            
            producto:null,
            peso:0.0,
            precio:0.0,
            total:0.0,
            bascula:"bascula1",
            basculas:["bascula1"],
            productos:["producto1","producto2"]

        }
    },
    methods: {
        limpiarCampos: function () {
            console.log("en limpiar tablas "+this);
            this.numero= this.numero+1;
            // app.nombreTabla='se limpia la tabla';
            app.pesadas.push(
                {
                    numero:this.numero,
                    bascula:this.bascula,
                    producto:this.producto,
                    peso:this.peso,
                    precio:this.precio,
                    total:this.total
                }
            );

            
            
        }   
       }
    }
);




var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        nombreTabla:'Registro de pesos', 

        headers: [
            {
              text: 'No',
              align: 'start',
              sortable: false,
              value: 'numero',
            },
            // { text: 'Bascula', value: 'bascula' },
            { text: 'Producto', value: 'producto' },
            { text: 'Peso', value: 'peso' },
            { text: 'Precio', value: 'precio' },   
            { text: 'Total', value: 'total' },   
            
          ],
        
        asistentes:[
        ],
        pesadas:[
        ],
       
        players: [
            {id: "1", name: "Lionel Messi", description: "Argentina's superstar"},
            {id: "2", name: "Christiano Ronaldo", description: "Portugal top-ranked player"}
        ]
      
    }
});
