<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header class="mb-6">
        <div class="wrapper">
            <h1 class="text-xl text-center font-bold">
                Hello World!
            </h1>
            <nav class="flex">
                <RouterLink to="/" class="underline px-4">
                    Home
                </RouterLink>
                <RouterLink to="/about" class="underline px-4">
                    About
                </RouterLink>
            </nav>
        </div>
    </header>
    <RouterView />
</template>
