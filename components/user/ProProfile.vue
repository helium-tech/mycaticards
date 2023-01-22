<template>
  <div class="profile">
    <div>
      <div class="naming">
        <h4> {{ name }} </h4>
        <p class="small-txt"> {{ title }} </p>
      </div>
      <div>
        <img class="icons" :src="require(`~/assets/images/${qr}`)" alt="" />
        
      </div>
    </div>

    <div>
      <p class="small-txt">
      {{ description }}
      </p>
      
    </div>
    <!-- <button class="user-btn">Enregistrer ce contact</button> -->
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
    qr: String,
    description: String,
  },
};
</script>