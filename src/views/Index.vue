<template>
    <div class="index">
        <div class="top">
            <div class="banner">
                <Carousel />
                <!-- <ul id="carousel_list" class="carousel_list">
                    <li>
                        <img src="@/assets/images/banner1.jpg" alt="">
                    </li>
                    <li>
                        <img src="@/assets/images/banner2.jpg" alt="">
                    </li>
                    <li>
                        <img src="@/assets/images/banner3.jpg" alt="">
                    </li>
                    <li>
                        <img src="@/assets/images/banner4.jpg" alt="">
                    </li>
                    <li>
                        <img src="@/assets/images/banner5.jpg" alt="">
                    </li>
                </ul>
                <div class="btns center-wrap">
                    <a @click="handleCarousel" href="javascript:;" class="btn-left"></a>
                    <a @click="handleCarousel" href="javascript:;" class="btn-right"></a>
                </div> -->
            </div>
        </div>
        <div class="center">
            <div class="intro">
                <div class="title">亚运会简介</div>
                <div class="main">
                    <h1 class="sub-title">亚洲规模最大的综合性运动会</h1>
                    <div class="main-content">
                        <div class="main-content-left">
                            <p>杭州2022年第19届亚运会( The 19th Asian Games Hangzhou 2022)，简称“杭州2022年亚运会”，将在中国浙江杭州举
                                行，原定于2022年9月10日至25日举办；2022年7月19日亚洲奥林匹克理事会宣布将于2023年9月23日至10月8日举办。
                            </p>
                            <p>
                                截至2020年12月，本届亚洲运动会共设40个竞赛大项，包括31个奥运项目和9个非奥运项目 [1] 。同时，在保持40个大项目
                                不变的前提下，增设电子竞技、霹雳舞两个竞赛项目
                            </p>
                            <p>
                                杭州2022年亚运会以“中国新时代·杭州新亚运”为定位、“中国特色、浙江风采、杭州韵味、精彩纷呈”为目标，秉持“绿色、智
                                能、节俭、文明”的办会理念，坚持“以杭州为主，浙江全省共享”的办赛原则。
                            </p>
                            <div class="main-content-left-link">
                                <a href="https://baike.baidu.com/item/%e4%ba%9a%e6%b4%b2%e8%bf%90%e5%8a%a8%e4%bc%9a/2753926" target="_blank">查看详情<span>——></span></a>
                            </div>
                        </div>
                        <div class="main-content-right">
                            <img src="@/assets/images/intro1.jpg" alt="">
                        </div>
                        <div class="main-content-img">
                            <img src="@/assets/images/intro2.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">大屏</div>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
export default {
    name: 'index',
    components: { Carousel }
    // setup () {
    //     const handleCarouse = () => { }
    //     return {
    //         handleCarouse
    //     }
    // }
}

</script>

<style lang='scss' scoped>
@import '@/assets/style/global.scss';
.index {
    font-size: px2rem(50px);
    .top {
        height: px2rem(722px);
        .center-wrap {
            width: 1160px;
            height: 100%;
        }
        .btns {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            .btn-left {
                position: absolute;
                left: px2rem(-38px);
                top: 50%;
                transform: translateY(-50%);
                width: px2rem(28px);
                height: px2rem(44px);
                border-radius: 2px;
                background: url(@/assets/images/icons.png) no-repeat -21px -94px;
            }
            .btn-right {
                position: absolute;
                right: px2rem(-38px);
                top: 50%;
                transform: translateY(-50%);
                width: px2rem(28px);
                height: px2rem(44px);
                border-radius: 2px;
                background: url(@/assets/images/icons.png) no-repeat -21px -29px;
            }
        }
        .banner {
            position: relative;
            height: 100%;
            .carousel_list {
                height: 100%;
                width: 600%;
                overflow: hidden;
                li {
                    float: left;
                    width: 16.666%;
                    height: 100%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
    .center {
        box-sizing: border-box;
        height: px2rem(1185px);
        .intro {
            padding: 2.6% 0;
            .title {
                width: 100%;
                text-align: center;
                font-size: px2rem(40px);
                color: rgb(158, 86, 107);
                margin-bottom: px2rem(40px);
            }
            .main {
                width: px2rem(1400px);
                margin: 0 auto;
                .sub-title {
                    color: #000;
                    font-weight: 700;
                    text-align: center;
                }
                .main-content {
                    position: relative;
                    display: flex;
                    margin-top: px2rem(40px);
                    &-left {
                        width: 40%;
                        height: px2rem(985px);
                        p {
                            line-height: px2rem(35px);
                            text-indent: 2em;
                            font-size: px2rem(20px);
                            margin-bottom: px2rem(24px);
                        }
                        &-link {
                            width: px2rem(200px);
                            height: px2rem(50px);
                            font-size: px2rem(16px);
                            text-align: center;
                            border: 1.4px solid #000;
                            border-radius: px2rem(50px);

                            a {
                                border-radius: px2rem(50px);
                                color: #000;
                                line-height: px2rem(50px);
                                display: block;
                                width: 100%;
                                height: 100%;
                            }
                            a:hover {
                                background-color: #000;
                                color: #fff;
                            }
                            span {
                                padding-left: px2rem(20px);
                            }
                        }
                    }
                    &-right {
                        width: 60%;
                        height: px2rem(980px);
                        img {
                            display: block;
                            width: px2rem(700px);
                            height: px2rem(800px);
                            transform: translate(px2rem(140px));
                        }
                    }
                    &-img {
                        display: block;
                        width: px2rem(894px);
                        height: px2rem(874px);
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
            }
        }
    }
    .bottom {
        height: px2rem(920px);
        background-color: green;
        // margin-top: 200px;
    }
}
</style>