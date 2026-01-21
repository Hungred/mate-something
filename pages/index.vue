<template>
  <div class="flex-1 overflow-y-auto min-h-screen bg-[#1a0b16]">
    <div
      class="bg-gradient-to-r from-pink-600/20 to-purple-600/20 p-3 text-center border-b border-pink-500/20"
    >
      <span class="text-sm font-medium animate-pulse"
        >🔥 即時動態：305包廂剛剛發起了「生死格鬥合唱邀請」！</span
      >
    </div>

    <main class="p-8">
      <header class="mb-8 flex justify-between items-end">
        <div>
          <h1 class="text-3xl font-bold neon-text-pink">晚上好，媒神麼？</h1>
          <p class="text-gray-400">目前店內共有 128 位用戶在線互動中</p>
        </div>
        <EButton
          color="pink"
          variant="solid"
          size="lg"
          icon="i-heroicons-plus"
          @click="showRequestModal = true"
          >發布我的需求</EButton
        >
      </header>
      <CreateRequest v-model="showRequestModal" @success="handleRefresh" />

      <section class="mb-10">
        <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
          <UIcon name="i-heroicons-fire" class="text-orange-500" />
          熱門配對
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard
            v-for="i in 3"
            :key="i"
            class="neon-border bg-[#2d1b2e] overflow-hidden group"
          >
            <div class="flex items-center justify-between">
              <div class="flex -space-x-3">
                <UAvatar
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=A"
                  class="ring-2 ring-purple-900"
                />
                <UAvatar
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=B"
                  class="ring-2 ring-purple-900"
                />
              </div>
              <UBadge color="pink" variant="subtle">PK中</UBadge>
            </div>
            <div class="mt-4">
              <p class="font-bold text-lg">302 包廂 vs 301 包廂</p>
              <p class="text-sm text-gray-400">主題：誰才是今日歌神？</p>
            </div>
          </UCard>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-bold mb-4">公開交誼廳需求</h2>

        <div class="space-y-4">
          <div
            v-if="!matchList || matchList.length === 0"
            class="flex items-center justify-center p-4 bg-[#241322] rounded-xl border border-gray-800 hover:border-pink-500/50 transition-colors"
          >
            快去發佈需求，揪人一起嗨吧！
          </div>
          <div
            v-for="item in matchList"
            :key="index"
            class="flex items-center justify-between p-4 bg-[#241322] rounded-xl border border-gray-800 hover:border-pink-500/50 transition-colors"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-auto h-12 p-2 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 font-bold"
              >
                {{ item.room_name }}
              </div>
              <div>
                <p class="font-bold">{{ item.title }}</p>
                <p class="text-xs text-gray-500">
                  {{ getReleaseTime(item.createdAt) }}前發布 · 3 人已應徵
                </p>
              </div>
            </div>
            <EButton
              color="pink"
              variant="solid"
              @click="handleClickMatch(item)"
              >查看詳情</EButton
            >
          </div>
        </div>
      </section>
      <UModal
        v-if="showMatchDetail"
        v-model:open="showMatchDetail"
        class="bg-[#241322] ring-1 ring-pink-500/30"
      >
        <template #header>
          <div class="flex items-center justify-between w-full">
            <h3 class="text-xl font-bold neon-text-pink">
              ROOM {{ matchDetail.room_id }} 的需求詳情
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="showMatchDetail = false"
            />
          </div>
        </template>
        <template #body>
          <h2>{{ matchDetail.title }}</h2>
          <div class="mt-2 p-2 opacity-60 border-1 rounded-md">
            {{ matchDetail.content }}
          </div>
        </template>
      </UModal>
    </main>
  </div>
</template>
<script setup>
const userStore = useUserStore();
const { profile } = storeToRefs(userStore);
const showRequestModal = ref(false);
const showMatchDetail = ref(false);
const matchDetail = ref({});

const handleRefresh = () => {
  refresh();
};

const handleClickMatch = (item) => {
  matchDetail.value = item;
  showMatchDetail.value = true;
};

const {
  data: matchList,
  pending,
  error,
  refresh,
} = useAsyncData(
  'match-lists',
  () =>
    $fetch('/api/requests/get', {
      params: { room_id: profile.value.room_id },
    }),
  {
    lazy: true,
    immediate: false,
  }
);

watch(
  () => profile.value.room_id,
  (roomId) => {
    if (!roomId) return;
    refresh();
  },
  { immediate: true }
);

const getReleaseTime = (date) => {
  const createTime = new Date(date).getTime();
  const now = Date.now();
  const diff = now - createTime; // 毫秒差

  return formatDate(diff, false);
};
</script>
