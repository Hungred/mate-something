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
          <img
            v-if="item.image_url"
            :src="`${item.image_url}`"
            alt=""
            class="w-[150px] h-[150px]"
          />
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

const {
  data: products,
  pending,
  error,
} = await useAsyncData('shop-items', () => $fetch('/api/shop/items'), {
  // default: () => [],
  lazy: false,
});

// // 診斷 1：檢查伺服器端有沒有報錯
// if (error.value) {
//   console.error('API 請求出錯了:', error.value);
// }

// // 診斷 2：檢查現在是誰在跑
// if (import.meta.server) {
//   console.log('伺服器正在抓資料...', products.value?.length);
// }
// if (import.meta.client) {
//   console.log(
//     '瀏覽器正在檢查快取...',
//     products.value?.length,
//     useNuxtApp().payload.data
//   );
// }

const categorys = [
  { name: '熱門', id: 'popular' },
  { name: '互動道具', id: 'interactive' },
  { name: '豪華禮物', id: 'luxury' },
  { name: '特殊特效', id: 'special' },
];

const filteredProducts = computed(() => {
  if (!products.value) return [];
  return products.value.filter((p) => p.category === activeCategory.value);
});
</script>

<style scoped>
.shadow-neon {
  text-shadow: 0 0 15px rgba(255, 0, 127, 0.7);
}
</style>
