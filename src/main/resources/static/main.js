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
        :values="preciosProductos"
        label="Seleccionar producto" required  @input="setSelected" 
      ></v-select>        
    </v-col>
    </v-row>


    <v-card-text>
    <v-row align="center">

    <v-spacer></v-spacer>
      
      
      <v-col  cols="8">
      <v-col class="d-flex"  >
      <v-text-field color="success" class="d-flex right-input display-1" label="Peso (kg)" v-model="peso"  readonly> </v-text-field>
    </v-col>
  

  
    <v-col class="d-flex"  >
      <v-text-field color="success" class="d-flex right-input display-1"  label="Precio $" v-model="precio"  readonly align="right"> </v-text-field>
    </v-col>
  

  
    <v-col class="d-flex"  >
      <v-text-field color="success" class="d-flex right-input display-1"  label="Total $" v-model="total"  readonly align="right"> </v-text-field>
    </v-col>
  
      </v-col>
      <v-spacer></v-spacer>

    </v-row>
  </v-card-text>

    <v-card>
 
    
     

    </v-card>
 
    

    <v-row align="center">
    <v-col class="d-flex"  >        

    
        <v-btn class="mx-2"  @click="cancelar" fab dark color="red">
            <v-icon dark>mdi-trash-can</v-icon>
        </v-btn>
        
        <v-spacer></v-spacer>

        <v-btn class="mx-2" type="submit" fab dark color="indigo">
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn class="mx-2"  @click="guardarTodo" fab dark color="cyan">
            <v-icon>mdi-content-save</v-icon>
        </v-btn>
    </v-col>
  </v-row>
  
  </form>

 
  </v-container>    

    
    </div>`,
    data(){
        return {

            numero:0,            
            producto:null,
            peso:0,
            precio:0,
            total:0,
            bascula:"bascula1",
            basculas:["bascula1"],
            productos:["producto1","producto2"],
            preciosProductos:[5.5,10],
              

        }
    },
    methods: {
        limpiarCampos: function () {
            console.log("en limpiar tablas  x"+this);
            
            app.numeroRegistros = app.numeroRegistros+1;
            this.total= this.peso * this.precio;
            // app.nombreTabla='se limpia la tabla';
            app.snackbar=true;

            app.pesoTotal=app.pesoTotal + this.total;
            app.importeTotal=app.importeTotal + this.total;

            app.textoMensaje = "Registro agregado";
        
            app.pesadas.push(
                {
                    numero:app.numeroRegistros,
                    bascula:this.bascula,
                    producto:this.producto,
                    peso:this.peso,
                    precio:this.precio,
                    total:this.total
                }
            );
        },
        cancelar: function()
        {
            app.dialog="true"
            console.log("cancelar");
        },       
        guardarTodo: function()
        {
            app.numeroRegistros = 0;
            console.log("guardar");
            app.textoMensaje = "Operacion completada exitosamente";
            app.snackbar=true;
            app.limpiarTodo();
        },
        setSelected: function(arg)
        {            
            var i = this.productos.indexOf(arg);
            this.precio = this.preciosProductos[i];
            this.total= this.peso * this.precio;
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
            // {
            //   text: 'No',
            //   align: 'start',
            //   sortable: false,
            //   value: 'numero',
            // },
            // { text: 'Bascula', value: 'bascula' },
            { text: 'Producto', value: 'producto' },
            { text: 'Peso', value: 'peso' },
            { text: 'Precio', value: 'precio' },   
            { text: 'Total', value: 'total' },   
            { text: 'Acciones', value: 'acciones' },   
            
          ],        
       
        pesadas:[
        ],
        pesoTotal: 0,
        importeTotal: 0,
        numeroRegistros :0,
        snackbar: false,
        textoMensaje: 'Registro guardado',
        
        dialog: false,

              
      
    },
    methods:
    {
        confirmarCancelar: function()
        {
            app.dialog=false;

            this.limpiarTodo();

            console.log(" confirmar cancelar");
        },
        limpiarTodo: function()
        {
            app.pesadas=[];
            app.pesoTotal=0;
            app.importeTotal=0;
            app.numeroRegistros=0;
            console.log("limpiar todo");

        }
    }
});
