Vue.component('countryzone', {
    template: `<div>
                <v-btn icon href="area.html" >
                    <v-icon large> arrow_back_ios </v-icon>
                </v-btn>

                <p class="display-2 font-weight-medium" align="center">SELECT COUNTRY</p>
                <br/>
                <v-row>
                    <v-col v-for="flag in flags" :key="flag.country"  cols="12" md="3" >
                        <v-card flat height="200" type="button" >  <!-- hay que sacar height y ponerlo en un css-->
                            
                            <v-img :src="flag.src" @click="fetch_country()" height="170"> </v-img>
                            <h4  align="center"> {{flag.country}}</h4>
                        </v-card>2
                    </v-col>
                </v-row>
                
                <br/>

               
                <v-row>
                        <v-col v-show="show == false">
                            <div class="text-center">
                                <v-btn x-large color="primary" @click="show= !show">MORE COUNTRY'S</v-btn>
                            </div>
                        </v-col>
                        
                       
                </v-row>
                <v-row>
                    <v-col v-show="show" v-for="more in moreflags" :key="more.country"  cols="12" md="3" >
                        <v-card flat height="200" type="button" >  <!-- hay que sacar height y ponerlo en un css-->
                            
                            <v-img :src="more.src" height="170"> </v-img>
                            <h4  align="center"> {{more.country}}</h4>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                        <v-col v-show="show">
                            <div class="text-center">
                                <v-btn x-large color="primary" @click="show= !show">LESS COUNTRY'S</v-btn>
                            </div>
                        </v-col>
                </v-row>
                
                
             
            </div>`,
    data() {
        return {
            show: false,
            flags: [
                { country: 'Germany', src:'../assets/germany.svg', id:1},
                { country: 'France', src:'../assets/france.png'},
                { country: 'Italy', src:'../assets/italy.svg'},
                { country: 'USA', src:'../assets/USA.png'},
                { country: 'China', src:'../assets/china.png'},
                { country: 'Australia', src:'../assets/australia.svg'},
                { country: 'Japan', src:'../assets/japan.svg'},
                { country: 'United Kingdom', src:'../assets/UK.png'}
            ],
            moreflags: [
                { country: 'Netherland', src:'../assets/netherland.png'},
                { country: 'South Korea', src:'../assets/korea.png'},
                { country: 'Denmark', src:'../assets/denmark.png'},
                { country: 'Chile', src:'../assets/chile.png'},
                { country: 'Brazil', src:'../assets/brazil.png'},
                { country: 'Belgium', src:'../assets/belgium.png'},
            ]
        }
    },

    methods:{
        fetch_country() {
            fetch('http://localhost:3000/api/uni/1')
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    console.log(myJson);
                });
        }
    }
    
})





// data: function() {
//     return {
//         addroom: false,
//         dialog: false,
//         addbutton: false,
//         items: [ ],
//         rooms: [ ], //aca me guardo el id, el name, la imagen y fav= false por default
//         /*{ name: 'PedroRoom', src: "../src/Living.jpg", id:lk12j4lk134}*/
//         roomtypes: ['Room', 'Living', 'Garage', 'Kitchen','Playroom'],
//         devices: [],
//         rules: [
//             v => !!v || 'Required',
//             v => !!v && v.length >= 3 || 'Name must be more than 3 characters',
//             v => !!v && v.length <= 60 || 'Name must be less than 60 characters',
//         ],
//     }
// },
// mounted() {
//     api.devicetypes.getAllDeviceTypes().then( ( r ) => {
//         for (let i of r.result){
//             if(i.name !== "vacuum" && i.name !== "lamp" && i.name !== "alarm")
//                 this.items.push({id: i.id, name: i.name});
//         }
//     });

//     api.room.getAll().then( (r) => {
//         for(let i of r.result){
//             this.rooms.push({id: i.id, name: i.name, src: "../src/" + i.meta.img + ".jpg", fav: i.meta.fav});
//         }
//         console.log(this.rooms);
//     });

//     api.device.getAll().then( r => {
//         for(let i of r.devices){
//             this.devices.push({id: i.id, name: i.name, fav: i.meta.fav, room:i.meta.deviceroom});
//         }
//         console.log(this.devices);
//     })

// },
// methods:{
//     roomadd(event) {
//         if(this.$refs.roomform.validate()){
//             api.room.add({
//                 name: this.$refs.nameselector.internalValue,
//                 meta:{
//                     fav: false,
//                     img: this.$refs.imageselector.internalValue
//                 }
//             }).then(r => {
//                 this.rooms.push({name: r.result.name, src: "../src/" + r.result.meta.img + ".jpg", id: r.result.id});
//             }).catch((err) => {
//                 console.error(err);
//             });
//             console.log(this.rooms);
//         }else{
//             console.error("Error en el formulario");
//         }
//         this.$refs.roomform.reset();
//     },
//     cancelform(){
//         this.$refs.roomform.reset();
//         this.roomname = '';
//         this.addroom = false
//     },

// }

// })












new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {
        return {
            title: 'Your Logo'
        }
    }
})