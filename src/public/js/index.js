Vue.component('parallax1', {
    template:
        `<section>
                <v-parallax id="content" src="assets/plane1.jpg" height="600">
                    <v-layout
                        column
                        align-center
                        justify-center
                        class="white--text"
                    >
                
                    <h1 class="white--text mb-2 display-1 text-center">Want to <b>Study Abroad?</b></h1>
                
                <v-btn
                        class="mt-12"
                        color="blue lighten-2"
                        dark
                        large
                        href="html/area.html"
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
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
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
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
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
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                    </v-card>
                    </v-flex>
                    </v-layout>
                    </v-container>
                    </v-flex>
                    </v-layout>
        </section>`,

}),
Vue.component('parallax2', {
    template:
        `<section>
                <v-parallax src="assets/section.jpg" height="380">
                    <v-layout column align-center justify-center>
                <div class="headline white--text mb-4 text-center">Studying abroad has never been easier</div>
                <em>Start your application today</em>
                <v-btn
                class="mt-12"
                color="blue lighten-2"
                dark
                large
                href="html/area.html"
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
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>777-867-5309</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Chicago, US</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>john@vuetifyjs.com</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>`,

})

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {

    }
})
