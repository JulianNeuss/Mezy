Vue.component('selector', {
  template: `<div>

  <areazone @end="show_countries" v-if="carreras" />
  <div v-else>
  <countryzone @end="show_unis" v-if="countries" />
  <div v-else>
      <university :country_id="selectedCountry" @end="show_subject" v-if="unis" />
      <div v-else>
      <showsubjects :uni_id="selectedUni" :career_id="selectedArea" />
      </div>
  </div>
  </div>

</div>`,
  data() {
      return {
          show: false,
          carreras: true,
          countries: false,
          unis:false,
          subjects: false,
          selectedArea: 1,
          selectedCountry: 1,
          selectedUni: 1
      }
  },

  methods:{  
      show_countries(id_area) {
          this.carreras = false;
          this.selectedArea = id_area;
          this.countries = true;
          console.log(id_area);
      },
      show_unis(id_country) {
          this.countries = false;
          this.selectedCountry = id_country;
          this.unis = true;
          console.log(id_country);
      },
      show_subject(id_uni) {
          this.unis = false;
          this.selectedUni = id_uni;
          this.subjects = true;
          console.log(id_uni);
      }
    }
  
})








Vue.component('parallax1', {
  template:
      `<section>
              <v-parallax id="content" src="assets/plane4.jpg" height="600">
                  <v-layout
                      column
                      align-center
                      justify-center
                      class="white--text"
                  >
              
                  <h1 class="black--text mb-2 display-1 text-center">Want to <b>Study Abroad?</b></h1>
              
              <v-btn
                      class="mt-12"
                      color="blue lighten-2"
                      dark
                      large
                      href="html/selector.html"
                  >
                  Get Started
              </v-btn>
              </v-layout>
              </v-parallax>
       </section>`,

}),







Vue.component('howitworks', {
  template:
      `<section>
                  <v-layout
                      column
                      wrap
                      class="my-12"
                      align-center
                  >
                  <v-flex xs12 sm4 class="my-4">
                      <div class="text-center">
                          <h2 class="headline">How it works</h2>
                      </div>
                  </v-flex>
                  
                  <v-flex xs12>
                  <v-container grid-list-xl>
                  <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                  <v-card flat class="transparent">
                      <v-card-text class="text-center">
                          <v-icon x-large class="blue--text text--lighten-2">mdi-palette</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                          <div class="headline text-center">Choose University & Country</div>
                      </v-card-title>
                  <v-card-text>
                  On the first place you should be thinking which type of adventure you would like to live. Think about weather, language, culture, courses and so on.
                  </v-card-text>
                  </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                  <v-card flat class="transparent">
                      <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Build your schedule</div>
                  </v-card-title>
                  <v-card-text>
                  Your next step is almost done by us. We hand you in all the precise information needed to prepare your calendar.
                  </v-card-text>
                  </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                  <v-card flat class="transparent">
                      <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Travel & Learn</div>
                      </v-card-title>
                      <v-card-text>
                      On the last part, enjoy the beatiful adventure you will encounter. Meet new people from all over the world. And the most important part of all, learn.
                  </v-card-text>
                  </v-card>
                  </v-flex>
                  </v-layout>
                  </v-container>
                  </v-flex>
                  </v-layout>
      </section>`,

}),








Vue.component('news', {
template:
    `<section>
                  <v-layout column wrap class="my-12 ma-12" align-center>
                  
                  <v-flex xs12 sm4 class="my-4">
                      <div class="text-center">
                          <h2 class="headline">Previous University Exchanges</h2>
                      </div>
                  </v-flex>
                  
                  <v-layout row wrap>  
                      <v-flex xs12 sm6 md4 lg3 v-for="article in news" :key="article.title">   
                          <v-card flat class="texst-xs-center ma-3">  
                              <v-responsive class="pt-4"> 
                                  <v-img :src="article.src" height="200px" width="300px"></v-img>
                              </v-responsive>
                              <v-card-text>   
                                  <div class="subheading">{{ article.title }}</div>
                                  <div class="grey--text">{{ article.subtitle }}</div>
                              </v-card-text>
                          </v-card>
                      </v-flex>
                  </v-layout>
                  
              
                  </v-layout>
      </section>`,
  data() {
      return {
          news: [
              { title: 'Korea 2012', subtitle:'German universities loom large in physics academic field.', src:'https://3.bp.blogspot.com/-yjeprA7SgSE/WZ1BDg0X8FI/AAAAAAAAAYs/AXGLYuGNF2wLcTbsfXN4JKWnoihoCCKzwCLcBGAs/s1600/ku04_september_2015.jpg'},
              { title: 'Portugal 2013', subtitle:'Each of these schools has taken actions that demonstrate their interest in more international exchanges.', src:'https://live.staticflickr.com/674/20714046868_48435ee111_b.jpg'},
              { title: 'Spain 2014', subtitle:'A law school very enthusiastic and specific. Extremely effective, experts say.', src:'https://www.eduopinions.com/wp-content/uploads/2018/03/Top-Universities-Business-Schools-To-Study-In-Spain-Part-II.jpg'},
              { title: 'Brazil 2015', subtitle:'Students should weigh carefully the power of learning new languages.', src:'https://www.birmingham.ac.uk/Images/News/Brazil-students-web.jpg'},
              { title: 'Germany 2016', subtitle:'German universities loom large in physics academic field.', src:'https://i.guim.co.uk/img/media/dd830158bdfe64b09169c8f903f211c73710e7a4/0_249_4800_2880/master/4800.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=4e44dd5ce09d288a36f2793239f0b229'},
              { title: 'France 2017', subtitle:'Each of these schools has taken actions that demonstrate their interest in more international exchanges.', src:'https://fee.org/media/18508/university_of_paris.jpg?anchor=center&mode=crop&width=1920&rnd=131303490260000000'},
              { title: 'UK 2018', subtitle:'A law school very enthusiastic and specific. Extremely effective, experts say.', src:'https://static.studyin-uk.com/assets/study-guide/university-cambridge.jpg'},
              { title: 'China 2019', subtitle:'Students should weigh carefully the power of learning new languages.', src:'https://www.latrobe.edu.au/students/opportunities/exchange/partners/images/asia/East-China-Normal-University.jpg/preview.jpg'}

          ]
      }
  }

}),







Vue.component('parallax2', {
  template:
      `<section>
              <v-parallax src="assets/image3.jpg" height="380">
                  <v-layout column align-center justify-center>
              <div class="headline white--text mb-4 text-center"><b>Studying abroad has never been easier</b></div>
              <div class="subheading white--text mb-4 text-center">Start your application today</div>
              <v-btn
              class="mt-12"
              color="blue lighten-2"
              dark
              large
              href="html/selector.html"
                  >
                  Get Started
              </v-btn>
              </v-layout>
              </v-parallax>
         </section>`,

}),







Vue.component('aboutcontact', {
  template:
      `<section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
          <v-flex xs12 sm4>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">About Us</div>
              </v-card-title>
              <v-card-text >
                Analyzes, develops and implements faculty-led education abroad programs to ensure effectiveness and compliance requirements related to identified priorities, credit requirements, financial parameters and risk and crisis management and communication; analyzes data and assesses needs and opportunities.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Feel free to get in touch with us!
              </v-card-text>
              <v-list class="transparent">
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>+54 9 11 1234 5678</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Buenos Aires, ARG</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>john@gmail.com</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>`,

}),








  Vue.component('countryzone', {
      template: `<div>
              <!-- <v-btn icon href="selector.html" >
                  <v-icon large> arrow_back_ios </v-icon>
              </v-btn> -->

              <p class="display-2 font-weight-medium" align="center">SELECT COUNTRY</p>
              <br/>
              
              <!-- Viejo: sin conexion con la api
              <v-row>
                  <v-col v-for="flag in flags" :key="flag.country"  cols="12" md="3" >
                      <v-card flat height="200" type="button" > 
                          
                          <v-img :src="flag.src" @click="send_end(1)" height="170"> </v-img>
                          <h4  align="center"> {{flag.country}}</h4>
                      </v-card>
                  </v-col>
              </v-row>
              -->
              
              
              <v-row>
                  <v-col v-for="country in countries" :key="country.name"  cols="12" md="3" >
                      <v-card flat height="200" type="button" > 
                          
                          <v-img :src="country.src" @click="send_end(country.id)" height="170"> </v-img>
                          <h4  align="center"> {{country.name}}</h4>
                      </v-card>
                  </v-col>
              </v-row> 
              
              <br/>

              <!--  TODO comentado por que ya no lo necesitamos mas
              <v-row>
                      <v-col v-show="show == false">
                          <div class="text-center">
                              <v-btn x-large color="primary" @click="show= !show">MORE COUNTRY'S</v-btn>
                          </div>
                      </v-col>
                      
                     
              </v-row>
              <v-row>
                  <v-col v-show="show" v-for="more in moreflags" :key="more.country"  cols="12" md="3" >
                      <v-card flat height="200" type="button" >  
                          
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
              </v-row> -->
              
              
           
          </div>`,
      data: function(){
          return {
              countries: [ ],
              show: false
          }
      },
      mounted: function() {
          let $vm = this;
          fetch('http://localhost:3000/api/countries.json').then(function(response) {
              return response.json();
          })
              .then(function(myJson) {
                  for(let i of myJson){
                      $vm.countries.push({id: i.id, name: i.name, src: i.src});
                  }
                  console.log($vm.countries);
              });
      },

      methods: {
          send_end(id) {
              this.$emit('end',id);
          }
      }

  }),







  Vue.component('areazone', {
      template: `<div>
              <!-- <v-btn icon href="../index.html" >
                  <v-icon large> arrow_back_ios </v-icon>
              </v-btn> -->

              <p class="display-2 font-weight-medium" align="center">CHOOSE AREA</p>
              <br/>
              <v-row>
                  <v-col v-for="career in careers" :key="career.name"  cols="12" md="3" >
                      <v-card flat height="200" type="button" >  <!-- hay que sacar height y ponerlo en un css-->
                          
                          <v-img :src="career.src" @click="send_end(career.id)" height="170"> </v-img>
                          <h4  align="center"> {{career.name}}</h4>
                      </v-card>
                  </v-col>
              </v-row>
           
          </div>`,
      data() {
          return {
              careers: [ ]
          }
      },

      mounted: function() {
          let $vm = this;
          fetch('http://localhost:3000/api/carreers.json').then(function(response) {
              return response.json();
          })
              .then(function(myJson) {
                  for(let i of myJson){
                      $vm.careers.push({id: i.id, name: i.name, src: i.src});
                  }
                  console.log($vm.careers);
              });
      },

      methods: {
          send_end(id) {
              this.$emit('end',id);
          }
      }

  }),







  Vue.component('university', {
      template: `<div>
              <!-- <v-btn icon href="country.html" >
                  <v-icon large> arrow_back_ios </v-icon>
              </v-btn> -->
 
              <p class="display-2 font-weight-medium" align="center">AVAILABLE UNIVERSITIES</p>
              <br/>
              <v-row>
                  <v-col v-for="flag in flags" :key="flag.country"  cols="12" md="3">
                          <v-img :src="flag.src"  @click=send_end(flag.id) type="button" height="170" width="170" color="rgb(255, 0, 0, 0.2)"> </v-img>
                          <h4  align="center"> {{flag.country}}</h4>
                  </v-col>
              </v-row>
              
              <br/>
           
          </div>`,
      props: {  
          country_id: Number 
          },
      data() {
          return {
              show: false,
              flags: [ ]
          }
      },

      mounted: function() {
          let $vm = this;
          let $country_id = this.country_id;
          fetch('http://localhost:3000/api/uni/' + $country_id).then(function(response) {
              return response.json();
          })
              .then(function(myJson) {
                  for(let i of myJson){
                      $vm.flags.push({id: i.id, name: i.name, src: i.src});
                  }
                  console.log($vm.flags);
              });
      },
      methods: {
          send_end(id) {
              this.$emit('end',id);
          }
      }
  }),




  



  Vue.component('showsubjects', {

      template: `<div>
              <!-- <v-btn icon href="university.html" >
                  <v-icon large> arrow_back_ios </v-icon>
              </v-btn> -->

              <p class="display-2 font-weight-medium" align="center">AVAILABLE COURSE</p>
              <br/>
             
              
              <v-simple-table fixed-header height="500px">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-center">ITBA's COURSE</th>
                        <th class="text-center">FOREING EQUIVALENT COURSE</th>
                        <th class="text-center">ACCEPTANCE STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="course in courses" :key="course.materia_itba">
                        <td class="text-center">{{ course.itba }}</td>
                        <td class="text-center">{{ course.extern }}</td>
                        <td class="text-center">{{ course.status }}</td>
                      </tr>
                    </tbody>
                  </template>
               </v-simple-table> 

           
          </div>`,
      props: {  
          uni_id: Number,
          area_id: Number
          },
      data() {
          return {
              show: false,
              courses: [ ]
          }
      },
      mounted: function() {
        let $vm = this;
        let $uni_id = this.uni_id;
        let $area_id = this.area_id;
        console.log('http://localhost:3000/api/course/' + $uni_id + '/' + $area_id);
        fetch('http://localhost:3000/api/course/' + $uni_id + '/' + 3).then(function(response) {
            return response.json();
        })
            .then(function(myJson) {
                for(let i of myJson){
                    $vm.courses.push({extern: i.materia_externa, itba: i.materia_itba, status: i.Estado});
                }
                console.log($vm.courses);
            });
    },

  })


new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {

  }
})