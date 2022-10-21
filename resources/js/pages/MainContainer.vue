<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{ name: 'Home' }">Home</router-link>
                            |
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Event' }">Event</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainContainer"
}
</script>

<style scoped>

</style>
