<template>
  <div>
    <div class="auth-wrapper auth-v2">
      <b-row class="auth-inner m-0">
        <b-link class="brand-logo backgrounded-purple">
          <h2 class="brand-text ml-1">
            Vempedindo
          </h2>
        </b-link>
        <b-col
          lg="8"
          class="d-none d-lg-flex align-items-center p-5 backgrounded-purple"
        >
          <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <b-img
              fluid
              :src="sideImg"
              alt="Login V2"
            />
          </div>
        </b-col>
        <b-col
          lg="4"
          class="d-flex align-items-center auth-bg px-2 p-lg-5"
        >
          <b-col
            sm="8"
            md="6"
            lg="12"
            class="px-xl-2 mx-auto"
          >
            <b-card-title
              title-tag="h2"
              class="font-weight-bold mb-1"
            >
              Bem vindo ao Vempedindo! 👋
            </b-card-title>
            <b-card-text class="mb-2 text-muted ">
              Por favor faça login em sua conta para iniciar uma nova experiência de Delivery
            </b-card-text>
            <validation-observer ref="loginValidation">
              <b-form
                class="auth-login-form mt-2"
                @submit.prevent
              >
                <b-form-group>
                  <div class="d-flex justify-content-between">
                    <label for="Email">E-mail</label>
                  </div>
                  <validation-provider
                    #default="{ errors }"
                    name="Email"
                    rules="required|email"
                  >
                    <b-form-input
                      id="login-email"
                      v-model="userEmail"
                      :state="errors.length > 0 ? false:null"
                      name="login-email"
                      placeholder="john@example.com"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
                <b-form-group>
                  <div class="d-flex justify-content-between">
                    <label for="login-password">Senha</label>
                    <b-link :to="{name:'ForgotPassword'}">
                      <small>Esqueceu sua senha?</small>
                    </b-link>
                  </div>
                  <validation-provider
                    #default="{ errors }"
                    name="Password"
                    rules="required"
                  >
                    <b-input-group
                      class="input-group-merge"
                      :class="errors.length > 0 ? 'is-invalid':null"
                    >
                      <b-form-input
                        id="login-password"
                        v-model="password"
                        :state="errors.length > 0 ? false:null"
                        class="form-control-merge"
                        :type="passwordFieldType"
                        name="login-password"
                        placeholder="············"
                      />
                      <b-input-group-append is-text>
                        <feather-icon
                          class="cursor-pointer"
                          :icon="passwordToggleIcon"
                          @click="togglePasswordVisibility"
                        />
                      </b-input-group-append>
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
                <b-form-group>
                  <b-form-checkbox
                    id="remember-me"
                    v-model="status"
                    name="checkbox-1"
                  >
                    Lembrar-me
                  </b-form-checkbox>
                </b-form-group>
                <b-button
                  type="submit"
                  variant="github"
                  block
                  @click="validationForm()"
                >
                  Acessar
                </b-button>
              </b-form>
            </validation-observer>
            <b-card-text class="text-center mt-2">
              <span>Novo em nossa plataforma? </span>
              <b-link :to="{name:'Register'}">
                <span>&nbsp;Cadastre-se</span>
              </b-link>
            </b-card-text>
          </b-col>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/js/customs/custom'
import '@/assets/js/validations/validations'

import Vue from 'vue'
import {
  BRow, BLink, BCol, BButton, BCardText, BFormGroup, BFormCheckbox, BInputGroupAppend, BFormInput,
  BCardTitle, BImg, BForm, BInputGroup, ToastPlugin, BSpinner
} from 'bootstrap-vue' // eslint-disable-line no-use-before-define
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import SideImage from '@/assets/images/SideImage1.svg'
import { togglePasswordVisibility } from '@/mixins/forms'

Vue.use(ToastPlugin)

require('@/assets/fonts/feather/iconfont.css')

export default {
  name: 'FormLogin',
  components: {
    BRow,
    BLink,
    BCol,
    BButton,
    BCardText,
    BFormGroup,
    BFormCheckbox,
    BInputGroupAppend,
    BFormInput,
    BCardTitle,
    BImg,
    BForm,
    ValidationProvider,
    ValidationObserver,
    BInputGroup,
    // eslint-disable-next-line
    BSpinner
  },
  mixins: [togglePasswordVisibility],
  data: () => ({
    status: '',
    password: '',
    userEmail: '',
    sideImg: SideImage,
    required: '',
    email: '',
    visible: true
  }),
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    }
  },
  methods: {
    validationForm() {
      // const variant = 'success'
      this.$refs.loginValidation.validate().then(success => {
        if (success) {
          const h = this.$createElement
          const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
            h('b-spinner', { props: { type: 'grow', small: true } }),
            ' Aguarde ',
            'em breve você será ',
            h('strong', 'redirecionado(a)!')
          ])
          const vNodesTitle = h('div', { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'], style: 'background-color: gray' }, [
            h('strong', { class: 'mr-2' }, 'Sucesso'),
            h('small', { class: 'ml-auto font-italics' }, 'agora')
          ])
          this.$bvToast.toast([vNodesMsg], {
            title: [vNodesTitle],
            solid: true,
            variant: 'success'
          })
          setTimeout(() => {
            this.$router.push('/home')
          }, 5000)
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/common/AuthRegister';
</style>
