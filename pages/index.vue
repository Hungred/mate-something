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
        <UButton color="pink" variant="solid" size="lg" icon="i-heroicons-plus">
          發布我的需求
        </UButton>
      </header>

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
            v-for="n in 5"
            :key="n"
            class="flex items-center justify-between p-4 bg-[#241322] rounded-xl border border-gray-800 hover:border-pink-500/50 transition-colors"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 font-bold"
              >
                {{ 300 + n }}
              </div>
              <div>
                <p class="font-bold">需要擋酒部隊！性別不限</p>
                <p class="text-xs text-gray-500">5 分鐘前發布 · 3 人已應徵</p>
              </div>
            </div>
            <UButton
              variant="ghost"
              class="bg-neon-pink hover:bg-neon-pink/60 text-white"
              >查看詳情</UButton
            >
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
