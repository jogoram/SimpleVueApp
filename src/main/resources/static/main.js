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



Vue.component('form-registro',{
    template:`
    <div>
    <form @submit.prevent="limpiarCampos">
        <div class="form-group">
            <label for="nombre">Nombre</label>
            <input v-model="nombre" type="text" class="form-control">
        </div>
        <div class="form-group">
            <label for="apellido">Apellido</label>
            <input  v-model="apellido"  type="text" class="form-control">
        </div>
        <div class="form-group">
            <label for="fechaN">Fecha de nacimiento</label>
            <input  v-model="fechaNacimiento"  type="date" class="form-control">
        </div>                    
        
        <v-btn type="submit" color="primary" dark  >Agregar</v-btn>
    </form>
    </div>`,
    data(){
        return {
            nombre:null,
            apellido:null,
            fechaNacimiento:null
        }
    },
    methods: {
        limpiarCampos: function () {
            console.log("en limpiar tablas "+this);
            
            app.nombreTabla='se limpia la tabla';
            app.asistentes.push(
                {
                    nombre:this.no,
                    nombre:this.nombre+' '+this.apellido,
                    edad:"37",
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
              value: 'no',
            },
            { text: 'Nombre', value: 'nombre' },
            { text: 'Edad', value: 'edad' },
            
            
          ],
        
        asistentes:[
        ],
       
        players: [
            {id: "1", name: "Lionel Messi", description: "Argentina's superstar"},
            {id: "2", name: "Christiano Ronaldo", description: "Portugal top-ranked player"}
        ]
      
    }
});
