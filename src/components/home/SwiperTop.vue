<!--
<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  setup() {
    const images = [
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ];
    return { images };
  },
};
</script>
-->

<template>
  <div id="swiperTop">
    <n-carousel 
      centered-slides="true" 
      autoplay 
      interval="4000" 
      draggable="true"
    >
      <carousel-img v-for="image in state.images" :key="image"> 
        <img class="carousel-img" :src="image.imageUrl"/>
      </carousel-img>

    <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
          />
        </ul>
    </template>

    </n-carousel>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
import { getBanner } from '@/request/api/home.js'
import service from '@/request/index.js'

export default {
  //name: 'SwiperTop',
  setup() {
    const state = reactive({
      images: []
    })
    onMounted(async () => {
      // axios.get('http://localhost:3000/banner?type=0').then(res => {
      //   console.log(res.data)
      //   state.images = res.data.banners
      //   console.log(state.images)
      // })
      let res = await getBanner()
      state.images = res.data.banners
      console.log(res)
    })
    return { state };
  }
}
</script>

<style scoped>
  
  /*
  .n-carousel n-carousel--bottom n-carousel--horizontal n-carousel--slide {
    width: 60%;
    height: 60%;
    padding: 10px;
    align-content: center;
    object-fit: cover;
    .carousel__slides {
      width: 40%;
      height: 40%;
    }
  }
  */

  .carousel-img {
    width: 80%;
    height: 80%;
    border-radius: 0.2rem;
    padding: 30px;
    align-content: center;
    object-fit: cover;
  }
  .custom-dots {
    display: flex;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 80px;
    left: 50px;
  }
  .custom-dots li {
    display: inline-block;
    width: 12px;
    height: 4px;
    margin: 0 3px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
  .custom-dots li.is-active {
    width: 40px;
    background: #fff;
  }

</style>
