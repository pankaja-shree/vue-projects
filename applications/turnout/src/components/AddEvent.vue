<template>
<div class='form'>
        <h3>Add an event <input type = 'checkbox' v-model='showForm'></h3>
        <div class='form-group' v-if='showForm'>
            <label>Title</label> 
            <input 
              type='text' 
              placeholder = 'title' 
              class='form-control'
              v-model='event.title'
              />

            <label>Description</label> 
            <input 
              type='text' 
              placeholder = 'description' 
              class='form-control'
              v-model='event.description'
              />

              <label>Date</label> 
            <input 
              type='date' 
              placeholder = 'Date' 
              class='form-control'
              v-model='event.date'
              />

              <label>Location</label> 
            <input 
              type='text' 
              placeholder = 'Location' 
              class='form-control'
              v-model='event.location'
              />

            <button class='btn btn-primary' @click='addEvent'>
             Add event</button>
        </div>
        </div>
</template>

<script>
import { eventsRef } from '../firebaseApp'
export default {
    data() {
        return {
            event : {
                title: '',
                description: '',
                date: '',
                location: '',
                email: ''
            },
           showForm: false
        }
    },
    methods: {
        addEvent() {
            this.event.email = this.$store.state.user.email;
            eventsRef.push(this.event)
        }
    }
}
</script>