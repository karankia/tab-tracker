<template>
    <v-layout>
      <v-flex xs4>
        <panel title="Song Metadata">
          <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"></v-text-field>
          <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"></v-text-field>
          <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"></v-text-field>
          <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"></v-text-field>
          <v-text-field
          label="Album Art"
          required
          :rules="[required]"
          v-model="song.albumImage"></v-text-field>
          <v-text-field
          label="Youtube Id"
          required
          :rules="[required]"
          v-model="song.youtubeId"></v-text-field>
        </panel>
      </v-flex>
      <v-flex>
        <panel title="Song Structure" class="ml-2">
          <v-text-field
          label="Lyrics"
          multi-line
          v-model="song.lyrics"></v-text-field>
          <v-text-field
          label="Tab"
          multi-line
          v-model="song.tab"></v-text-field>
        </panel>
        <div class="danger-alert" v-if="error">
          {{error}}
        </div>
        <v-btn
        dark
        class="cyan"
        @click="create">
        Create Song
        </v-btn>
      </v-flex>
    </v-layout>
</template>
<script>
import SongService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllfieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])

      if (!areAllfieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }

      try {
        await SongService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>

</style>
