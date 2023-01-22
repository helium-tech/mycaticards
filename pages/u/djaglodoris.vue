<template>
    <div class="users">
      <div class="heading">
        <div class="profile-picture">
          <img src="~/assets/images/profile-picture-1.jpg" alt="" />
        </div>
        
      </div>
  
      <div class="informations">
        
        <ProProfile
          name="Charles DZADU"
          title="@charlesdzadu"
          description=" Visitez tous les réseaux sociaux mais c’est à vos risques et périls,
              peut être que vous découvrirez des choses intéressantes &
              importantes, mais peut être pas. Faite ce que vous voulez !"
          qr="ic-qr-code.png"
        />
       
        <div class="social">
          <ContactBtn title="PROFESSIONEL" />
  
          <CallToActionPro
            iconleft="mdi_web.png"
            iconright="ic_baseline-open-in-new.png"
            title="Visitez mon site web"
            link="www.charlesdzadu.com"
          />
          <CallToActionPro
            iconleft="zondicons_portfolio.png"
            iconright="ic_baseline-open-in-new.png"
            title="Consulter mon portfolio"
            link="www.charlesdzadu.com/portfolio"
          />
          <CallToActionPro
            iconleft="material-symbols_alternate-email-rounded.png"
            iconright="ic_baseline-open-in-new.png"
            title="Envoyez moi un email "
            link="hello@charlesdzadu.com"
          />
          <ContactBtn title="RESEAUX SOCIAUX" />
  
          <CallToActionPro
            iconleft="logos_facebook.png"
            iconright="ic_baseline-open-blue.png"
            title="Tout se passe sur Facebook "
            link="@charlesdzadu"
          />
          <div class="social-media">
            <img
              class="icons"
              src="~/assets/images/Instagram-Icon 1.png"
              alt=""
            />
            <img
              class="icons"
              src="~/assets/images/logos_linkedin-icon.png"
              alt=""
            />
            <img
              class="icons"
              src="~/assets/images/logos_youtube-icon.png"
              alt=""
            />
            <img class="icons" src="~/assets/images/twiter.png" alt="" />
            <img
              class="icons"
              src="~/assets/images/tiktok-app-icon-seeklogo.com 1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  
  import CallToActionPro from "../../components/user/CallToActionPro.vue";
  import ProProfile from "../../components/user/ProProfile.vue";
  
  export default {
    layout: "userlink",
    components: { ProProfile, CallToActionPro },
  };
  </script>