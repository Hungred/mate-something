<template>
  <aside
    class="w-64 h-screen bg-[#241322] flex flex-col border-r border-gray-800 p-4 sticky top-0"
  >
    <NuxtLink
      to="/profile"
      class="flex flex-col items-center mb-8 pb-8 border-b border-gray-800 hover:bg-white/5 transition-colors p-2 rounded-xl group"
    >
      <UAvatar
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky"
        size="xl"
        class="mb-3 ring-2 ring-pink-500 group-hover:scale-105 transition-transform"
      />
      <div class="text-center">
        <h3 class="font-bold text-lg flex items-center justify-center gap-1">
          匿名用戶 #302
          <UIcon
            name="i-heroicons-pencil-square"
            class="w-3 h-3 text-gray-500"
          />
        </h3>
        <UBadge color="primary" variant="soft" size="xs">LV.15 社交達人</UBadge>
      </div>
    </NuxtLink>

    <nav class="flex-1 space-y-2">
      <UButton
        v-for="item in menuItems"
        :key="item.label"
        :to="item.to"
        variant="ghost"
        color="gray"
        block
        class="justify-start gap-4 hover:bg-pink-500/10 hover:text-pink-500 transition-all"
        :class="{ 'text-pink-500 bg-pink-500/5': $route.path === item.to }"
      >
        <UIcon :name="item.icon" class="w-5 h-5" />
        {{ item.label }}
      </UButton>
    </nav>

    <div class="mt-auto pt-4 border-t border-gray-800">
      <UButton
        variant="ghost"
        color="gray"
        icon="i-heroicons-cog-6-tooth"
        block
        class="justify-start"
      >
        系統設定
      </UButton>
    </div>
  </aside>
</template>

<script setup>
const menuItems = [
  { label: '首頁大廳', icon: 'i-heroicons-home', to: '/' },
  {
    label: '公開交誼廳',
    icon: 'i-heroicons-chat-bubble-left-right',
    to: '/public-lounge',
  },
  { label: '配對專區', icon: 'i-heroicons-heart', to: '/match' },
  { label: '排行榜', icon: 'i-heroicons-trophy', to: '/hall-of-fame' },
  { label: '禮物商店', icon: 'i-heroicons-shopping-bag', to: '/store' },
];
</script>
