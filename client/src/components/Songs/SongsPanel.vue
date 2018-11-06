<template>
    <panel title="Songs">
        <v-btn
            slot="action"
            @click="navigateTo({name: 'songs-create'})"
            class="cyan accent-2"
            light
            medium
            absolute
            right
            middle
            fab>
            <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs"
        :key="song.id">
            <v-layout row>
            <v-flex xs6>
                <div class="song-title">
                {{song.title}}
                </div>
            </v-flex>
            <v-flex xs6>
                <div class="song-artist">
                {{song.artist}}
                </div>
            </v-flex>
            <v-flex xs6>
                <div class="song-genre">
                {{song.genre}}
                </div>
                <v-btn
                dark
                cyan
                @click="navigateTo({
                    name: 'song',
                    params: {songId: song.id}
                    })">View</v-btn>
            </v-flex>
            <v-flex xs6>
                <img class="album-image" :src="song.albumImage"/>
            </v-flex>
            </v-layout>
        </div>
    </panel>
</template>

<script>
import SongService from '@/services/SongsService'
export default {
  components: {
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongService.index(value)).data
      }
    }
  },
  data () {
    return {
      songs: null
    }
  }
}
</script>

<style scoped>
  .song {
    padding: 20px;
    height:330px;
    overflow: hidden;
  }
  .song-title {
    font-size: 30px;
  }
  .song-artist {
    font-size: 24px;
  }
  .song-genre {
    font-size: 18px;
  }
  .album-image {
    width: 70%;
    margin: 0 auto;
  }
</style>
