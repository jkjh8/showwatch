<template>
  <q-page class="flex flex-center">
    <div class="text-white">
      <div>
        <div>
          현재시간
        </div>
        <div>
          <span class="text-h1">{{ time }}</span>
          <span class="text-h4">{{ ampm }}</span>
        </div>
      </div>
      <div class="fit row justify-center q-mt-lg">
        <q-btn
          color="grey"
          text-color="black"
          style="width: 20rem; height: 5rem; font-size: 2rem;"
        >
          시작
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'PageIndex',
  setup () {
    const store = useStore()
    const time = computed(() => store.state.clock.time)
    const ampm = computed(() => store.state.clock.ampm)

    return {
      time, ampm
    }
  }
})
</script>
