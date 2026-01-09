<template>
  <div class="min-h-screen bg-neon-bg text-white p-6">
    <header
      class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
    >
      <div>
        <h1
          class="text-3xl font-black italic text-white flex items-center gap-2"
        >
          PUBLIC <span class="text-neon-pink">LOUNGE</span>
        </h1>
        <p class="text-gray-400 text-sm mt-1">
          目前有 42 個活躍包廂正在徵求隊友
        </p>
      </div>
      <div class="flex gap-2">
        <UInput
          icon="i-heroicons-magnifying-glass"
          placeholder="搜尋包廂或主題..."
          class="w-full md:w-64"
          variant="padded"
        />
      </div>
    </header>

    <div class="flex gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
      <UButton
        v-for="tab in categories"
        :key="tab.name"
        :variant="activeTab === tab.name ? 'solid' : 'ghost'"
        :color="'gray'"
        :class="activeTab === tab.name ? 'bg-neon-pink' : 'bg-gray-700'"
        class="rounded-full whitespace-nowrap px-6 hover:bg-neon-pink"
        @click="activeTab = tab.name"
      >
        <UIcon :name="tab.icon" class="mr-1" />
        {{ tab.label }}
      </UButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard
        v-for="item in feedItems"
        :key="item.id"
        class="group bg-neon-purple border-none ring-1 ring-white/5 hover:ring-neon-pink/50 transition-all duration-300"
      >
        <div class="relative h-40 -m-4 mb-4 overflow-hidden rounded-t-xl">
          <img
            :src="item.image"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
          ></div>
          <UBadge color="pink" class="absolute top-3 right-3 shadow-lg">{{
            item.tag
          }}</UBadge>
          <div class="absolute bottom-3 left-3 flex items-center gap-2">
            <UAvatar
              :src="item.hostAvatar"
              size="xs"
              class="ring-1 ring-white"
            />
            <span class="text-xs font-bold">{{ item.roomName }}</span>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-lg font-bold line-clamp-1">{{ item.title }}</h3>
          <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {{ item.description }}
          </p>

          <div
            class="flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-wider"
          >
            <span>徵求人數 {{ item.currentPeople }}/{{ item.maxPeople }}</span>
            <span class="text-neon-pink">{{ item.timeLeft }}</span>
          </div>
          <UProgress
            :value="(item.currentPeople / item.maxPeople) * 100"
            color="pink"
            size="xs"
          />

          <div class="flex flex-row pt-2 gap-2">
            <UButton
              block
              variant="soft"
              class="bg-neon-pink group-hover:bg-neon-pink/60 text-white transition-colors flex-1"
              >應徵加入
            </UButton>
            <UButton
              block
              to="/chat/301"
              variant="soft"
              class="bg-neon-pink group-hover:bg-neon-pink/60 text-white transition-colors flex-1"
              >私訊房主
            </UButton>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('All');

const categories = [
  { name: 'All', label: '全部', icon: 'i-heroicons-squares-2x2' },
  { name: 'Sing', label: '唱歌派對', icon: 'i-heroicons-musical-note' },
  { name: 'Drink', label: '擋酒部隊', icon: 'i-heroicons-beaker' },
  { name: 'Game', label: '狼人殺/遊戲', icon: 'i-heroicons-puzzle-piece' },
  { name: 'Food', label: '美食共享', icon: 'i-heroicons-cake' },
];

const feedItems = [
  {
    id: 1,
    title: '杰倫馬拉松 - 尋找能對唱的女聲',
    description:
      '目前包廂四位男生，都是杰倫粉，徵求 1~2 位喜歡唱歌的朋友一起同樂。',
    tag: '唱歌派對',
    roomName: 'ROOM 302',
    currentPeople: 2,
    maxPeople: 4,
    timeLeft: '15:00 結束',
    image:
      'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400',
    hostAvatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: 2,
    title: '烈酒挑戰！尋找擋酒大將',
    description: '隔壁包廂太囂張，我們需要能喝的朋友來撐場。目前戰況焦灼！',
    tag: '擋酒部隊',
    roomName: 'ROOM 501',
    currentPeople: 3,
    maxPeople: 6,
    timeLeft: '02:30 結束',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400',
    hostAvatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: 3,
    title: '3烈酒挑戰！尋找擋酒大將',
    description: '隔壁包廂太囂張，我們需要能喝的朋友來撐場。目前戰況焦灼！',
    tag: '擋酒部隊',
    roomName: 'ROOM 501',
    currentPeople: 3,
    maxPeople: 6,
    timeLeft: '02:30 結束',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400',
    hostAvatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: 4,
    title: '4烈酒挑戰！尋找擋酒大將',
    description: '隔壁包廂太囂張，我們需要能喝的朋友來撐場。目前戰況焦灼！',
    tag: '擋酒部隊',
    roomName: 'ROOM 501',
    currentPeople: 3,
    maxPeople: 6,
    timeLeft: '02:30 結束',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400',
    hostAvatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: 5,
    title: '5烈酒挑戰！尋找擋酒大將',
    description: '隔壁包廂太囂張，我們需要能喝的朋友來撐場。目前戰況焦灼！',
    tag: '擋酒部隊',
    roomName: 'ROOM 501',
    currentPeople: 3,
    maxPeople: 6,
    timeLeft: '02:30 結束',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400',
    hostAvatar: 'https://i.pravatar.cc/100?img=2',
  },
];
</script>
