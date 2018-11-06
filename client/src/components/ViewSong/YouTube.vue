<template>
    <panel title=" YouTube Video">
      <youtube
        :video-id="song.data.youtubeId"
        :player-width="600"
        :player-height="370">
      </youtube>
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

</style>
