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
                { country: 'Germany', src:'../assets/germany.svg', id:1},
                { country: 'Australia', src: '../assets/australia.svg', id:2},
                { country: 'Austria', src:'../assets/belgium.png' , id:3 },
                { country: 'Belgium', src:'../assets/belgium.png', id:4},
                { country: 'Brazil', src:'../assets/brazil.png', id:5},
                { country: 'Chile', src:'../assets/chile.png', id:6},
                { country: 'China', src:'../assets/china.png', id:7},
                { country: 'Colombia', src: '../assets/belgium.png', id:8}
            ],
            moreflags: [
                { country: 'South Korea', src:'../assets/korea.png', id:9},
                { country: 'Denmark', src:'../assets/denmark.png',id:10},
                { country: 'Spain', src:'../assets/belgium.png' , id:11},
                { country: 'USA', src:'../assets/USA.png', id:12},
                { country: 'France', src:'../assets/france.png', id: 14},
                { country: 'Netherland', src:'../assets/netherland.png', id:15},
                { country: 'Indonesia', src: '../assets/belgium.png', id:16},
                { country: 'Israel', src: '../assets/belgium.png', id:17},
                { country: 'Italy', src:'../assets/italy.svg', id:18},
                { country: 'Panama', src:'../assets/UK.png', id:23},
                { country: 'Portugal', src:'../assets/UK.png', id:24},
                { country: 'UnitedKingdom', src:'../assets/UK.png', id:25},
                { country: 'Singapore', src:'../assets/UK.png', id:26},
                { country: 'Sweden', src:'../assets/UK.png', id:27},
                { country: 'Czech Republic', src:'../assets/UK.png', id:28},

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




,Vue.component('areazone', {
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
,
Vue.component('university', {
    template: `<div>
                <v-btn icon href="country.html" >
                    <v-icon large> arrow_back_ios </v-icon>
                </v-btn>

                <p class="display-2 font-weight-medium" align="center">AVAILABLE UNIVERSITIES</p>
                <br/>
                <v-row>
                    <v-col v-for="flag in flags" :key="flag.country"  cols="12" md="3">
                            <v-img :src="flag.src" class='imgRedonda' type="button"> </v-img>
                            <h4  align="center"> {{flag.country}}</h4>
                    </v-col>
                </v-row>
                
                <br/>
             
            </div>`,
    data() {
        return {
            show: false,
            flags: [
                { country: 'Wuhan University', src:'../assets/Wuhan.png'},
                { country: 'Beijing Institute of T.', src:'../assets/Beijing_Institute_of_Technology.png'},
                { country: 'Nanjing University', src:'../assets/Nanjing_University_Logo.png'},
                { country: 'South China University', src:'../assets/south_china.jpeg'},
                { country: 'Shandong University', src:'../assets/shandong.png'},
                { country: 'Peking University', src:'../assets/peking.png'},
                { country: 'Shanghai University', src:'../assets/shanghai.png'},
                { country: 'Tsinghua University', src:'../assets/Tsinghua University.png'}
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