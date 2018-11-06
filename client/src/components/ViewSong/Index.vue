<template>
  <div>
    <v-layout row>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-2">
      <youtube :song="song" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 class="mt-2">
        <lyrics :song="song" />
      </v-flex>
      <v-flex xs6 class="mt-2 ml-2">
        <tab :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import SongMetadata from './SongMetadata'
import SongsService from '@/services/SongsService'
import Youtube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = await SongsService.show(songId)
  },
  components: {
    SongMetadata,
    Youtube,
    Lyrics,
    Tab
  }
}
</script>
<style scoped>

</style>
