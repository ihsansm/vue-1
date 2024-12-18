<template>
  <div class="flex flex-col gap-8 justify-self-center border border-gray-200 border-r-4 rounded-lg p-4">

    <div class="w-fit mx-auto ">
      <img class="" alt="Vue logo" src="./assets/logo.png" />
    </div>

    <div class="w-fit mx-auto">

    <button class="p-2 border font-bold  rounded-lg bg-slate-400 hover:bg-slate-300">
    tabel
    </button>
    <button class="p-2 border font-bold rounded-lg bg-slate-400 hover:bg-slate-300">
    destinasi
    </button>
    <button class="p-2 border font-bold  rounded-lg bg-slate-400 hover:bg-slate-300">
    todo
    </button>
    </div>

    <div class="w-fit">
      <table class="border border-slate-500">
        <tr class="border bg-gray-300 border-slate-500">
          <th class="border border-slate-500">ciki</th>
          <th class="border border-slate-500">minuman</th>
          <th class="border border-slate-500">sarapan</th>
        </tr>
        <tr class="border border-slate-500">
          <td class="border border-slate-500">taro</td>
          <td class="border border-slate-500">coca cola</td>
          <td class="border border-slate-500">nasi tempe</td>
        </tr>
        <tr class="border border-slate-500">
          <td class="border border-slate-500">roti aoka</td>
          <td class="border border-slate-500">teh sisri</td>
          <td class="border border-slate-500">nasi kucing</td>
        </tr>
        <tr class="border border-slate-500">
          <td class="border border-slate-500">chiki balzz</td>
          <td class="border border-slate-500">jus jeruk</td>
          <td class="border border-slate-500">nasi goreng</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
