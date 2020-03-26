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
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            >
              <v-card-title>
                <span class="font-weight-light subtitle-2">Blog</span>
              </v-card-title>

              <v-card-text class="subtitle-1 font-weight-bold">
                Compiled posts from various exam toppers for quick tips.
              </v-card-text>

              <v-card-actions>
                <v-btn
                  text
                  class="subtitle-2"
                >
                  Explore Blog
                </v-btn>
              </v-card-actions>
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
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            >
              <v-card-title>
                <span class="font-weight-light subtitle-2">Practice</span>
              </v-card-title>

              <v-card-text class="subtitle-1 font-weight-bold">
                Practice previous year question papers with personalized in-depth analysis.
              </v-card-text>

              <v-card-actions>
                <v-btn
                  text
                  class="subtitle-2"
                >
                  Practice Now
                </v-btn>
              </v-card-actions>
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
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            >
              <v-card-title>
                <span class="font-weight-light subtitle-2">Courses</span>
              </v-card-title>

              <v-card-text class="subtitle-1 font-weight-bold">
                Best resources to study from. Including free notes, videos and slides.
              </v-card-text>

              <v-card-actions>
                <v-btn
                  text
                  class="subtitle-2"
                >
                  Explore Courses
                </v-btn>
              </v-card-actions>
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
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            >
              <v-card-title>
                <span class="font-weight-light subtitle-2">Exams For You</span>
              </v-card-title>

              <v-card-text class="subtitle-1 font-weight-bold">
                Literally! Get all the details of the exams you are eligible for.
              </v-card-text>

              <v-card-actions>
                <v-btn
                  text
                  class="subtitle-2"
                >
                  Examsforyou
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <!--   Icon Section   -->
  </div>
</template>
<style>
</style>
<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>