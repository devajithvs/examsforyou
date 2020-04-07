<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          lg="4"
        >
          <v-hover
            v-slot:default="{ hover }"
            open-delay="20"
          >
            <v-card
            :elevation="hover ? 0 : 0"
            :class="{ 'v-card-hover': hover }"
            >
              <v-row justify="center">
                <v-col
                  cols="12"
                  lg="3"
                >
                  <v-img class = "v-img" 
                  :class="{ 'v-img-hover': hover }"
                  :src="img0" 
                  />
                </v-col>
              </v-row>

              <v-card-text class="subtitle-1 font-weight-light">
                <v-row justify="center">
                    <strong>Blog</strong>
                </v-row>
                <v-container class="text-center" >
                  Compiled details, quick tips and more for your exams.
                </v-container>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col
          cols="12"
          lg="4"
        >
          <v-hover
            v-slot:default="{ hover }"
            open-delay="20"
          >
            <v-card
            :elevation="hover ? 0 : 0"
            :class="{ 'v-card-hover': hover }"
            >
              <v-row justify="center">
                <v-col
                  cols="12"
                  lg="3"
                >
                  <v-img class = "v-img" :class="{ 'v-img-hover': hover }"
                  :src="img1" 
                  />
                </v-col>
              </v-row>

              <v-card-text class="subtitle-1 font-weight-light">
                <v-row justify="center">
                    <strong>Practice</strong>
                </v-row>
                <v-container class="text-center" >
                  Practice previous year question papers with personalized in-depth analysis.
                </v-container>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col
          cols="12"
          lg="4"
        >
          <v-hover
            v-slot:default="{ hover }"
            open-delay="20"
          >
            <v-card
            :elevation="hover ? 0 : 0"
            :class="{ 'v-card-hover': hover }"
            >
              <v-row justify="center">
                <v-col
                  cols="12"
                  lg="3"
                >
                  <v-img class = "v-img" :class="{ 'v-img-hover': hover }"
                  :src="img2" 
                  />
                </v-col>
              </v-row>

              <v-card-text class="subtitle-1 font-weight-light">
                <v-row justify="center">
                    <strong>Courses</strong>
                </v-row>
                <v-container class="text-center" >
                  Best resources to study from. Including free notes, videos and slides.
                </v-container>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.v-card {
  transition: transform .2s;
}

.v-img {
  transition: transform .2s;
}

.v-img-hover {
  transform: scale(1.2);
}
.v-card-hover {
  transform: scale(1.05);
}
</style>
<script>

export default {
  name: 'App',
  data () {
    return {
      img0: require('@/assets/blog.svg'),
      img1: require('@/assets/test.svg'),
      img2: require('@/assets/classroom.svg'),
    }
  }
}
</script>