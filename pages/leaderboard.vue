<template>
  <div class="flex-1 min-h-screen bg-neon-bg text-white p-6">
    <header class="text-center mb-12">
      <h1 class="text-4xl font-black italic tracking-tighter text-white">
        HALL OF <span class="text-neon-pink shadow-neon">FAME</span>
      </h1>
      <p class="text-gray-400 text-sm mt-2 font-mono">本週最強包廂與社交達人</p>
    </header>

    <div
      class="flex flex-col md:flex-row items-end justify-center gap-4 mb-16 px-4"
    >
      <div class="order-2 md:order-1 flex flex-col items-center w-full md:w-32">
        <div class="relative mb-4">
          <UAvatar
            :src="rankList[1].avatar"
            size="xl"
            class="ring-4 ring-gray-400"
          />
          <div
            class="absolute -top-5 -right-3 w-8 h-8 bg-gray-400 text-black rounded-full flex items-center justify-center font-bold"
          >
            2
          </div>
        </div>
        <div
          class="bg-[#2d1b2e] w-full h-24 rounded-t-xl flex flex-col items-center justify-center border-t-2 border-gray-400"
        >
          <span class="font-bold text-sm">{{ rankList[1].name }}</span>
          <span class="text-xs text-gray-500"
            >{{ rankList[1].points }} pts</span
          >
        </div>
      </div>

      <div class="order-1 md:order-2 flex flex-col items-center w-full md:w-40">
        <UIcon
          name="icon-park-twotone:crown-three"
          class="text-yellow-400 w-8 h-8 mb-2 animate-bounce"
        />
        <div class="relative mb-4">
          <UAvatar
            :src="rankList[0].avatar"
            size="2xl"
            class="ring-4 ring-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.4)]"
          />
          <div
            class="absolute -top-5 -right-6 w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center font-black text-lg"
          >
            1
          </div>
        </div>
        <div
          class="bg-[#3d1f36] w-full h-36 rounded-t-xl flex flex-col items-center justify-center border-t-4 border-yellow-400"
        >
          <span class="font-black text-neon-pink">{{ rankList[0].name }}</span>
          <span class="text-sm font-bold text-yellow-400"
            >{{ rankList[0].points }} pts</span
          >
        </div>
      </div>

      <div class="order-3 md:order-3 flex flex-col items-center w-full md:w-32">
        <div class="relative mb-4">
          <UAvatar
            :src="rankList[2].avatar"
            size="xl"
            class="ring-4 ring-orange-700"
          />
          <div
            class="absolute -top-5 -right-3 w-8 h-8 bg-orange-700 text-white rounded-full flex items-center justify-center font-bold"
          >
            3
          </div>
        </div>
        <div
          class="bg-[#2d1b2e] w-full h-20 rounded-t-xl flex flex-col items-center justify-center border-t-2 border-orange-700"
        >
          <span class="font-bold text-sm">{{ rankList[2].name }}</span>
          <span class="text-xs text-gray-500"
            >{{ rankList[2].points }} pts</span
          >
        </div>
      </div>
    </div>

    <div class="max-w-3xl mx-auto space-y-3">
      <div
        v-for="(user, index) in rankList.slice(3)"
        :key="user.name"
        class="flex items-center justify-between p-4 bg-[#241322] rounded-xl border border-white/5 hover:border-neon-pink/50 transition-colors"
      >
        <div class="flex items-center gap-4">
          <span class="w-6 text-gray-500 font-mono italic"
            >#{{ index + 4 }}</span
          >
          <UAvatar :src="user.avatar" size="sm" />
          <span class="font-medium">{{ user.name }}</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm text-gray-400">{{ user.points }} pts</span>
          <UIcon
            :name="
              user.trend === 'up'
                ? 'i-heroicons-arrow-trending-up'
                : 'i-heroicons-arrow-trending-down'
            "
            :class="user.trend === 'up' ? 'text-green-500' : 'text-red-500'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const rankList = [
  {
    name: 'Room 302 (杰倫粉)',
    points: '12,840',
    avatar: 'https://i.pravatar.cc/150?u=302',
    trend: 'up',
  },
  {
    name: '酒國英雄 007',
    points: '11,200',
    avatar: 'https://i.pravatar.cc/150?u=007',
    trend: 'up',
  },
  {
    name: 'Room 501',
    points: '9,850',
    avatar: 'https://i.pravatar.cc/150?u=501',
    trend: 'down',
  },
  {
    name: '高音小王子',
    points: '8,400',
    avatar: 'https://i.pravatar.cc/150?u=sing',
    trend: 'up',
  },
  {
    name: '東區小黑哥',
    points: '7,200',
    avatar: 'https://i.pravatar.cc/150?u=black',
    trend: 'down',
  },
  {
    name: 'Room 205',
    points: '6,900',
    avatar: 'https://i.pravatar.cc/150?u=205',
    trend: 'up',
  },
  {
    name: '隱身土豪',
    points: '5,500',
    avatar: 'https://i.pravatar.cc/150?u=rich',
    trend: 'down',
  },
];
</script>

<style scoped>
.shadow-neon {
  text-shadow: 0 0 15px rgba(255, 0, 127, 0.7);
}
</style>
