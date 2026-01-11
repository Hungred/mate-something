<template>
  <div class="flex-1 min-h-screen bg-neon-bg text-white p-6">
    <header
      class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10"
    >
      <div>
        <h1
          class="text-4xl font-black italic text-white flex items-center gap-3"
        >
          NEON <span class="text-neon-pink shadow-neon">STORE</span>
        </h1>
        <p class="text-gray-400 text-sm mt-2 font-mono">
          提升你的社交戰力，稱霸全場包廂
        </p>
      </div>

      <div
        class="bg-neon-purple border border-white/10 rounded-2xl p-4 flex items-center gap-4 min-w-[200px] shadow-lg"
      >
        <div
          class="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-black shadow-[0_0_15px_rgba(250,204,21,0.5)]"
        >
          $
        </div>
        <div>
          <p
            class="text-[10px] text-gray-400 uppercase font-bold tracking-widest"
          >
            我的代幣
          </p>
          <p class="text-2xl font-black text-white">{{ profile.coins }}</p>
        </div>
        <EButton
          color="pink"
          variant="ghost"
          icon="i-heroicons-plus-circle"
          size="xs"
          class="ml-auto"
        ></EButton>
      </div>
    </header>

    <div class="flex gap-4 mb-8">
      <EButton
        v-for="cat in categorys"
        :key="cat.id"
        variant="solid"
        :color="activeCategory === cat.id ? 'pink' : 'gray'"
        @click="activeCategory = cat.id"
        class="rounded-full px-6"
        >{{ cat.name }}</EButton
      >
    </div>

    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
    >
      <UCard
        v-for="item in filteredProducts"
        :key="item.name"
        class="group bg-neon-purple border-none ring-1 ring-white/5 hover:ring-neon-pink/50 transition-all cursor-pointer overflow-hidden"
      >
        <div
          class="relative h-40 -m-4 mb-4 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent"
        >
          <span
            class="text-6xl group-hover:scale-125 transition-transform duration-500"
            >{{ item.icon }}</span
          >

          <div
            v-if="item.hot"
            class="absolute top-2 left-2 bg-red-600 text-[10px] font-bold px-2 py-0.5 rounded italic"
          >
            HOT
          </div>
        </div>

        <div class="text-center">
          <h3 class="font-bold text-sm mb-1">{{ item.name }}</h3>
          <p class="text-[10px] text-gray-500 mb-3 line-clamp-1">
            {{ item.desc }}
          </p>

          <div
            class="flex items-center justify-center gap-1 text-yellow-400 font-black mb-3"
          >
            <span class="text-xs">$</span>
            <span>{{ item.price }}</span>
          </div>
          <EButton
            block
            color="pink"
            size="xs"
            variant="solid"
            class="font-bold"
            >購買</EButton
          >
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const userStore = useUserStore();
const { profile } = userStore;
const activeCategory = ref('popular');
const categorys = [
  { name: '熱門', id: 'popular' },
  { name: '互動道具', id: 'Interactive' },
  { name: '豪華禮物', id: 'luxury' },
  { name: '特殊特效', id: 'special' },
];
const products = [
  {
    name: '霓虹喇叭',
    icon: '📢',
    price: 500,
    desc: '向全店包廂發送廣播',
    hot: true,
    category: '互動道具',
    categoryId: 'Interactive',
  },
  {
    name: '隱身斗篷',
    icon: '👻',
    price: 1200,
    desc: '隱藏所在的包廂號碼',
    hot: false,
    category: '互動道具',
    categoryId: 'Interactive',
  },
  {
    name: '香檳塔',
    icon: '🍾',
    price: 5000,
    desc: '送給對方包廂的最高敬意',
    hot: true,
    category: '豪華禮物',
    categoryId: 'luxury',
  },
  {
    name: '愛心火箭',
    icon: '🚀',
    price: 9999,
    desc: '霸佔所有人的螢幕 10 秒',
    hot: true,
    category: '豪華禮物',
    categoryId: 'luxury',
  },
  {
    name: '歌神麥克風',
    icon: '🎤',
    price: 300,
    desc: '聊天時名字帶有光輝',
    hot: false,
    category: '特殊特效',
    categoryId: 'special',
  },
  {
    name: '擋酒護盾',
    icon: '🛡️',
    price: 800,
    desc: '拒絕一次挑戰不扣分',
    hot: false,
    category: '互動道具',
    categoryId: 'Interactive',
  },
  {
    name: '粉紅泡泡',
    icon: '🫧',
    price: 200,
    desc: '讓對話框充滿浪漫氣息',
    hot: false,
    category: '特殊特效',
    categoryId: 'special',
  },
  {
    name: '皇冠',
    icon: '👑',
    price: 2500,
    desc: '在排行榜上顯示特殊圖標',
    hot: true,
    category: '特殊特效',
    categoryId: 'special',
  },
];

const filteredProducts = computed(() => {
  if (activeCategory.value === 'popular') return products.filter((p) => p.hot);
  return products.filter((p) => p.categoryId === activeCategory.value);
});
</script>

<style scoped>
.shadow-neon {
  text-shadow: 0 0 15px rgba(255, 0, 127, 0.7);
}
</style>
