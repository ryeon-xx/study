<template>
  <div>
    <h2>관심 있는 K-POP 가수는?</h2>
    <hr>
    <ul>
      <CheckBoxItem2
      v-for="idol in idols"
      :key="idol.id"
      :idol="idol"
      />
    </ul>
  </div>
</template>

<script>
import CheckBoxItem2 from './components/CheckBoxItem2.vue';

export default {
  name: 'App2',
  components: { CheckBoxItem2 },
  data() {
    return {
      idols: [
        { id: 1, name : "BTS", checked: true },
        { id: 2, name : "EXO", checked: false },
        { id: 3, name : "Black Pink", checked: false },
        { id: 4, name : "ITZY", checked: false },
      ]
    }
  }
};
</script>
