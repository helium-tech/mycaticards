<template>
  <div class="call-to-action" >
    <img class="icons" :src="require(`~/assets/images/${iconleft}`)" alt="" />
    <div class="middle">
      <h4> {{ title }} </h4>
      <a class="small-txt" href="#"> {{ link }} </a>
    </div>
    <img
      class="icons-small"
      :src="require(`~/assets/images/${iconright}`)"
      alt=""
    />
  </div>
</template>

<script>
export default {
   
  props: {
    iconleft: String,
    iconright: String,
    title: String,
    link: String,
  },
};
</script>