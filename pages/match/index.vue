<template>
  <div class="flex-1 min-h-screen bg-[#1a0b16] text-white p-6">

    <div class="mb-8">
      <p
        class="text-neon-pink text-xs font-bold tracking-widest mb-1 uppercase"
      >
        Live Match
      </p>
      <h1 class="text-4xl font-black text-white mb-2">配對專區</h1>
      <p class="text-gray-400 text-sm">為您的包廂尋找最完美的派對氣氛...</p>
    </div>

    <div
      class="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10"
    >
      <div
        class="w-full lg:w-[45%] bg-[#241322] border-2 border-neon-pink rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(255,0,127,0.2)]"
      >
        <div class="relative h-48 bg-gray-800">
          <img
            src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop"
            class="w-full h-full object-cover opacity-60"
          />
          <UBadge class="absolute top-4 left-4" color="black">您的包廂</UBadge>
          <div class="absolute bottom-4 left-4">
            <h2 class="text-3xl font-black italic">ROOM 302</h2>
            <div class="flex items-center gap-4 mt-2 text-xs">
              <span class="flex items-center gap-1"
                ><UIcon name="i-heroicons-users" /> 4 人</span
              >
              <span class="text-neon-pink flex items-center gap-1"
                ><UIcon name="i-heroicons-microphone" /> 正在唱: K-Pop
                熱門</span
              >
            </div>
          </div>
        </div>
        <div class="p-4 bg-[#1f101d]">
          <div class="flex -space-x-2 mb-6">
            <UAvatar
              v-for="i in 3"
              :key="i"
              :src="`https://i.pravatar.cc/100?img=${i + 10}`"
              size="sm"
              class="ring-2 ring-[#1f101d]"
            />
            <div
              class="w-8 h-8 rounded-full bg-neon-pink flex items-center justify-center text-[10px] font-bold ring-2 ring-[#1f101d]"
            >
              You
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 border-t border-gray-800 pt-4">
            <div class="text-center">
              <p class="text-[10px] text-gray-500 uppercase mb-1">勝率</p>
              <p class="text-orange-400 font-bold">🏆 68%</p>
            </div>
            <div class="text-center border-l border-gray-800">
              <p class="text-[10px] text-gray-500 uppercase mb-1">熱度</p>
              <p class="text-blue-400 font-bold">🔥 高</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 flex flex-col items-center">
        <div
          class="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-2xl font-black italic z-10 bg-[#1a0b16]"
        >
          VS
        </div>
        <div
          class="mt-4 bg-[#241322] px-4 py-2 rounded-xl border border-neon-pink/50 text-center"
        >
          <p class="text-[10px] text-gray-500 mb-1">連線狀態</p>
          <div class="text-neon-pink flex items-center gap-1 text-xs font-bold">
            <UIcon name="i-heroicons-rss" class="animate-pulse" /> 已連線
          </div>
        </div>
      </div>

      <div
        class="w-full lg:w-[45%] bg-[#241322] border border-gray-800 rounded-2xl overflow-hidden opacity-80 hover:opacity-100 transition-opacity"
      >
        <div class="relative h-48 bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop"
            class="w-full h-full object-cover opacity-40"
          />
          <UBadge class="absolute top-4 right-4" color="pink" variant="solid"
            >配對成功！</UBadge
          >
          <div class="absolute bottom-4 left-4 text-left">
            <h2 class="text-3xl font-black italic text-gray-300">ROOM 301</h2>
            <div class="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <span class="flex items-center gap-1"
                ><UIcon name="i-heroicons-users" /> 5 人</span
              >
              <span class="flex items-center gap-1"
                ><UIcon name="i-heroicons-musical-note" /> 正在唱:
                搖滾情歌</span
              >
            </div>
          </div>
        </div>
        <div class="p-4">
          <div class="flex -space-x-2 mb-6">
            <UAvatar
              v-for="i in 4"
              :key="i"
              :src="`https://i.pravatar.cc/100?img=${i + 20}`"
              size="sm"
              class="grayscale ring-2 ring-[#241322]"
            />
            <div class="text-xs text-gray-500 ml-4 self-center">+1</div>
          </div>
          <div class="grid grid-cols-2 gap-4 border-t border-gray-800 pt-4">
            <div class="text-center text-gray-400">
              <p class="text-[10px] uppercase mb-1">勝率</p>
              <p class="font-bold">🏆 72%</p>
            </div>
            <div class="text-center border-l border-gray-800 text-gray-400">
              <p class="text-[10px] uppercase mb-1">距離</p>
              <p class="font-bold">📍 500m</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-[#241322] p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-white/5"
    >
      <div>
        <h3 class="text-xl font-bold">準備好連線了嗎？</h3>
        <p class="text-gray-500 text-sm">
          您有
          <span class="text-neon-pink font-bold">25 秒</span> 的時間接受邀請。
        </p>
      </div>
      <div class="flex gap-4 w-full md:w-auto">
        <UButton
          variant="ghost"
          class="flex-1 md:flex-none justify-center px-8 bg-[#22101c] text-white"
          >略過</UButton
        >
        <UButton
          class="flex-1 md:flex-none justify-center px-8 font-black animate-pulse bg-neon-pink hover:bg-neon-pink/60"
          icon="i-heroicons-bolt"
        >
          開始派對模式
        </UButton>
      </div>
    </div>
  </div>
</template>
