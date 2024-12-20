<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Register v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <h2 class="brand-text ml-1">
            Vempedindo
          </h2>
        </b-link>

        <b-card-title class="mb-1">
          O futuro está aqui 🚀
        </b-card-title>
        <b-card-text class="mb-2">
          Crie facilmente seu app de entregas e divirta-se!
        </b-card-text>

        <!-- form -->
        <validation-observer ref="registerForm">
          <b-form
            class="auth-register-form mt-2"
            @submit.prevent="validationForm"
          >
            <!-- username -->
            <b-form-group
              label="Nome de usuário"
              label-for="username"
            >
              <validation-provider
                #default="{ errors }"
                name="Username"
                rules="required"
              >
                <b-form-input
                  id="username"
                  v-model="username"
                  :state="errors.length > 0 ? false:null"
                  name="register-username"
                  placeholder="johndoe"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- email -->
            <b-form-group
              label="E-mail"
              label-for="email"
            >
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  id="email"
                  v-model="regEmail"
                  :state="errors.length > 0 ? false:null"
                  name="register-email"
                  placeholder="john@example.com"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group
              label="Senha"
              label-for="password"
            >
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
                    id="password"
                    v-model="password"
                    :type="passwordFieldType"
                    :state="errors.length > 0 ? false:null"
                    class="form-control-merge"
                    name="register-password"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      :icon="passwordToggleIcon"
                      class="cursor-pointer"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox
                id="register-privacy-policy"
                v-model="status"
                name="checkbox-1"
              >
                Eu concordo com
                <b-link>a política de privacidade</b-link> & <b-link>os termos</b-link>
              </b-form-checkbox>
            </b-form-group>
            <b-button
              variant="access"
              block
              type="submit"
            >
              Cadastrar
            </b-button>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <span>Já tem uma conta? </span>
          <b-link :to="{name:'Login'}">
            <span>Acessar login</span>
          </b-link>
        </b-card-text>

        <!-- <div class="divider my-2">
          <div class="divider-text">
            or
          </div>
        </div>
        <div class="auth-footer-btn d-flex justify-content-center">
          <b-button
            variant="facebook"
            href="javascript:void(0)"
          >
            <feather-icon icon="FacebookIcon" />
          </b-button>
          <b-button
            variant="twitter"
            href="javascript:void(0)"
          >
            <feather-icon icon="TwitterIcon" />
          </b-button>
          <b-button
            variant="google"
            href="javascript:void(0)"
          >
            <feather-icon icon="MailIcon" />
          </b-button>
          <b-button
            variant="github"
            href="javascript:void(0)"
          >
            <feather-icon icon="GithubIcon" />
          </b-button>
        </div> -->
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
  BLink, BButton, BCardText, BFormGroup, BFormCheckbox, BInputGroupAppend, BFormInput,
  BCardTitle, BForm, BInputGroup, ToastPlugin, BCard
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import ToastificationContent from '@/components/Utils/ToastificationContent.vue'
import { togglePasswordVisibility } from '@/mixins/forms'

Vue.use(ToastPlugin)

require('@/assets/fonts/feather/iconfont.css')

export default {
  name: 'FormRegister',
  components: {
    BLink,
    BButton,
    BCard,
    BCardText,
    BFormGroup,
    BFormCheckbox,
    BInputGroupAppend,
    BFormInput,
    BCardTitle,
    BForm,
    ValidationProvider,
    ValidationObserver,
    BInputGroup
  },
  mixins: [togglePasswordVisibility],
  data: () => ({
    regEmail: '',
    username: '',
    password: '',
    status: '',

    // validation rules
    required: '',
    email: ''
  }),
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    }
  },
  methods: {
    validationForm() {
      this.$refs.registerForm.validate().then(success => {
        if (success) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Form Submitted',
              icon: 'EditIcon',
              variant: 'success'
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.btn-access {
  background-color: #444444;
  color: #FFF;
  max-height: 60px !important;
}
@import '@/assets/scss/common/AuthRegister';
</style>
