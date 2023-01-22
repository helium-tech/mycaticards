<template>
  <div class="profile-picture">
    <div>
      <img :src="require(`~/assets/images/${media}`)" alt="" />
    </div>

    <h4>{{ name }}</h4>
    <p class="poste">{{ title }}</p>
    <p>
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    media: String,
    name: String,
    title: String,
    description: String,
  },
};
</script>