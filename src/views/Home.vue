<template>
    <div class="basic-layout">
        <div class="header">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
                <el-menu-item>
                    <img class="bg-logo1" src="@/assets/images/logo1.png" alt="">
                </el-menu-item>
                <div class="flex-grow" />
                <el-menu-item index="0" class="common">
                    <router-link to="index">首页</router-link>
                </el-menu-item>
                <!-- <el-menu-item index="2">
            <router-link>赛事</router-link>
        </el-menu-item> -->
                <!-- <el-menu-item index="3">
            <router-link>资讯</router-link>
        </el-menu-item> -->
                <el-menu-item index="1" class="common">
                    <router-link to="VolunteerService">志愿服务</router-link>
                </el-menu-item>
                <!-- <el-menu-item index="3">
            <router-link>后台管理</router-link>
        </el-menu-item> -->
            </el-menu>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="footer">页脚</div>
    </div>
</template>
  
  <script>
import { ref } from 'vue'
export default {
    name: 'home',
    setup () {
        const activeIndex = ref('0')
        const handleSelect = (key, keyPath) => {
            console.log(key, keyPath)
        }
        return {
            activeIndex,
            handleSelect
        }
    }


}
  </script>
  
<style lang="scss">
@import '@/assets/style/global.scss';
.flex-grow {
    flex-grow: 0.7;
}
// .border {
//     border: ;
// }
.basic-layout {
    .header {
        height: px2rem(90px);
        .el-menu-demo {
            height: 100%;
            .bg-logo1 {
                width: px2rem(312px);
                height: px2rem(73px);
                margin-left: px2rem(45px);
            }
            .common {
                position: relative;
                top: 50%;
                height: px2rem(30px);
                font-size: px2rem(18px);
                border-radius: px2rem(15px);
                border: 0;
                transform: translateY(-50%);
                line-height: px2rem(30px);
                text-align: center;
                margin-right: px2rem(25px);
            }
            .is-active {
                background-color: #1d21a9;
                color: #fff !important;
            }
        }
    }
    .content {
    }
    .footer {
        height: px2rem(242px);
        background-color: grey;
    }
}
</style>
