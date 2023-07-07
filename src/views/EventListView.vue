<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import Cac from '../components/CaC.vue'

import type { EventItem } from '@/type'

import { ref } from 'vue'
import axios from 'axios'
const events = ref<EventItem[]>([])
axios.get<EventItem[]>('http://localhost:3004/events').then((response) => {
  events.value = response.data
})
</script>

<template>
  <h1>Event For Good</h1>
  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;

  text-align: right;
}
h4 {
  font-size: 20px;
}
</style>
