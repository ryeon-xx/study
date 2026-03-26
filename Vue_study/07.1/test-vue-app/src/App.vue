<template>
  <div>
    <h2>관심 있는 K-POP 가수는?</h2>
    <hr>
    <ul>
      <CheckBoxItem 
      v-for="idol in idols"
      :key="idol.id"
      :name="idol.name"
      :checked="idol.checked"/>
    </ul>
  </div>
</template>

<script>
import CheckBoxItem from './components/CheckBoxItem.vue';

export default {
  name: 'App',
  components: { CheckBoxItem },
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
