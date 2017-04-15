<template>
<div class='col-md-4'>
    <div class='event-card'>
        <h4 class='card-title'>{{event.title}}</h4>
        <p class='card-text'>{{event.description}}</p>
        <li class='list-group list-group-flesh'>
            <li class='list-group-item'>Date: {{event.date}}</li>
            <li class='list-group-item'>Location: {{event.location}}</li>
            <li class='list-group-item'>Host: {{event.email}}</li>
        </li>
    </div>
</div>
</template>

<script>
export default {
    props: ['event']
}
</script>