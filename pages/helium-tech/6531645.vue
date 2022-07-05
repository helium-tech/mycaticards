<template>
    <div class="font-['montserrat']">
         <header class="relative flex flex-col items-center h-auto ">
             <div class="inset-0 w-screen">
               <img src="@/assets/images/banner.jpg" alt="" width="100%">
             </div>
             <img src="@/assets/images/avatar.jpg" alt="" class="absolute z-50 m-auto border-2 rounded-full -bottom-16" width="40%">
         </header>
        <div class="relative flex flex-col items-center h-auto pb-6">
        <img src="@/assets/images/bg.jpg" alt="" class="absolute w-full h-full -z-50">
        <span class="z-10 text-3xl font-bold mt-28">Charles K. DZADU</span>
        <div class="z-10 flex flex-col items-center justify-center space-y-4 text-center">
            <span class="text-xl text-gray-400">Lead Developper</span>
            <div class="flex text-4xl font-bold space-x-7">
                <i class="lab la-whatsapp"></i>
                <i class="las la-phone"></i>
                <i class="las la-envelope"></i>
                <i class="las la-globe-americas"></i>
            </div>
        </div>
        <span class="mt-5 text-3xl font-bold text-green-900">Nos Services</span>
        <div class="z-10 w-auto h-auto p-3 mx-4 my-8 bg-white rounded-xl">
            <div class="relative flex items-center justify-center w-full h-full space-x-5 bg-white">
                <i class="absolute top-0 right-0 text-xl rotate-45 lar la-arrow-alt-circle-right"></i>
                <div class="flex items-center justify-center w-1/4 text-center">
                    <i class="text-black las la-newspaper text-8xl"></i>
                </div>
                <div class="w-3/4 space-y-1">
                    <div class="inline-block w-3/4 ">
                        <span class="text-xl font-bold text-green-900">CashPay</span>
                    </div>
                    <p>
                        Encaissez des paiements en mobile money par carte bancaire et par virement
                    </p>
                </div>
            </div>
        </div>
        <div class="z-10 w-auto h-auto p-3 mx-4 my-8 bg-white rounded-xl">
            <div class="relative flex items-center justify-center w-full h-full space-x-5 bg-white">
                <i class="absolute top-0 right-0 text-xl -rotate-45 lar la-arrow-alt-circle-right"></i>
                <div class="flex items-center justify-center w-1/4 text-center">
                    <i class="text-black las la-desktop text-8xl"></i>
                </div>
                <div class="w-3/4 space-y-1">
                    <div class="inline-block w-3/4 ">
                        <span class="text-xl font-bold text-green-900">Semoa Pro</span>
                    </div>
                    <p>
                       Effectuez et gérez des paiements individuels ou de masse vers vos partenaires
                    </p>
                </div>
            </div>
        </div>
        <div class="z-10 w-auto h-auto p-3 mx-4 my-8 bg-white rounded-xl">
            <div class="relative flex items-center justify-center w-full h-full space-x-5 bg-white">
                <i class="absolute top-0 right-0 text-xl -rotate-45 text- lar la-arrow-alt-circle-right"></i>
                <div class="flex items-center justify-center w-1/4 text-center">
                    <i class="text-black las la-map-marked text-8xl"></i>
                </div>
                <div class="w-3/4 space-y-1">
                    <div class="inline-block w-3/4 ">
                        <span class="text-xl font-bold text-green-900">Dédé Digital Corner</span>
                    </div>
                   
                    <p>
                        Effectuez et gérez des paiements individuels ou de masse vers vos partenaires
                    </p>
                </div>
            </div>
        </div>

        <div class="z-10 flex flex-col items-center justify-center w-full p-6 space-y-6">
            <a href="#" class="flex items-center justify-center w-full h-auto px-3 py-5 text-lg font-semibold text-center text-white bg-green-900 rounded-xxl sm:text-2xl">
                <div class="w-1/4 text-left">
                    <i class="text-3xl las la-globe"></i>
                </div>
                <div class="w-3/4 text-left">
                    <span class="">Visitez notre site web</span>
                </div>
            </a>
            <a href="#" class="flex items-center justify-center w-full h-auto px-3 py-5 text-lg font-semibold text-center text-white bg-green-900 rounded-xxl sm:text-2xl">
                <div class="w-1/4 text-left">
                    <i class="text-3xl las la-gift"></i>
                </div>
                <div class="w-3/4 text-left">
                    <span>Faites un don à l'association</span>
                </div>
            </a>
            <a href="#" class="flex items-center justify-center w-full h-auto px-3 py-5 text-lg font-semibold text-center text-white bg-green-900 rounded-xxl sm:text-2xl">
                <div class="w-1/4 text-left">
                    <i class="text-3xl las la-code"></i>
                </div>
                <div class="w-3/4 text-left">
                    <span class=""> NoCode HACKATON</span>
                </div>
            </a>
        </div>

        <div class="z-10 flex space-x-8 text-4xl text-green-900">
            <i class="lab la-facebook"></i>
            <i class="lab la-instagram"></i>
            <i class="lab la-twitter-square"></i>
            <i class="lab la-pinterest-square"></i>
            <i class="lab la-linkedin-in"></i>
        </div>
    </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'IndexPage',
})
</script>
