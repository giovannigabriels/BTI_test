<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.fetchOneData(this.$route.params.jobId);
  },
  computed: {
    ...mapState(useCounterStore, ["oneData"]),
  },
  method: {
    ...mapActions(useCounterStore, ["fetchOneData", "addJob"]),
    submitJob() {
      this.addJob({
        displayName: "test",
        subject: "Marketing Planner",
        email: "ar@bti.id",
        phone: "+11111",
        message: "test",
        ptJobApplyType: "APPLICATION",
        isActive: false,
        ptJobPost: { id: 1 },
      });
    },
  },
};
</script>

<template>
  <h1>{{ oneData.title }}</h1>
  <div>{{ oneData.description.txt }}</div>

  <h1>Send your job application</h1>
  <form v-on:submit.prevent="submitJob">
    <button type="submit">Send Message</button>
  </form>
</template>
