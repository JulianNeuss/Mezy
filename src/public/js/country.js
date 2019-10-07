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
                            
                            <v-img :src="flag.src" height="170"> </v-img>
                            <h4  align="center"> {{flag.country}}</h4>
                        </v-card>
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
                { country: 'France', src:'../assets/france.png'},
                { country: 'Italy', src:'../assets/italy.svg'},
                { country: 'USA', src:'../assets/USA.png'},
                { country: 'China', src:'../assets/china.png'},
                { country: 'Australia', src:'../assets/australia.svg'},
                { country: 'Japan', src:'../assets/japan.svg'},
                { country: 'Germany', src:'../assets/germany.svg'},
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