<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <message-form :message="message" messageBtnTitle="Update Message"
                           @message-is-created-updated="updateMessage"></message-form>
          </template>
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
      message: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Message '
    }
  },
  components: {
    'message-form': MessageForm
  },
  created () {
    this.getMessage()
  },
  methods: {
    getMessage: function () {
      messagesservice.fetchMessage(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.message = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Message in Edit: ' + JSON.stringify(this.message, null, 5))
        })
    },
    updateMessage: function (message) {
      console.log('Before PUT ' + JSON.stringify(message, null, 5))
      messagesservice.putDonation(this.$router.params, message)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(message, null, 5))
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
