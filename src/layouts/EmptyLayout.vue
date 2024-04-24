<template>
    <div class="empty-layout h-svh flex bg-gray-500 justify-center">
        <router-view></router-view>
    </div>

</template>


<style  scoped>

    .empty-layout {
        background-image: url(../assets/images/bg.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

</style>