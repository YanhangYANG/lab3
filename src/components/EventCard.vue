<template>
  <div class="event-class">
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const event = ref({
  id: 5928101,
  category: 'animal welfare',
  title: 'cat Adoption Day',
  description: 'Find your new feeline friend at this event',
  location: 'Meow Town',
  date: 'January 28, 2022',
  time: '12:00',
  petAllowed: true,
  organizer: 'Kat Laydee'
})
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
}
</style>
