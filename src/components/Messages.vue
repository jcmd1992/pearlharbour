<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="messages" :options="options">
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editMessage(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteMessage(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import messagesservice from '@/services/messagesservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Messages',
  data () {
    return {
      messagetitle: ' Messages List ',
      messages: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'messageid', 'usersid', 'messages', 'edit', 'remove'],
      options: {
        perPage: 10,
        filterable: ['messageid', 'usersid', 'messages'],
        sortable: ['messages'],
        headings: {
          _id: 'ID',
          messageid: 'Messageid',
          usersid: 'Usersid',
          messages: 'Messages'
        }
      }
    }
  },
  // Fetches Messages when the component is created.
  created () {
    this.loadMessages()
  },
  methods: {
    loadMessages: function () {
      messagesservice.fetchMessages()
        .then(response => {
          // JSON responses are automatically parsed.
          this.messages = response.data
          console.log(this.messages)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editMessage: function (id) {
      this.$router.params = id
      this.$router.push('edit')
    },
    deleteMessage: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true
        // showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result.value)
        if (result.value === true) {
          messagesservice.deleteMessage(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadMessages()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Message ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log('SWAL Else Result : ' + result.value)
          this.$swal('Cancelled', 'Your Message still exits!', 'info')
        }
      })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
