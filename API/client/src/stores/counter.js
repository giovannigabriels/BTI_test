import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    datas: [],
    oneData: {},
  }),
  actions: {
    async fetchData() {
      try {
        const data = await axios({
          method: "get",
          url: "https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth",
        });
        this.datas = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchOneData(id) {
      try {
        const data = await axios({
          method: "get",
          url: `https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth`,
        });
        data.data.forEach((el) => {
          if (el.id == id) {
            this.oneData = el;
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async addJob(payload) {
      try {
        await axios({
          method: "post",
          url: `https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth`,
          data: payload,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
