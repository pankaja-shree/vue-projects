<template>
<div class='form'>
        <h3>Create a new Story</h3>
        <div class='form-group'>
            <label>Title</label> 
            <input 
              type='text' 
              placeholder = 'title' 
              class='form-control'
              v-model='story.title'
              />

            <label>Body</label> 
            <textarea
              placeholder = 'Body' 
              class='form-control'
              rows = '10'
              v-model='story.body'
              />

              <label>Tags</label> 
            <input 
              type='text' 
              placeholder = 'Tags' 
              class='form-control'
              v-model='story.tags'
              />

            <button class='btn btn-primary' @click='addstory'>
             Add story</button>
        </div>
        </div>
</template>

<script>
import { storiesRef } from '../firebaseApp'
export default {
    data() {
        return {
            story : {
                title: '',
                body: '',
                date: '',
                tags: '',
                email: ''
            }
        }
    },
    methods: {
        addstory() {
            this.story.email = this.$store.state.user.email;
            this.story.date = (new Date()).toLocaleDateString();
            storiesRef.push(this.story)
        }
    }
}
</script>