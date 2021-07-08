<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-black"
    >
      <q-toolbar>
        <q-btn
          round
          flat
          icon="timer"
        />

        <q-toolbar-title class="justify-center">
          <div
            v-if="time"
            class="text-body1 text-weight-thin"
          >
            {{ time.date }}
          </div>
        </q-toolbar-title>

        <div>
          <q-btn
            flat
            round
            color="grey"
            icon="fullscreen"
            @click="fullscreen"
          />
        </div>

      </q-toolbar>
    </q-header>

    <q-page-container class="bg-black">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import moment from 'moment'
import { ipcRenderer } from 'electron'
// const ipcRenderer = require('electron').ipcRenderer

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const store = useStore()
    moment.locale('ko')
    store.dispatch('clock/updateTime', moment())
    const time = computed(() => store.state.clock.time)

    onMounted(() => {
      setInterval(() => {
        store.dispatch('clock/updateTime', moment())
      }, 100)
    })

    function fullscreen () {
      console.log('full')
      ipcRenderer.send('fullscreen')
    }

    return {
      time, fullscreen
    }
  }
})
</script>
