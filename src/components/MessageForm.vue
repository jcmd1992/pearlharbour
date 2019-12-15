<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label">Messageid</label>
      <select id="messageid" name="messageid" class="form-control"
              type="text" v-model="messageid">
      </select>
    </div>
    <div class="form-group">
      <label class="form-control-label" name="usersid">usersid (Enter a number between 1 and 1000)</label>
      <input class="form__input" type="decimal" v-model.trim="usersid"/>
    </div>
    <div class="form-group">
      <label class="form__label">Personal Message</label>
      <input class="form__input" placeholder="enter some message here" v-model.trim="$v.messages.$model"/>
    </div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ messageBtnTitle }}</button>
    </p>
    <p>
      <a href="#/messages" class="btn btn-primary btn1" role="button">Manage Messages</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your Message!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Donating...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, minLength, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['messageBtnTitle', 'message'],
  data () {
    return {
      messagetitle: ' Message ',
      messageid: this.message.messageid,
      usersid: this.message.usersid,
      messages: this.message.messages,
      submitStatus: null
    }
  },
  validations: {
    messageid: {
      required,
      between: between(1, 1000)
    },
    usersid: {
      required,
      between: between(1, 1000)
    },
    messages: {
      required,
      minLength: minLength(5)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var message = {
            messageid: this.messageid,
            usersid: this.usersid,
            messages: this.messages
          }
          this.message = message
          console.log('Submitting in MessageForm : ' +
              JSON.stringify(this.message, null, 5))
          this.$emit('message-is-created-updated', this.message)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
