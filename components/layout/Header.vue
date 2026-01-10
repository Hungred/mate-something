<template>
  <header
    class="h-16 border-b border-white/5 bg-[#1a0b16]/80 backdrop-blur-md sticky top-0 z-40 px-6 flex items-center justify-between"
  >
    <div class="flex-1 max-w-md hidden md:block">
      <UInput
        icon="i-heroicons-magnifying-glass"
        size="sm"
        color="white"
        :trailing="false"
        placeholder="搜尋包廂、活動或好友..."
        class="w-full"
        variant="none"
        ui="input: { base: 'bg-white/5 border-none focus:ring-1 focus:ring-neon-pink transition-all' }"
      />
    </div>

    <div class="md:hidden">
      <span class="text-neon-pink font-black italic tracking-tighter"
        >MATE</span
      >
    </div>

    <div class="flex items-center gap-4">
      <NuxtLink
        to="/store"
        class="hidden sm:flex items-center gap-2 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20 group"
      >
        <UIcon name="i-heroicons-banknotes" class="text-yellow-400" />
        <span
          class="text-xs font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors"
          >25,840</span
        >
      </NuxtLink>
      <div class="flex justify-between items-center">
        <div
          class="bg-[#2d1b2e] px-3 py-1 rounded-full border border-neon-pink/30 flex items-center gap-2 text-xs"
        >
          <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          在線: 1,204
        </div>
      </div>
      <div class="flex items-center gap-4">
        <USelectMenu
          :model-value="locale"
          :items="['zh-TW', 'en']"
          size="xs"
          variant="none"
          class="w-24 bg-white/5 rounded-lg"
          @update:model-value="onLocaleChange"
        />
      </div>

      <UPopover>
        <UChip color="pink" size="sm" :show="hasNotifications">
          <UButton
            icon="i-heroicons-bell"
            variant="ghost"
            color="gray"
            class="hover:text-neon-pink transition-colors"
          />
        </UChip>

        <template #panel>
          <div
            class="p-4 w-80 bg-[#241322] border border-white/10 rounded-xl shadow-2xl"
          >
            <div
              class="flex justify-between items-center mb-4 border-b border-white/5 pb-2"
            >
              <h3 class="font-bold text-sm">即時通知</h3>
              <UButton variant="link" size="xs" color="gray">全部已讀</UButton>
            </div>
            <div class="space-y-4 max-h-60 overflow-y-auto">
              <div
                v-for="n in notifications"
                :key="n.id"
                class="flex gap-3 text-xs p-2 rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <UAvatar :src="n.avatar" size="xs" />
                <div class="flex-1">
                  <p class="text-gray-200">
                    <span class="font-bold">{{ n.user }}</span> {{ n.action }}
                  </p>
                  <p class="text-[10px] text-gray-500 mt-1">{{ n.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </UPopover>

      <UButton
        icon="i-heroicons-bars-3-bottom-right"
        variant="ghost"
        color="gray"
        class="md:hidden"
      />
    </div>
  </header>
</template>

<script setup>
const hasNotifications = ref(true);
const { locale, setLocale } = useI18n();

const onLocaleChange = (value) => {
  setLocale(value);
};

const notifications = [
  {
    id: 1,
    user: 'Room 301',
    action: '向您的包廂發起了 VS 挑戰！',
    time: '2 分鐘前',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    id: 2,
    user: '小黑哥',
    action: '在公開交誼廳標記了你',
    time: '15 分鐘前',
    avatar: 'https://i.pravatar.cc/100?img=8',
  },
  {
    id: 3,
    user: '系統通知',
    action: '您的禮物「霓虹喇叭」已發送成功',
    time: '1 小時前',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=system',
  },
];
</script>
