Vue.component('toolbar', {
    template:
        `<v-toolbar color="white" dark  flat >
                      <!--  <v-btn color="white" depressed  href="index.html" >

                        </v-btn> -->
                        <v-spacer></v-spacer> <!-- deja espacio entre el search y boton de  notificaciones y settings -->


                        <v-btn text color="black">
                            HOW IT WORKS
                        </v-btn>
                        <v-btn text color="black">
                            ABOUT US
                        </v-btn>
                        <v-btn text color="black">
                            CONTACT US
                        </v-btn>
                        
            </v-toolbar>`,

})


Vue.component('areazone', {
    template: `<div>
                <v-btn icon href="index.html" >
                    <v-icon large> arrow_back_ios </v-icon>
                </v-btn>

                <p class="display-2 font-weight-medium" align="center">CHOOSE AREA</p>
                <br/>
                <v-row>
                    <v-col v-for="career in careers" :key="career"  cols="12" md="3" >
                        <v-card :elevation="21" height="200" type="button" >  <!-- hay que sacar height y ponerlo en un css-->
                            
                            <v-img :src="career.src" height="200" class="orange--text">
                                   <v-card-title class="align-end fill-height">
                                         <span>{{career.name}}</span>
                                   </v-card-title>
                            </v-img>

                        </v-card>
                    </v-col>
                </v-row>
             
            </div>`,
    data() {
        return {
            careers: [
                { name: 'Software Engineer', src:'src/software.jpg'},
                { name: 'Mechanical Engineer', src:'src/mechanical.jpeg'},
                { name: 'Industrial Engineer', src:'src/cds-industrial-engineering.jpg'},
                { name: 'Navy Engineer', src:'src/navy.jpg'},
                { name: 'Chemical Engineer', src:'src/chemical.jpg'},
                { name: 'Civil Engineer', src:'src/civil.jpg'},
                { name: 'Bio Engineer', src:'src/bio.png'},
                { name: 'Oil Engineer', src:'src/petroleo.jpg'}
            ]
        }
    }
})


new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {
        return {
            title: 'Your Logo'
        }
    }
})