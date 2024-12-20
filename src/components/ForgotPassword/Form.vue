<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <h2 class="brand-text ml-1">
            Vempedindo
          </h2>
        </b-link>
        <b-card-title class="mb-1">
          Esqueceu sua senha? 🔒
        </b-card-title>
        <b-card-text class="mb-2">
          Insira seu e-mail e lhe enviaremos instruções de como recuperar sua senha
        </b-card-text>
        <validation-observer ref="simpleRules">
          <b-form
            class="auth-forgot-password-form mt-2"
            @submit.prevent="validationForm"
          >
            <b-form-group
              label="E-mail"
              label-for="forgot-password-email"
            >
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  id="forgot-password-email"
                  v-model="userEmail"
                  :state="errors.length > 0 ? false:null"
                  name="forgot-password-email"
                  placeholder="john@example.com"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
            <b-button
              variant="access"
              block
              type="submit"
            >
              Enviar link para redefinição
            </b-button>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <b-link :to="{name:'Login'}">
            <feather-icon icon="ChevronLeftIcon" /> Voltar para Login
          </b-link>
        </b-card-text>

      </b-card>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/js/customs/custom'

import Vue from 'vue'
import {
  BLink, BButton, BCardText, BFormGroup, BFormInput,
  BCardTitle, BForm, ToastPlugin, BCard
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { togglePasswordVisibility } from '@/mixins/forms'

Vue.use(ToastPlugin)

require('@/assets/fonts/feather/iconfont.css')

export default {
  name: 'FormFP',
  components: {
    BLink,
    BButton,
    BCardText,
    BFormGroup,
    BFormInput,
    BCardTitle,
    BForm,
    BCard,
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    userEmail: '',
    // validation
    required: '',
    email: ''
  }),
  mixins: [togglePasswordVisibility]
}
</script>

<style lang="scss" scoped>
.btn-access {
  background-color: #444444;
  color: #FFF;
  max-height: 60px !important;
}
@import '@/assets/scss/common/AuthRegister';
</style>
