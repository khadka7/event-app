<template>
    <div>
        <h1>Hello,</h1>
        <p>
            <router-link to="/events">Go to Event</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: "Home",
    mounted() {
        console.log('home')
    }
}
</script>

<style scoped>

</style>
