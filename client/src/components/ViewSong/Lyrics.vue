<template>
  <panel title="Lyrics">
    <v-textarea
      readonly
      v-model="song.data.lyrics"></v-textarea>
  </panel>
</template>
<script>

export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
  textarea {
    width: 400px;
    height: 400px;
    font-family: monospace;
    border: none;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
  }
</style>
