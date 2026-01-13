<template>
  <div>
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
<script setup>
const userStore = useUserStore();
const { getUser, profile } = userStore;
getUser();
</script>
