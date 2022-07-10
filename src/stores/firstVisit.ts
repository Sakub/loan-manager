import { defineStore } from "pinia";
import router from "@/router";
import type { IFirstVisitState } from "@/interfaces";

export const useFirstVisitStore = defineStore("firstVisit", {
  state: (): IFirstVisitState => ({
    firstVisit: JSON.parse(`${localStorage.getItem("firstVisit")}`) || true,
  }),
  actions: {
    visited() {
      this.firstVisit = false;
      localStorage.setItem("firstVisit", "false");
      router.push("/");
    },
    checkForFirstVisit() {
      const firstVisitString = localStorage.getItem("firstVisit");
      this.firstVisit = firstVisitString ? JSON.parse(firstVisitString) : true;
      if (this.firstVisit) router.push("/welcome");
    },
  },
});
