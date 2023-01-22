<template>
     <div>
      <img 
      class="full"
      :src="require(`~/assets/images/${media}`)" alt="" />
    </div>
</template>

<script>
export default {
  props: {
    media: String,
   
  },
};
</script>