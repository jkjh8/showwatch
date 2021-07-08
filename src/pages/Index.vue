<template>
  <q-page class="flex flex-center">
    <div class="text-white">
      <div>
        <div>
          현재시간
        </div>
        <div class="fit row justify-center q-my-lg">
          <span class="text-h1" style="font-size: 10rem">{{ time.time }}</span>
          <span class="text-h4 q-ml-sm self-end" style="font-size: 4rem">{{ time.ampm }}</span>
        </div>
      </div>
      <div
        v-if="durationView"
        class="q-my-lg q-pt-lg"
      >
        <div>
          <div>
            시작시간
          </div>
          <div
            v-if="startTime"
            class="text-grey"
          >
            <span class="text-h4">{{ startTime.time }}</span>
            <span class="text-h6">{{ startTime.ampm }}</span>
          </div>
        </div>
        <div class="q-my-lg q-pb-lg">
          <div>
            경과시간
          </div>
          <div
            v-if="durationView"
            class="text-yellow fit row justify-center text-h1 q-my-lg q-pt-md"
            style="font-size: 13rem"
          >
            <span>{{ takeTime }}</span>
          </div>
        </div>
      </div>
      <div class="fit row justify-center q-mt-xl">
        <div v-if="!startStatus">
          <q-btn
            color="grey"
            text-color="black"
            style="width: 20rem; height: 5rem; font-size: 2rem;"
            @click="start(startStatus)"
          >
            시작
          </q-btn>
        </div>
        <div v-else>
          <q-btn
            class="q-ml-lg"
            color="orange-6"
            text-color="white"
            style="width: 20rem; height: 5rem; font-size: 2rem;"
            @click="start(startStatus)"
          >
            정지
          </q-btn>
        </div>
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn v-if= "!durationView" fab icon="visibility" color="blue-grey" @click="durationView=true" />
      <q-btn v-else fab icon="close" color="grey" @click="durationView=false" />
    </q-page-sticky>
  </q-page>
</template>

<script>
// import moment from 'moment'
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'PageIndex',
  setup () {
    const store = useStore()
    const time = computed(() => store.state.clock.time)
    const startTime = computed(() => store.state.clock.startTime)
    const startStatus = computed(() => store.state.clock.startStatus)
    const takeTime = computed(() => store.state.clock.takeTime)

    const durationView = ref(false)

    function start (status) {
      console.log(status)
      if (!status) {
        store.dispatch('clock/updateStartTime')
        store.commit('clock/updateStart', !status)
        durationView.value = true
      } else {
        store.commit('clock/updateStart', !status)
      }
    }

    return {
      time, startTime, startStatus, takeTime, durationView, start, stop
    }
  }
})
</script>
