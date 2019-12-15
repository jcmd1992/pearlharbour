<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <message-form :message="message" messageBtnTitle="Send a Message"
                         @message-is-created-updated="submitMessage"></message-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import messagesservice from '@/services/messagesservice'
import MessageForm from '@/components/MessageForm'

export default {
  data () {
    return {
      message: {messageid: 0, usersid: 0, messages: ''},
      messagetitle: ' Create a Message '
    }
  },
  components: {
    'message-form': MessageForm
  },
  methods: {
    submitMessage: function (message) {
      messagesservice.postMessage(message)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
