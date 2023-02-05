<template>
  <v-app id="home">
    <v-container fluid>
      <div class="head">
        <v-row>
          <!-- <v-col cols="4">
            <div style="position: relative">
            <v-img style="height: 500px" max-height="500" src="@/assets/9.gif"></v-img>
          </div>
          </v-col> -->
          <v-col cols="6">
            <div style="position: relative; margin-left: 20px;" class="mt-16">
              <h1 class="text-grey">Hi!</h1>
              <h1 class="text-white">I'm Rukshan Karannagoda</h1>

              <div class="codingfont">
                <span class="text-grey"><span class="typed">Web and Mobile App Development Enthusiast</span><br />
                  <span>Undergraduate</span><br />Faculty of IT <br /> University of Moratuwa</span>
              </div>

              <br />
              <v-btn tile dark class="text-secondary mt-8" variant="outlined" @click="scroll('contact')">Contact
                Me</v-btn>
            </div>
          </v-col>
          <!-- <v-col cols="12" sm="4">
            <v-img style="height: 500px" src="@/assets/8.png"></v-img>
          </v-col> -->
          <v-col cols="6" style="margin-right: 0; padding-right: 0;">
            <div style="position: relative;">
              <v-img style="height: 400px" src="@/assets/15.png"></v-img>
            </div>
          </v-col>




          <!-- <v-col cols="4">
            <div style="position: relative" class="mt-16">
              <h1 class="text-grey">Hi!</h1>
              <h1 class="text-white">I'm Rukshān Karannāgoda</h1>
              <span class="text-grey">Web and Mobile Developer | Undergraduate</span>
              <br />
              <v-btn tile dark class="text-cyan mt-8" variant="outlined" @click="scroll('contact')">Contact Me</v-btn>
            </div>
          </v-col>
          <v-col cols="4">
            <div style="position: relative; z-index: 9998;" class="mt-16">
              <v-img class="imagemask" src="@/assets/dp.png" contain max-height="250"></v-img>
            </div>
          </v-col>
          <v-col cols="4">

            <div style="position: relative; z-index: 9999;" class="mt-16">
              <h3 class="text-grey">Bienvenue!</h3><br />
              <h3 class="text-grey">你好!</h3><br />
              <h3 class="text-grey">안녕하세요!</h3><br />
              <h3 class="text-grey">ආයුබෝවන්!</h3><br />
              <h3 class="text-grey">வணக்கம்!</h3><br />
              <h3 class="text-grey">はじめまして!</h3>
            </div>
          </v-col> -->
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <v-img src="@/assets/14.png" style="height:400px; width: auto"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h2 class="mt-16" style="color:white">About Me</h2>
              <div style="width:120px">
                <v-progress-linear color="tertiary" indeterminate rounded height="6"></v-progress-linear>
                <!-- <v-slider v-model="slider2" color="tertiary"></v-slider> -->
              </div>
              <br />
              <div>
                <h3 class="mt-n4" style="color:white">I am a highly motivated, enthusiastic undergraduate</h3>
                <h4 style="color:white">of the Faculty of Information Technology, University of Moratuwa.</h4>
                <p class="text-white">
                  I'm interested in Web and Android development, Data Science and Machine Learning.
                  <br />
                  I'm
                  a highly motivated person, and I'm committed to work.
                  <br />
                  Currently, I have experience in Java, Python and
                  C
                  programming
                  <br />
                  and React, Angular and Ionic web and android development.
                  <br />
                  I aspire to further improve my skills and expertise while being up to date about the latest
                  developments
                  to meet the changing demands of the IT world.
                </p>
                <br />
              </div>
              <v-btn tile color="secondary" class="mt-4" :href="cvDownload" target="_blank">Download CV</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <div class="text-center mt-4">
        <h2 style="color:white">My Projects</h2>
        <div style="width: 120px; margin: 0 auto">
          <!-- <v-slider v-model="slider2" color="secondary"></v-slider> -->
          <v-progress-linear color="tertiary" indeterminate rounded height="6" style="margin: 5px"></v-progress-linear>
        </div>
      </div>
      <v-col cols="12" class="padd">
        <v-lazy v-model="isActive[0]" :options="{ threshold: .5 }" transition="slide-y-transition">
          <div>
            <h3 class="text-white text-center">Technologies</h3>

            <div class="text-center">
              <v-icon icon="mdi-language-java" color="secondary" size="60px"></v-icon>
              <v-icon icon="mdi-react" color="secondary" size="60px"></v-icon>
              <v-icon icon="mdi-angular" color="secondary" size="60px"></v-icon>
              <v-icon icon="mdi-language-python" color="secondary" size="60px"></v-icon>
              <v-icon icon="mdi-alpha-c-circle" color="secondary" size="60px"></v-icon>
              <v-icon icon="mdi-vuejs" color="secondary" size="60px"></v-icon>
              <v-icon icon="mdi-language-php" color="secondary" size="60px"></v-icon>
              <v-icon icon="mdi-nodejs" color="secondary" size="60px"></v-icon>
              <v-icon icon="mdi-leaf-circle" color="secondary" size="60px"></v-icon>
              <v-icon icon="mdi-database" color="secondary" size="60px"></v-icon>
              <v-icon icon="mdi-git" color="secondary" size="60px"></v-icon>
              <v-icon icon="mdi-language-kotlin" color="secondary" size="60px"></v-icon>

            </div>
          </div>
        </v-lazy>

      </v-col>
      <v-col cols="12" class="padd" id="portfolio">
        <!-- <div class="first" id="project">
          <v-row>
            <v-col cols="12">
              <div class="child">
                <v-btn icon="mdi-laptop" color="secondary" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4"> Web Development </h3>
                <p class="text-grey ml-3 mt-4 text-caption">I am interested in web development work <br /> SOmething
                  something</p>
              </div>
              <div class="child">
                <v-btn icon="mdi-cellphone" color="secondary" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4"> Mobile Development </h3>
                <p class="text-grey ml-3 mt-4 text-caption">Something Something <br /> SOmething something</p>
              </div>
              <div class="child">
                <v-btn icon="mdi-graph" color="secondary" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4">Data Science & ML</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                  <br />consectetur adipis
                </p>
              </div>
            </v-col>
          </v-row>
        </div> -->
      </v-col>

      <v-col cols="12" class="mt-16" id="timeline">
        <v-lazy v-model="isActive[1]" :options="{
          threshold: .5
        }" min-height="200" transition="slide-y-reverse-transition">
          <div>
            <h2 class="text-white text-center">Timeline</h2>
            <v-timeline line-color="grey" align="start">
              <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="small">
                <template v-slot:opposite>
                  <div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year"></div>
                </template>
                <div>
                  <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
                    {{ year.project }}
                  </h2>
                  <div class="text-white">
                    {{ year.desc }}
                  </div>
                  <div class="text-secondary codingfont">
                    {{ year.tech }}
                  </div>
                  <div>
                    <v-btn tile dark color="secondary" rounded variant="outlined" class="mt-4" :href="year.link.link">{{
                      year.link.desc
                    }}</v-btn>
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </div>
        </v-lazy>
      </v-col>

      <v-col cols="12" sm="12">
        <div class="d-flex justify-center mb-6">
          <v-btn rounded color="secondary" class="mt-4" href="https://github.com/rukshankr?tab=repositories"
            target="_blank">See
            More Github Repos</v-btn>
        </div>
      </v-col>


      <v-col cols="12" id="blogs">
        <v-lazy v-model="isActive[2]" :options="{
          threshold: .5
        }" min-height="200" transition="slide-y-reverse-transition">
          <div>
            <div class="text-center text-white mt-4">
              <h2>My Blogs</h2><br />
            </div>
            <div style="width: 120px; margin: 0 auto">
              <v-progress-linear color="tertiary" indeterminate rounded height="6"
                style="margin: 5px"></v-progress-linear>
            </div>

            <div>
              <v-sheet color="primary" cycle class="mx-auto" max-width="1000">
                <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                  <v-slide-group-item v-for="(blog, i) in blogs" :key="i" v-slot="{ isSelected, toggle }">
                    <v-card color="grey-darken-2" class="ma-4" height="400" width="400" @click="toggle">
                      <div class="text-center"><v-card-title>{{ blog.title }}</v-card-title></div>

                      <div class=" fill-height text-center align-center justify-center">
                        <v-scale-transition>
                          <v-img height="200" :src="blog.img"></v-img>
                        </v-scale-transition>
                        <v-card-subtitle>{{ blog.subtitle }}</v-card-subtitle>
                        <p>{{ blog.desc }}</p>
                        <v-btn color="black" :href="blog.link">Read More</v-btn>
                      </div>

                    </v-card>
                  </v-slide-group-item>
                </v-slide-group>
              </v-sheet>
            </div>
            <!-- <div class="pre">
          <v-row>
            <div class="text-center justify-center">
              <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
                <v-carousel-item v-for="(blog, i) in blogs" :key="i" :src="blog.img" cover>
                  <v-sheet class="carousel-wording" :color="blog.color" height="50%" tile>
                    <div class=" fill-height justify-center align-center">
                      <div class="text-h4">
                        {{ blog.title }}
                      </div><br />
                      <div class="text-h6">
                        {{ blog.subtitle }}
                      </div>
                      <p>{{ blog.desc }}</p>
                    </div>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </div>
          </v-row>
        </div> -->

            <v-col cols="12" sm="12" id="interests">
              <v-lazy v-model="isActive[3]" :options="{
                threshold: .5
              }" min-height="200" transition="slide-y-reverse-transition">
                <div>
                  <div class="text-center text-white mt-4">
                    <h2>My Interests</h2><br />
                    <div style="width: 120px; margin: 0 auto">
                      <v-progress-linear color="tertiary" indeterminate rounded height="6"
                        style="margin: 5px"></v-progress-linear>
                    </div>
                    <div style="width: 120px; margin: 0 auto"><br />
                    </div>
                  </div>
                  <div class="text-center justify-center mb-6">
                    <v-btn v-for="(interest, i) in interests" :key="i" class="mr-2" rounded="pill" variant="tonal"
                      color="secondary">{{ interest.name }}
                      <v-tooltip activator="parent" location="bottom">{{ interest.description }}</v-tooltip>
                    </v-btn>
                  </div>
                </div>
              </v-lazy>
            </v-col>
          </div>
        </v-lazy>
      </v-col>
      <v-col cols="12" sm="12" class="px-16" id="contact">
        <v-row>
          <v-col cols="12" sm="4">
            <div class="child text-white">
              <h1>Contact info.</h1>
              <v-btn icon="mdi-email" color="secondary" class="mt-10" variant="outlined"></v-btn><br />
              <span class="text-caption">rukshankr8@gmail.com </span> <br />
              <span class="text-caption">ruksh44n@gmail.com </span> <br />
              <v-btn icon="mdi-phone" color="secondary" class="mt-10" variant="outlined"></v-btn><br />
              <span class="text-caption">+94 77 6087 970 </span> <br />
              <span class="text-caption">+94 78 7238 091 </span> <br />
              <v-btn icon="mdi-map-marker" color="secondary" class="mt-10" variant="outlined"></v-btn><br />
              <span class="text-caption">No. 41/1, Sri Ariyavilasa road, Horana </span><br />
            </div>
          </v-col>
          <v-col cols="12" sm="8">
            <h1 class="mt-8 text-white">Send me a message</h1>
            <v-divider></v-divider>
            <span class="text-caption text-grey-lighten-3">If you're ever in need of my services, or have any other
              comments about the
              quality of my work just let me know your name and phone number
              and leave me a message!</span>
            <form action="mailto:ruksh44n@gmail.com" method="post" target="_blank" enctype="text/plain">
              <v-row class="mt-10">

                <v-col cols="12" sm="6">
                  <v-text-field color="secondary" name="name" class="text-secondary" placeholder="enter name"
                    label="Name" persistent-hint variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field color="secondary" name="phone-no" class="text-secondary" placeholder="enter contact no"
                    label="Phone Number" persistent-hint variant="outlined"></v-text-field>
                </v-col>
              </v-row>
              <v-textarea color="secondary" name="message" class="text-secondary" placeholder="enter message"
                label="Message" persistent-hint variant="outlined"></v-textarea>
              <v-btn type="submit" color="secondary" class="mt-2">SEND Message</v-btn>
            </form>
          </v-col>
        </v-row>
      </v-col>


      <v-footer>

        <v-card elevation="0" rounded="0" width="100%" class="bg-primary text-center">
          <v-card-text>
            <v-lazy v-model="isActive[4]" :options="{ threshold: .5 }" transition="slide-y-reverse-transition">
              <div>
                <v-btn style="margin-right: 5px; margin-left: 5px;" class="mw-4 footerbtn" icon="mdi-linkedin"
                  color="secondary" href="https://www.linkedin.com/in/rukshankr/" target="_blank"></v-btn>
                <v-btn style="margin-right: 5px; margin-left: 5px;" class="mw-4 footerbtn" icon="mdi-github"
                  color="secondary" href="https://github.com/rukshankr" target="_blank"></v-btn>
                <v-btn style="margin-right: 5px; margin-left: 5px;" class="mw-4 footerbtn" icon="mdi-twitter"
                  color="secondary" href="https://twitter.com/rukshankr" target="_blank"></v-btn>
                <v-btn style="margin-right: 5px; margin-left: 5px;" class="mw-4 footerbtn" icon="mdi-alpha-m-circle"
                  color="secondary" href="https://medium.com/@rukshankr8" target="_blank"></v-btn>
                <v-btn style="margin-right: 5px; margin-left: 5px;" class="mw-4" icon="mdi-youtube" color="secondary"
                  href="https://www.youtube.com/@rukshankr" target="_blank"></v-btn>
              </div>
            </v-lazy>
          </v-card-text>
          <v-card-text class="text-white">
            Designed and built by
            <strong>Rukshan Karannagoda, {{ new Date().getFullYear() }}</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
// import { createCssTransition } from 'vuetify/components/transitions/createTransition';

// const myTransition = createCssTransition('my-transition');

// Vue.component('my-transition', myTransition);


const isActive = ref([false, false, false, false, false]);

const cvDownload = ref('https://drive.google.com/file/d/1gEUFyS6dVZI4R9pEAjv72tBIeXoe9cz2/view?usp=sharing');

const slider2 = ref(50);


const interests = ref([
  {
    name: 'Badminton',
    description: ''
  },
  {
    name: 'Volunteering',
    description: 'I am a Rotaractor and Web Content Writer for the Rotaract Club of University of Moratuwa since 2019 and have chaired the Consonance (2019) project which was a joint bulletin between the Rotaract Club of Nicosia and Rotaract Mora.'
  },
  {
    name: 'Singing',
    description: 'I was a chorister of the Royal College choir and a chorister of the Classical Music Society of University of Moratuwa.'
  },
  {
    name: 'Linguistics',
    description: ''
  },
  {
    name: 'Gavel',
    description: ''
  },
  {
    name: 'Blogging',
    description: 'I was a technology evangelist during my internship at WSO2 Lanka (Pvt.) Ltd and I continue technological and linguistic evangelization via Medium.'
  },
  {
    name: 'Guitar',
    description: ''
  },
  {
    name: 'Wikipedia Contribution',
    description: ''
  },
]);
const years = ref([
  {
    color: 'secondary',
    year: '2022',
    project: 'A.F.R - CodeGen International',
    desc: 'I am one of the lead developers and undergraduate researchers behind the Automatic Food Recognition project (A.F.R). A.F.R is a multiplatform food calorie tracking and recommendation application that utilizes Deep Learning (DL) modules to detect food items on a plate and estimate the food area and volume for calorie calculations.',
    tech: 'YOLO | Python | Numpy | Pandas | PyTorch',
    link: {
      desc: 'ongoing',
      link: ''
    }
  },
  {
    color: 'secondary',
    year: '2022',
    project: 'Industrial Internship - WSO2 Lanka (Pvt.) Ltd',
    desc: 'I was the Project Manager of the project “Implementing Try-It Capabilities for Social Identity Providers on Asgardeo”. I skilfully managed the project towards successful completion and focused on backend development while designing the frontend as well as the baseline research aspects of the project.',
    tech: 'Java | React | Spring | Maven | OSGi | Docker | Nginx',
    link: {
      desc: 'Service Letter',
      link: 'https://www.linkedin.com/in/rukshankr/details/experience/1635511219704/single-media-viewer/?profileId=ACoAACupa-cB21SnTWwSPkpLfEC7hcb2gXPKuqY'
    }
  },
  {
    color: 'secondary',
    year: '2021',
    project: 'M.A.R.T.I.S - ShipXpress-Wabtec Corporation',
    desc: 'I was one of the main developers of M.A.R.T.I.S : a multiplatform railway asset tracking and inspecting system that incorporates various functionalities such as geolocation, google maps, network detection and offline functionality, report generation and emailing capability to direct users and facilitate management of railway assets and inspections. I successfully handled the mobile and offline functionalities of the protect and developed the Asset Creation, Asset Dashboard and Syncing modules',
    tech: 'Angular | Ionic | MySQL | Express JS | SQLite',
    link: {
      desc: 'GitHub Repo',
      link: 'https://github.com/rukshankr/UoML2-ngMartis'
    }
  },

  {
    color: 'secondary',
    year: '2018',
    project: 'Pelapotha+ - DigiEduHack Submission - AR Project',
    desc: 'PelaPotha+ is a mobile Augmented Reality application that identifies images and texts in a textbook using your mobile phone camera and displays interesting information, 3D models, audio and video pertaining to the lessons on the textbook.',
    tech: 'Unity Engine | Vuforia SDK | C#',
    link: {
      desc: 'YouTube Video',
      link: 'https://www.youtube.com/watch?v=Rg1qE8NElOI'
    }
  },
  {
    color: 'secondary',
    year: '2018',
    project: 'Robo-Greeter - Level 1 Hardware Project',
    desc: 'A  simple Graphical User Interface that played videos for greetings and showing directions when prompted by an AtMega32A microcontroller was coded by me on the Raspberry Pi 3b+ microcomputer.',
    tech: 'Python | C | Linux',
    link: {
      desc: 'Video',
      link: 'https://www.linkedin.com/posts/rukshankr_microcontroller-raspberrypi-gui-activity-6653545374244012032-9nXE?utm_source=share&utm_medium=member_desktop'
    }
  },
]);

const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@your-medium-username";

const model = ref(null);

const blogs = ref([
  {
    color: 'white',
    title: 'Integrating Your New and Legacy React Applications with Asgardeo',
    subtitle: 'by Rukshan Karannagoda | Mar 29, 2022',
    img: 'https://miro.medium.com/max/828/1*PW-pIJgJ6pBeJUsleCSiaw.webp',
    desc: 'Asgardeo is an IDaaS (Identity as a Service) solution by WSO2 that integrates CIAM features with traditional Identity and Access...',
    link: 'https://medium.com/@rukshankr8/integrating-your-new-and-legacy-react-applications-with-asgardeo-5fc100b10f36'
  },
  {
    color: 'secondary',
    title: 'All About Gradient Descent',
    subtitle: 'by Rukshan Karannagoda | Sep 06, 2021',
    img: 'https://miro.medium.com/max/640/1*7O4K9KcTk5STGoSPC75XCA.webp',
    desc: 'Gradient Descent (GD) is an iterative optimization algorithm that uses first order derivatives to update the parameters needed...',
    link: 'https://medium.com/@rukshankr8/all-about-gradient-descent-1ba3e4f8e7b9'
  },
  {
    color: 'black',
    title: 'Intégrer le Social Login avec Github sur Asgardeo',
    subtitle: 'by Rukshan Karannagoda | Dec 23, 2022',
    img: 'https://miro.medium.com/max/828/1*F1HAZjJtl7Ju3NVvth0q3w.webp',
    desc: 'Asgardeo est une solution IDaaS (solution d’identité en tant que service) offré par WSO2 qui intégre CIAM dans les applications de...',
    link: 'https://medium.com/@rukshankr8/integrating-your-new-and-legacy-react-applications-with-asgardeo-5fc100b10f36'
  },
]);

const scroll = (refName) => {
  const element = document.getElementById(refName);
  element.scrollIntoView({ behavior: "smooth" });
};

</script>

<style lang="scss">
/* Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);


.codingfont {
  display: inline-block;
  font-family: 'Anonymous Pro', monospace !important;
  font-size: large;
}

.typed {
  overflow: hidden;
  // white-space: nowrap;
  border-right: 2px solid;
  width: 0;
  animation: typing 1.5s steps(30, end) forwards, blinking 1s infinite;
}

@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

@keyframes blinking {
  0% {
    border-right-color: transparent
  }

  50% {
    border-right-color: rgb(141, 141, 141)
  }

  100% {
    border-right-color: transparent
  }
}

.aboutme {
  color: 'white'
}

.mr-2 {
  margin: 5px;
}

.v-container {
  padding: 0;
  background-color: #171f34;
}


.head {
  position: relative;
  /* text-align: center; */
  /* padding: 12px; */
  margin-bottom: 10px;
  height: 400px;
  width: 100%;
  color: white;

}

/* .head::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 0deg);
}

.head::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 0deg);
} */

.imagemask {
  object-fit: cover;
  border-radius: 50%;
  /* background-color: aliceblue; */
}

.first {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}

.child {
  display: inline-block;
  padding: 2rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}

.imgHover {
  padding: 0 200px;
}

.pre {
  width: 100%;
  height: 400px;
  /* text-align: center; */
  padding: 10px;
  background-color: #f5f5f5;
}

.hire {
  width: 100%;
  height: 200px;
  padding: 0 200px;
  background-color: #e9e9e9;
  margin-top: -24px;
}

.carousel-wording {
  opacity: 80%;
  padding: 5px;
}

.v-footer {
  padding: 0px 0 !important;
}
</style>