<template>
  <panel title="Song Metadata">
    <v-flex xs8>
      <div class="song-title">
        {{song.data.title}}
      </div>
    </v-flex>
    <v-flex xs8>
      <div class="song-artist">
        {{song.data.artist}}
      </div>
    </v-flex>
    <v-flex xs8>
      <div class="song-genre">
        {{song.data.genre}}
      </div>
      <v-btn
        dark
        class="cyan"
        @click="navigateTo({
          name:'song-edit',
          params: {
            songId: song.data.id
          }
        })">
        Edit Song
        </v-btn>
    </v-flex>
    <v-flex xs8>
      <img class="album-image" :src="song.data.albumImage"/>
        <br>
        {{song.data.album}}
    </v-flex>
  </panel>
</template>
<script>
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
    font-size: 20px;
  }

  .song-artist {
    font-size: 14px;
  }

  .song-genre {
    font-size: 12px;
  }

  .album-image {
    width: 70%;
    margin: 0 auto;
  }
</style>
