<template>
  <div class="mt-8 flex flex-col gap-2">
    <span class="text-xl text-slate-300">関連リンク</span>
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>