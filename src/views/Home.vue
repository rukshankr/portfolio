<template>
  <!-- <HelloWorld /> -->
  <v-app id="home">
    <!-- <NavBar /> -->
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="4">
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
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <v-img src="@/assets/dp-2.png" class="imagemask"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h2 class="mt-16">About Me</h2>
              <div style="width:120px">
                <v-slider v-model="slider2" color="secondary"></v-slider>
              </div>
              <h3 class="mt-n4">I am a final year undergraduate</h3>
              <h4>at the Faculty of IT, University of Moratuwa</h4>
              <p class="text=grey">I'm interested in web and android development, data science and machine learning. I'm
                a highly motivated person, and I'm committed to work. Currently, I have experience in Java, Python and C
                programming and React, Angular and Ionic web and android development.</p>
              <br />
              <v-btn tile dark color="primary" class="mt-4" :href="cvDownload" target="_blank">Download CV</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <div class="text-center mt-4">
        <h2>My Projects</h2>
        <div style="width: 120px; margin: 0 auto">
          <v-slider v-model="slider2" color="secondary"></v-slider>
        </div>
      </div>
      <v-col cols="12" class="padd">
        <h3 class="text-grey text-center">Technologies</h3>
        <div class="text-center">
          <v-icon icon="mdi-language-java" color="orange" size="60px"></v-icon>
          <v-icon icon="mdi-react" color="secondary" size="60px"></v-icon>
          <v-icon icon="mdi-angular" color="red-darken-4" size="60px"></v-icon>
          <v-icon icon="mdi-language-python" color="purple" size="60px"></v-icon>
          <v-icon icon="mdi-alpha-c-circle" color="yellow" size="60px"></v-icon>
          <v-icon icon="mdi-vuejs" color="green" size="60px"></v-icon>
          <v-icon icon="mdi-language-php" color="primary" size="60px"></v-icon>
          <v-icon icon="mdi-nodejs" color="lime" size="60px"></v-icon>
          <v-icon icon="mdi-leaf-circle" color="green-darken-2" size="60px"></v-icon>
          <v-icon icon="mdi-database" color="green-lighten-1" size="60px"></v-icon>
          <v-icon icon="mdi-git" color="red-lighten-1" size="60px"></v-icon>
          <v-icon icon="mdi-language-kotlin" color="orange-lighten-1" size="60px"></v-icon>

        </div>
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
        <h2 class="text-grey text-center">Timeline</h2>
        <v-timeline align="start">
          <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="small">
            <template v-slot:opposite>
              <div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year"></div>
            </template>
            <div>
              <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
                {{ year.project }}
              </h2>
              <div>
                {{ year.desc }}
              </div>
              <div>
                <v-btn tile dark color="primary" rounded variant="outlined" class="mt-4" :href="year.link.link">{{
                  year.link.desc
                }}</v-btn>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col cols="12" sm="12">
        <div class="d-flex justify-center mb-6">
          <v-btn color="primary" class="mt-4" href="https://github.com/rukshankr?tab=repositories" target="_blank">See
            More Github Repos</v-btn>
        </div>
      </v-col>


      <v-col cols="12" id="blogs">
        <div class="text-center mt-4">
          <h2>My Blogs</h2><br />
        </div>
        <div>
          <v-sheet cycle class="mx-auto" max-width="1000">
            <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
              <v-slide-group-item v-for="(blog, i) in blogs" :key="i" v-slot="{ isSelected, toggle }">
                <v-card :color="blog.color" class="ma-4" height="400" width="400" @click="toggle">
                  <div class="text-center"><v-card-title>{{ blog.title }}</v-card-title></div>

                  <div class=" fill-height text-center align-center justify-center">
                    <v-scale-transition>
                      <v-img height="200" :src="blog.img"></v-img>
                    </v-scale-transition>
                    <v-card-subtitle>{{ blog.subtitle }}</v-card-subtitle>
                    <p>{{ blog.desc }}</p>
                    <v-btn :color="blog.color" :href="blog.link">Read More</v-btn>
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
          <div class="text-center mt-4">
            <h2>My Interests</h2><br />
            <div style="width: 120px; margin: 0 auto"><br />
            </div>
          </div>
          <div class="text-center justify-center mb-6">
            <v-btn class="mr-2" rounded="pill" variant="tonal" color="secondary">Badminton</v-btn>
            <v-btn class="mr-2" rounded="pill" variant="tonal" color="secondary">Guitar</v-btn>
            <v-btn class="mr-2" rounded="pill" variant="tonal" color="secondary">Singing</v-btn>
            <v-btn class="mr-2" rounded="pill" variant="tonal" color="secondary">Linguistics</v-btn>
            <v-btn class="mr-2" rounded="pill" variant="tonal" color="secondary">Gavel</v-btn>
            <v-btn class="mr-2" rounded="pill" variant="tonal" color="secondary">Blogging</v-btn>
            <v-btn class="mr-2" rounded="pill" variant="tonal" color="secondary">Volunteering</v-btn>
            <v-btn class="mr-2" rounded="pill" variant="tonal" color="secondary">Wikipedia Contribution</v-btn>

          </div>
        </v-col>

      </v-col>
      <v-col cols="12" sm="12" class="px-16" id="contact">
        <v-row>
          <v-col cols="12" sm="4">
            <div class="child">
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
            <h1 class="mt-8">Send me a message</h1>
            <v-divider></v-divider>
            <span class="text-caption">If you're ever in need of my services, or have any other comments about the
              quality of my work just let me know your name and phone number
              and leave me a message!</span>
            <form action="malto:ruksh44n@gmail.com" method="post" target="_blank" enctype="text/plain">
              <v-row class="mt-10">

                <v-col cols="12" sm="6">
                  <v-text-field name="name" label="Name" persistent-hint variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field name="phone-no" label="Phone-No" persistent-hint variant="outlined"></v-text-field>
                </v-col>
              </v-row>
              <v-textarea name="message" label="Message" persistent-hint variant="outlined"></v-textarea>
              <v-btn type="submit" name="submit" value="Submit" color="primary" class="mt-2">SEND Message</v-btn>
            </form>
          </v-col>
        </v-row>
      </v-col>


      <v-footer>
        <v-card elevation="0" rounded="0" width="100%" class="bg-primary text-center">
          <v-card-text>
            <v-btn style="margin-right: 5px; margin-left: 5px;" class="mw-4" icon="mdi-linkedin" color="secondary"
              href="https://www.linkedin.com/in/rukshankr/" target="_blank"></v-btn>
            <v-btn style="margin-right: 5px; margin-left: 5px;" class="mw-4" icon="mdi-github" color="black"
              href="https://github.com/rukshankr" target="_blank"></v-btn>
            <v-btn style="margin-right: 5px; margin-left: 5px;" class="mw-4" icon="mdi-twitter" color="cyan"
              href="https://twitter.com/rukshankr" target="_blank"></v-btn>
            <v-btn style="margin-right: 5px; margin-left: 5px;" class="mw-4" icon="mdi-alpha-m-circle"
              href="https://medium.com/@rukshankr8" target="_blank" color="orange"></v-btn>
            <v-btn style="margin-right: 5px; margin-left: 5px;" class="mw-4" icon="mdi-youtube"
              href="https://www.youtube.com/@rukshankr" target="_blank" color="red"></v-btn>
          </v-card-text>
          <v-card-text class="text-white">
            @{{ new Date().getFullYear() }}
            <strong>Rukshan Karannagoda</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const cvDownload = ref('https://drive.google.com/file/d/1-dcBJzBvWaIpD-YcEZjqgLFRdx5CxW2h/view?usp=sharing');

const slider2 = ref(50);

const years = ref([
  {
    color: 'green',
    year: '2022',
    project: 'A.F.R - CodeGen International (ONGOING)',
    desc: 'The Automatic Food Recognition project (A.F.R) is a multiplatform food calorie tracking and recommendation application that utilizes Deep Learning (DL) modules to detect food items on a plate and estimate the food area and volume for calorie calculations.',
    link: {
      desc: 'Not Available',
      link: ''
    }
  },
  {
    color: 'cyan',
    year: '2022',
    project: 'Industrial Internship Experience - WSO2 Lanka (Pvt) Ltd',
    desc: 'I was the Project Manager of the project “Implementing Try-It Capabilities for Social Identity Providers on Asgardeo”. I Conducted preliminary research on competitors’ solutions and was a member of the design team for the project frontend.',
    link: {
      desc: 'Service Letter',
      link: 'https://www.linkedin.com/in/rukshankr/details/experience/1635511219704/single-media-viewer/?profileId=ACoAACupa-cB21SnTWwSPkpLfEC7hcb2gXPKuqY'
    }
  },
  {
    color: 'pink',
    year: '2021',
    project: 'M.A.R.T.I.S - Wabtec Corporation',
    desc: ' MARTIS is a multiplatform railway asset tracking and inspecting system that incorporates a geolocation system to direct users and facilitates management of railway assets and inspections.',
    link: {
      desc: 'GitHub Repo',
      link: 'https://github.com/rukshankr/UoML2-ngMartis'
    }
  },

  {
    color: 'orange',
    year: '2018',
    project: 'Pelapotha+ - DigiEduHack Submission - AR Project',
    desc: 'PelaPotha+ is a mobile Augmented Reality application that identifies images and texts in a textbook using your mobile phone camera and displays interesting information, 3D models, audio and video pertaining to the lessons on the textbook.',
    link: {
      desc: 'YouTube Video',
      link: 'https://www.youtube.com/watch?v=Rg1qE8NElOI'
    }
  },
  {
    color: 'amber',
    year: '2018',
    project: 'Robo-Greeter - Level 1 Hardware Project',
    desc: 'A  simple Graphical User Interface that played videos for greetings and showing directions when prompted by an AtMega32A microcontroller was coded by me on the Raspberry Pi 3b+ microcomputer.',
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
    color: 'magenta',
    title: 'Integrating Your New and Legacy React Applications with Asgardeo',
    subtitle: 'by Rukshan Karannagoda | Mar 29, 2022',
    img: 'https://miro.medium.com/max/828/1*PW-pIJgJ6pBeJUsleCSiaw.webp',
    desc: 'Asgardeo is an IDaaS (Identity as a Service) solution by WSO2 that integrates CIAM features with traditional Identity and Access...',
    link: 'https://medium.com/@rukshankr8/integrating-your-new-and-legacy-react-applications-with-asgardeo-5fc100b10f36'
  },
  {
    color: 'lime',
    title: 'All About Gradient Descent',
    subtitle: 'by Rukshan Karannagoda | Sep 06, 2021',
    img: 'https://miro.medium.com/max/640/1*7O4K9KcTk5STGoSPC75XCA.webp',
    desc: 'Gradient Descent (GD) is an iterative optimization algorithm that uses first order derivatives to update the parameters needed...',
    link: 'https://medium.com/@rukshankr8/all-about-gradient-descent-1ba3e4f8e7b9'
  },
  {
    color: 'secondary',
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

<style>
.mr-2 {
  margin: 5px;
}

.v-container {
  padding: 0;
}


.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
  
}

.head::before {
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
}

.imagemask {
  object-fit: cover;
  border-radius: 50%;
  /* background-color: aliceblue; */
}

.egg {
  display: block;
  margin-left: 60px;
  margin-top: 50px;
  width: 300px;
  height: 200px;
  background-color: #2E75B6;
  border-radius: 50% 50% 50% 50%/ 60% 60% 40% 40%;
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
  padding: 8px 0 !important;
}
</style>