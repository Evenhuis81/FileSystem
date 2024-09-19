<template>
  <h1>Filesystem</h1>
  <hr />
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import axios from "axios";

type FileSys = {
  path: string;
  content: Array<{}>;
};

const fileSys: FileSys = reactive({
  path: "c:\\",
  content: [],
});

onMounted(async () => {
  const dat = await axios.post<FileSys>("/fs", { path: fileSys.path });
});
</script>
