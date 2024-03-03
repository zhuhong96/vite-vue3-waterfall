<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";

const list = ref([
  {color:'#76da6e',height:'100px'},
  {color:'#57c797',height:'150px'},
  {color:'#40a988',height:'70px'},
  {color:'#2384c4',height:'120px'},
  {color:'#106ba3',height:'80px'},
  {color:'#0a589e',height:'110px'},
  {color:'#0a4e98',height:'90px'},
  {color:'#09408c',height:'100px'},
  {color:'#083680',height:'130px'},
  {color:'#072d75',height:'140px'},
  {color:'#062369',height:'150px'},
]);

const cardList = ref([]);
const columnHeights = ref([0,0,0,0]);

const updateLayout = (el) => {
  const columns = getMinColumnHeight(columnHeights.value);
  const top = columnHeights.value[columns];
  const left = columns * el.clientWidth;
  el.style.transform = `translate(${left}px,${top}px)`;
  columnHeights.value[columns] += el.offsetHeight;
}

const getMinColumnHeight = (arr) =>{
  let min = Math.min(...arr);
  return arr.indexOf(min) !== -1 ? arr.indexOf(min) : 0;
}

const vWaterfall = {
  mounted: (el) => {
    updateLayout(el);
  },
  updated: (el) => {
    // updateLayout(el);
  }
}

// 增加
const addCard = () => {
  list.value.push({color:'#76da6e',height:'100px'});
}
</script>

<template>
  <div>
    <button @click="addCard">增加</button>
    <div class="card">
      <div class="card-list"
      v-waterfall
      v-for="(item,index) in list" :key="index"
      :style="{backgroundColor:item.color,height:item.height}"
      >
        <p class="text"> {{ index }} </p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  /* gap: 20px; */
}
.card-list {
  position: absolute;
  width: 200px;
}
</style>
