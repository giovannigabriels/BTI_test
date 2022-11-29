<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  created() {
    this.fetchData();
  },
  computed: {
    ...mapState(useCounterStore, ["datas"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchData"]),
    detailJob(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<template>
  <div v-for="(data, idx) in datas" :key="idx">
    <p>{{ data.title }}</p>
    <a @click.prevent="detailJob(data.id)">See Job</a>
  </div>
</template>
