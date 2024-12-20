import { extend, localize } from 'vee-validate'
/* eslint-disable */
import {
  required as rule_required,
  email as rule_email,
  min as rule_min,
  confirmed as rule_confirmed,
  regex as rule_regex,
  between as rule_between,
  alpha as rule_alpha,
  integer as rule_integer,
  digits as rule_digits,
  alpha_dash as rule_alpha_dash,
  alpha_num as rule_alpha_num,
  length as rule_length,
} from 'vee-validate/dist/rules'
import ar from 'vee-validate/dist/locale/ar.json'
import en from 'vee-validate/dist/locale/en.json'
import ptBr from 'vee-validate/dist/locale/pt_BR.json'

// eslint-disable-next-line object-curly-newline
import { validatorPositive, validatorUrlValidator, validatorPassword, validatorCreditCard } from './validators'

// ////////////////////////////////////////////////////////
// General
// ////////////////////////////////////////////////////////

export const required = extend('required', {
  ...rule_required,
  message: 'O campo {_field_} é obrigatório!'
})

export const email = extend('email', {
  ...rule_email,
  message: 'Por favor informe um {_field_} válido.'
})

export const min = extend('min', rule_min)

export const confirmed = extend('confirmed', rule_confirmed)

export const regex = extend('regex', rule_regex)

export const between = extend('between', rule_between)

export const alpha = extend('alpha', rule_alpha)

export const integer = extend('integer', rule_integer)

export const digits = extend('digits', rule_digits)

export const alphaDash = extend('alpha-dash', rule_alpha_dash)

export const alphaNum = extend('alpha-num', rule_alpha_num)

export const length = extend('length', rule_length)

export const positive = extend('positive', {
  validate: validatorPositive,
  message: 'Por favor insira um número positivo!',
})

export const credit = extend('credit-card', {
  validate: validatorCreditCard,
  message: 'Este não é um cartão de crédito válido!',
})

export const password = extend('password', {
  validate: validatorPassword,
  message: 'Sua {_field_} deve conter ao menos um letra maiúscula, uma minúscula, um caractere especial e um número.',
})

export const url = extend('url', {
  validate: validatorUrlValidator,
  message: 'URL é inválida',
})

// Install English and Arabic localizations.
localize({
  ptBr: {
    messages: ptBr.messages,
    names: {
      email: 'E-mail',
      password: 'Senha'
    }
  },
  en: {
    messages: en.messages,
    names: {
      email: 'Email',
      password: 'Password',
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?',
      },
    },
  },
  ar: {
    messages: ar.messages,
    names: {
      email: 'البريد الإلكتروني',
      password: 'كلمة السر',
    },
    fields: {
      password: {
        min: 'كلمة السر قصيرة جداً سيتم اختراقك',
      },
    },
  },
})
