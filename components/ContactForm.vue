<script setup lang="ts">
let disabled = ref(true)
let email = ref('')
let message = ref('')
let check = ref(false)
watch([email, message, check], () => {
  disabled.value = !email.value || !message.value || !check.value
})
</script>
<template>
  <div class="bg-slate-600 rounded p-8 mt-8">
    <div class="text-xl md:text-2xl lg:text-3xl mb-4">お問い合わせ</div>
    <form action="https://formspree.io/f/xpzebpbv" method="POST" class="flex flex-col space-y-6 text-slate-300">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium">メールアドレス</label>
        <input type="email" id="email" v-model="email" name="email"
          class="bg-slate-700 border border-slate-400 text-sm rounded focus:outline-none focus:ring-slate-300 focus:border-slate-300 block w-full p-2.5"
          placeholder="name@name.com" required>
      </div>
      <div>
        <label for="message" class="block mb-2 text-sm font-medium">お問い合わせ内容</label>
        <textarea v-model="message" id="message" rows="4" name="message"
          class="block p-2.5 w-full text-sm bg-slate-700 rounded border border-slate-400 focus:outline-none focus:ring-slate-300 focus:border-slate-300"
          placeholder="お問い合わせ内容を書いてください" required></textarea>
      </div>
      <div class="flex items-center">
        <input v-model="check" id="checkbox-1" type="checkbox" :value="check ? 'notSpam' : 'isSpam'" name="checkbox-1"
          class="w-4 h-4 bg-slate-100 border-slate-300 rounded focus:ring-slate-300">
        <label for="checkbox-1" class="ml-2 text-sm font-medium">送信する内容は意見等の問い合わせです。</label>
      </div>
      <!-- your other form fields go here -->
      <button :disabled="disabled" type="submit"
        class="ml-auto bg-slate-500 hover:bg-slate-800 focus:ring focus:outline-none focus:ring-slate-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:bg-slate-300 disabled:text-slate-600 disabled:cursor-not-allowed disabled:hover:bg-slate-300">Submit</button>
    </form>
  </div>
</template>