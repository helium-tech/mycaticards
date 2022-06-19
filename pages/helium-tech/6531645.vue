<template>
    <div class="font-sans">
        <header class="h-auto flex items-center flex-col">
            <div class="inset-0 w-screen">
                <img src="@/assets/images/banner.jpg" alt="" width="100%">
            </div>
        </header>
        <div class="relative flex flex-col  items-center h-auto">
            <img src="@/assets/images/avatar.jpg" alt=""
                class="absolute rounded-full -top-10 m-auto border-white border-4" width="40%">
            <span class="font-bold text-2xl mt-28 ">Charles K. DZADU</span>
            <div class="space-y-4 flex flex-col text-center items-center justify-center">
                <span class="text-xl text-gray-400">Lead Developper</span>
                <div class="flex space-x-7 font-bold text-2xl">
                    <i class="lab la-whatsapp"></i>
                    <i class="las la-phone"></i>
                    <i class="las la-envelope"></i>
                    <i class="las la-globe-americas"></i>
                </div>
            </div>



            <span class="text-green-900 font-bold text-3xl">Nos Services</span>


            <div class="p-3 w-auto h-auto bg-white rounded-xl mx-4 my-8">
                <div class="bg-white h-full w-full relative flex space-x-5 items-center justify-center">
                    <i class="lar la-arrow-alt-circle-right -rotate-45 absolute top-0 right-0"></i>
                    <div class="w-1/4 flex text-center items-center justify-center">
                        <i class="las la-newspaper text-black text-8xl"></i>
                    </div>
                    <div class="w-3/4 space-y-1">
                        <div class=" w-3/4 inline-block">
                            <span class="text-green-900 font-bold text-xl">CashPay</span>
                        </div>
                        <p>
                            Encaissez des paiements en mobile money par carte bancaire et par virement
                        </p>
                    </div>
                </div>
            </div>


            <div class="p-3 w-auto h-auto bg-white rounded-xl mx-4 my-8">
                <div class="bg-white h-full w-full relative flex space-x-5 items-center justify-center">
                    <i class="lar la-arrow-alt-circle-right -rotate-45 absolute top-0 right-0"></i>
                    <div class="w-1/4 flex text-center items-center justify-center">
                        <i class="las la-desktop text-black text-8xl"></i>
                    </div>
                    <div class="w-3/4 space-y-1">
                        <div class=" w-3/4 inline-block">
                            <span class="text-green-900 font-bold text-xl">Semoa Pro</span>
                        </div>
                        <p>
                            Effectuez et gérez des paiements individuels ou de masse vers vos partenaires
                        </p>
                    </div>
                </div>
            </div>


            <div class="p-3 w-auto h-auto bg-white rounded-xl mx-4 my-8">
                <div class="bg-white h-full w-full relative flex space-x-5 items-center justify-center">
                    <i class="lar la-arrow-alt-circle-right -rotate-45 absolute top-0 right-0"></i>
                    <div class="w-1/4 flex text-center items-center justify-center">
                        <i class="las la-map-marked text-black text-8xl"></i>
                    </div>
                    <div class="w-3/4 space-y-1">
                        <div class=" w-3/4 inline-block">
                            <span class="text-green-900 font-bold text-xl">Dédé Digital Corner</span>
                        </div>

                        <p>
                            Effectuez et gérez des paiements individuels ou de masse vers vos partenaires
                        </p>
                    </div>
                </div>
            </div>

            <div class="w-full m-4 flex flex-col justify-center items-center px-4">
                <a href="#"
                    class="w-full h-auto rounded-3xl text-center bg-green-900 text-white font-semibold text-base  py-3">Visitez
                    notre site web</a>
            </div>

            <div class="w-full m-4 flex flex-col justify-center items-center px-4">
                <a href="#"
                    class="w-full h-auto rounded-3xl text-center bg-green-900 text-white font-semibold text-base  py-3">Faites
                    un
                    don à l'association</a>
            </div>

            <div class="w-full m-4 flex flex-col justify-center items-center px-4">
                <a href="#"
                    class="w-full h-auto rounded-3xl text-center bg-green-900 text-white font-semibold text-base py-3">NoCode
                    HACKATON</a>
            </div>
            <div class="flex space-x-8 text-3xl text-green-900">
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
