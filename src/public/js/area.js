Vue.component('areazone', {
    template: `<div>
                <v-btn icon href="../index.html" >
                    <v-icon large> arrow_back_ios </v-icon>
                </v-btn>

                <p class="display-2 font-weight-medium" align="center">CHOOSE AREA</p>
                <br/>
                <v-row>
                    <v-col v-for="career in careers" :key="career.name"  cols="12" md="3" >
                        <v-card flat height="200" type="button" >  <!-- hay que sacar height y ponerlo en un css-->
                            
                            <v-img :src="career.src" height="170"> </v-img>
                            <h4  align="center"> {{career.name}}</h4>
                        </v-card>
                    </v-col>
                </v-row>
             
            </div>`,
    data() {
        return {
            careers: [
                { name: 'Software Engineer', src:'../assets/software.jpg'},
                { name: 'Mechanical Engineer', src:'../assets/mechanical.jpeg'},
                { name: 'Industrial Engineer', src:'../assets/cds-industrial-engineering.jpg'},
                { name: 'Navy Engineer', src:'../assets/navy.jpg'},
                { name: 'Chemical Engineer', src:'../assets/chemical.jpg'},
                { name: 'Civil Engineer', src:'../assets/civil.jpg'},
                { name: 'Bio Engineer', src:'../assets/bio.png'},
                { name: 'Oil Engineer', src:'../assets/petroleo.jpg'}
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