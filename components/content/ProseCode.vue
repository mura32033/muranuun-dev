<template>
  <div class="bg-slate-800 border border-slate-500 rounded p-4">
    <div class="flex flex-row border-b border-b-slate-500 px-4 pb-2">
      <span v-if="filename" class="text-sm text-slate-400">
        {{ filename }}
      </span>
      <span class="ml-auto text-sm text-slate-400">
        {{ language }}
      </span>
    </div>
    
    <slot />
    <div class="flex flex-row gap-4 px-4 justify-end text-sm">
      <span class="copied-text text-slate-300" v-if="copied">Copied code!</span>
      <button class="text-slate-400" @click="copy(code)">Copy Code</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const { copy, copied, text } = useClipboard();

const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: Array<number>;
  }>(),
  { code: '', language: null, filename: null, highlights: [] }
);
</script>

<style scoped>
:slotted(pre) {
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex: 1 1 0%;
  overflow-x: auto;
  padding: 1rem;
  line-height: 1.625;
  counter-reset: lines;
}
:slotted(pre code) {
  width: 100%;
  display: flex;
  flex-direction: column;
}
:slotted(pre code .line) {
  display: inline-table;
  min-height: 1rem;
}
:slotted(pre code .line::before) {
  counter-increment: lines;
  content: counter(lines);
  width: 1rem;
  margin-right: 1.5rem;
  display: inline-block;
  text-align: left;
  color: rgba(235, 240, 243, 0.4);
}
</style>