<template>
  <div class="contact">
    <img  :src="require(`~/assets/images/${media}`)" alt="" />
    <div>
      <h4>{{ title }}</h4>
      <div v-if="hasDescription == true">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    media: String,
    title: String,
    hasDescription: Boolean,
    description: String,
  },
};
</script>