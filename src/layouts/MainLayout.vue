<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-black"
    >
      <q-toolbar>
        <q-btn
          round
          flat
          icon="home"
        />

        <q-toolbar-title class="justify-center">
          <div class="text-body1 text-weight-thin">
            {{ date }}
          </div>
        </q-toolbar-title>

        <div>
          <q-btn
            round
            flat
            icon="settings"
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

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const store = useStore()
    const date = computed(() => store.state.clock.date)

    onMounted(() => {
      moment.locale('ko')
      store.dispatch('clock/updateTime', moment())

      setInterval(() => {
        store.dispatch('clock/updateTime', moment())
      }, 100)
    })

    return {
      date
    }
  }
})
</script>
