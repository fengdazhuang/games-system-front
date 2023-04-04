<template>
    <div class="login-wrapper">
        <div class="modal">
            <el-form ref="userForm" :model="user" status-icon :rules="rules">
                <div class="title">
                    杭州亚运会管理系统
                </div>
                <el-form-item :style="{margin:'0 0 30px 0'}" prop="username">
                    <el-input type="text" :prefix-icon="Avatar" v-model="user.username" />
                </el-form-item>
                <el-form-item :style="{margin:'0 0 50px 0'}" prop="password">
                    <el-input type="password" :prefix-icon="Lock" v-model="user.password" />
                </el-form-item>
              <el-form-item :style="{margin:'0 0 50px 0'}" prop="validateCode">
                <el-input :style="{width:'60%'}" type="validateCode" :prefix-icon="Iphone" v-model="user.validateCode" />
                <el-image
                    :style="{width:'100px',height:'30px',margin:'0 0 0 20px',cursor:'pointer'}"
                    :src="imgsrc"
                    @click="handleChangeImage"
                />
              </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="btn-login" @click="toLogin">登录</el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script>
import { Avatar, Lock,Iphone } from "@element-plus/icons-vue";
import storage from '../utils/storage';
export default {
    name: 'login',
    data () {
        return {
            user: {
                username: '',
                password: '',
              validateCode:'',
              key:''
            },
            imgsrc:'',
            rules: {
                username: [
                    {
                        required: true, message: '请输入用户名', trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true, message: '请输入密码', trigger: 'blur'
                    }
                ],
              validateCode:[
                {
                    required: true, message: '请输入验证码', trigger: 'blur'
                }
              ]
            }
        }
    },
  created(){
      this.$api.getValidateCode().then(res => {
        console.log('ress',res)
        this.imgsrc= res.validateCode
        this.user.key = res.key
      })
  },
    methods: {
        toLogin () {
            this.$refs.userForm.validate(valid => {
                if (valid) {
                    this.$api.login(this.user).then(res => {
                        console.log(res);
                        // this.$store.commit('saveUserInfo', res)
                        this.$router.push('/index')
                    })
                } else {
                    return false
                }
            })
        },
      handleChangeImage(){
        this.$api.getValidateCode().then(res => {
          this.imgsrc= res.validateCode
        })
      }
    },
    setup () {
        return {
            Avatar, Lock,Iphone
        }
    }
}

</script>

<style lang='scss' scoped>
@import '@/assets/style/global.scss';
.login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url('@/assets/images/loginBg.png');
    background-size: 100% 100%;
    .modal {
        width: px2rem(300px);
        height: px2rem(300px);
        padding: 50px;
        border-radius: 4px;
        box-shadow: 0px 0px 10px 3px #c7c9cb4d;
        background-color: transparent;

        .el-form {
            // background-color: #fff;
        }
        .title {
            color: #fff;
            font-size: px2rem(30px);
            line-height: 1.5;
            text-align: center;
            margin-bottom: 30px;
        }

        .btn-login {
            width: 100%;
        }
    }
}
</style>
