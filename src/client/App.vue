<template>
  <h1>Filesystem</h1>
  <hr />
  <button @click="scrapeThis">Scrape Test</button>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import axios from "axios";

// type FileSys = {
//   path: string;
//   content: Array<{}>;
// };

const path = "/scraper/test";

// const fileSys: FileSys = reactive({
//   path: "c:\\",
//   content: [],
// });

const scrapeThis = async () => {
  console.log("clicked");

  const dat = await axios.post("/scrape", { path });

  console.log(dat);

  // https://file.io/0qi3d8iPorIc
};

onMounted(async () => {
  // const dat = await axios.post<FileSys>("/fs", { path: fileSys.path });
  // const dat = await axios.post("/fs", { path: fileSys.path });
  // console.log(dat);
});
</script>
