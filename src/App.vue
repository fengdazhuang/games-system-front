<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app',
    setup () {
        // document.addEventListener('DOMContentLoaded', () => {
        //     const html = document.querySelector('html')
        //     let fontSize = window.innerWidth / 10
        //     fontSize = fontSize > 50 ? 50 : fontSize
        //     html.style.fontSize = fontSize + 'px'
        //     console.log(window.innerWidth);
        // })
    }
}

</script>
<style lang="scss">
@import './assets/style/global.scss';
// .text {
//     font-size: px2rem(50px);
//     color: orange;
// }
</style>
