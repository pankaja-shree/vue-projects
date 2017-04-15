<template>
    <div class='container-fluid '>
        <h3>Dashboard Component</h3>
        <button class='btn btn-danger btn-small signout-btn' @click='signOut'>Sign Out </button>
        <AddEvent />
        <hr>
        <div class='col-md-12'>
            <EventItem
             v-for='(event_item, index) in this.$store.state.events'
             :event='event_item'
             key='index'
             />
        </div>
    </div>
   
</template>

<script>
import {firebaseApp, eventsRef} from '../firebaseApp'
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem.vue'
export default {
    methods: {
        signOut() {
            this.$store.dispatch('signOut')
            firebaseApp.auth().signOut()
        }
    },
    components: {
        AddEvent,
        EventItem
    },
    //lifecycle hook mounted to keep the eventsRef alive as long as Dashboard component is alive
    mounted() {
        //on takes 2 parameters , triggers when new element is pushed to firebase database
        //1. string - wat kind of info we want from firebaseApp
        //2. arrow function - firebase specific info
        eventsRef.on('value',snap => {
            //events array which populates all events stored from firebase
            let events = []
            //for each loop on snap reference to add firebase events
            snap.forEach(event => {
            events.push(event.val())
            })
            this.$store.dispatch('setEvents', events)
        })
    }
}
</script>