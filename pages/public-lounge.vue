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
      <div v-for="item in feedItems" :key="item.id">
        <EventCard :event="item"></EventCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import EventCard from '~/components/card/EventCard.vue';

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
