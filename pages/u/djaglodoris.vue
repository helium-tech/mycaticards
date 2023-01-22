<template>
  <div class="users">
    <div class="heading">
      <div class="profile-picture">
        <img src="~/assets/images/djaglo_doris_profile.jpg" alt="" />
      </div>

    </div>

    <div class="informations">

      <ProProfile name="Doris DJAGLO" title="@dorisdjaglo"
        description=" Mon objectif est de développer des solutions innovantes qui révolutionnent  le monde et participer à l’inclusion de la jeune fille dans le monde de la technologie !"
        qr="ic-qr-code.png" />

      <div class="social">
        <ContactBtn title="PROFESSIONEL" />

        <CallToActionPro iconleft="mdi_web.png" iconright="ic_baseline-open-in-new.png" title="Visitez mon site web"
          link="www.caticards.com" />
        <CallToActionPro iconleft="zondicons_portfolio.png" iconright="ic_baseline-open-in-new.png"
          title="Consulter mon portfolio" link="www.github.com/djaglodoris" />
        <CallToActionPro iconleft="material-symbols_alternate-email-rounded.png" iconright="ic_baseline-open-in-new.png"
          title="Envoyez moi un email " link="hello@caticards.com" />
        <ContactBtn title="RESEAUX SOCIAUX" />

        <CallToActionPro iconleft="logos_facebook.png" iconright="ic_baseline-open-blue.png"
          title="Tout se passe sur Facebook " link="@djaglodoris" />

          <button @click="addContact">What happen</button>
        <div class="social-media">
          <img  class="icons" src="~/assets/images/Instagram-Icon 1.png" alt="" />
          <img class="icons" src="~/assets/images/logos_linkedin-icon.png" alt="" />
          <img class="icons" src="~/assets/images/logos_youtube-icon.png" alt="" />
          <img class="icons" src="~/assets/images/twiter.png" alt="" />
          <img class="icons" src="~/assets/images/tiktok-app-icon-seeklogo.com 1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import CallToActionPro from "../../components/user/CallToActionPro.vue";
import ProProfile from "../../components/user/ProProfile.vue";
import ContactBtn from "../../components/user/ContactBtn.vue";

import Swal from 'sweetalert2';

export default {
  layout: "userlink",
  components: { ProProfile, CallToActionPro, ContactBtn },
  head() {
    return {
      title: "Djaglo Doris - Développeur Web et Féministe",
      meta: [
        {
          hid: "description", name: "description",
          content: "Mon objectif est de développer des solutions innovantes qui révolutionnent  le monde et participer à l’inclusion de la jeune fille dans le monde de la technologie !",

        },
        {
          hid: 'keywords', name: 'keywords',
          content: 'Djaglo Doris, Djaglo, Doris'
        },
        {
          hid: 'og:title', property: 'og:title',
          content: 'Djaglo Doris - Développeur Web et Féministe'
        },
        {
          hid: 'og:description', property: 'og:description',
          content: 'Mon objectif est de développer des solutions innovantes qui révolutionnent  le monde et participer à l’inclusion de la jeune fille dans le monde de la technologie !'
        },
        { hid: 'og:image', property: 'og:image', content: './djaglo_doris_profile.jpg' },
        { hid: 'og:url', property: 'og:url', content: 'https://my.caticards.com/u/djaglodoris' },
      ],
    }

  },


  methods: {
    async addContact() {
      
      // contact.name = {givenName: "John", familyName: "Doe"};
      // contact.email = [{type: "work", value: "johndoe@example.com"}];
      // contact.phoneNumbers = [{type: "work", value: "+1 (555) 555-5555"}];
      // let contactAdded = await window.navigator.contacts.create(contact);
      // if(contactAdded) {
      //   Swal.fire({
      //     icon: 'success',
      //     title: 'Le contact a été ajouté avec succès !',
      //     showConfirmButton: false,
      //     timer: 2000
      //   });
      // } else {
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Erreur lors de l\'ajout du contact',
      //     confirmButtonText: 'Ok'
      //   });
      // }
    }
  }
};
</script>