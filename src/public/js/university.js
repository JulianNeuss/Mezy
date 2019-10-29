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