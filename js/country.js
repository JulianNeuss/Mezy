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
                { country: 'France', src:'../src/france.png'},
                { country: 'Italy', src:'../src/italy.svg'},
                { country: 'USA', src:'../src/USA.png'},
                { country: 'China', src:'../src/china.png'},
                { country: 'Australia', src:'../src/australia.svg'},
                { country: 'Japan', src:'../src/japan.svg'},
                { country: 'Germany', src:'../src/germany.svg'},
                { country: 'United Kingdom', src:'../src/UK.png'}
            ],
            moreflags: [
                { country: 'Netherland', src:'../src/netherland.png'},
                { country: 'South Korea', src:'../src/korea.png'},
                { country: 'Denmark', src:'../src/denmark.png'},
                { country: 'Chile', src:'../src/chile.png'},
                { country: 'Brazil', src:'../src/brazil.png'},
                { country: 'Belgium', src:'../src/belgium.png'},
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