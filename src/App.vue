<template>
  <div id="app">
    <router-view></router-view>
  </div>
  <div class="flex flex-col gap-8 justify-self-center border shadow-xl bg-slate-700 border-slate-600 border-r-4 rounded-lg ">
    
    <!-- nav -->
    <nav class="flex justify-between items-center p-4 bg-slate-800 text-gray-200">
      
      <!-- button -->
      <div class="w-fit space-x-4 mx-auto">
        
        <button class="p-2  font-bold text-gray-200  rounded-lg bg-slate-800 hover:bg-slate-300">
          <router-link to="/table">Food List</router-link>
        </button>
        <button class="p-2  font-bold  text-gray-200 rounded-lg bg-slate-800 hover:bg-slate-300">
          <router-link to="/destination">Destination</router-link>
        </button>
        <button class="p-2  font-bold  text-gray-200 rounded-lg bg-slate-800 hover:bg-slate-300">
          <router-link to="/todo">Todo</router-link>
        </button>
      </div>
      <!-- nav -->
    </nav>
    <!-- image -->
    <div class="w-fit mx-auto  ">
      <img class="" alt="Vue logo" src="./assets/logo.png" />
    </div>
    <!-- Judul -->
    <div class="mx-auto text-gray-200 font-bold">
      <h1>Food List</h1>
    </div>
    <!-- table -->
    <div class="w-fit mx-auto">
      <table class="border border-slate-900 text-gray-200">
        <tr class="border bg-slate-900 border-slate-500 ">
          <th class="border border-slate-900">No</th>
          <th class="border border-slate-900">ciki</th>
          <th class="border border-slate-900">minuman</th>
          <th class="border border-slate-900">sarapan</th>
        </tr>
        <tr class="border bg-slate-800 border-slate-900">
          <td class="border border-slate-900">1</td>
          <td class="border border-slate-900">taro</td>
          <td class="border border-slate-900">coca cola</td>
          <td class="border border-slate-900">nasi tempe</td>
        </tr>
        <tr class="border bg-slate-800 border-slate-900">
          <td class="border border-slate-900">2</td>
          <td class="border border-slate-900">roti aoka</td>
          <td class="border border-slate-900">teh sisri</td>
          <td class="border border-slate-900">nasi kucing</td>
        </tr>
        <tr class="border bg-slate-800 border-slate-900">
          <td class="border border-slate-900">3</td>
          <td class="border border-slate-900">chiki balzz</td>
          <td class="border border-slate-900">jus jeruk</td>
          <td class="border border-slate-900">nasi goreng</td>
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
