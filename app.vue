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
const { getUser, getUserList } = userStore;
getUser();
getUserList();
</script>
