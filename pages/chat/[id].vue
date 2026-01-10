<template>
  <div class="flex flex-col h-[calc(100vh-64px)] bg-[#1a0b16]">
    <div
      class="p-4 border-b border-white/5 bg-[#241322]/50 flex items-center justify-between"
    >
      <div class="flex items-center gap-3">
        <UButton
          icon="i-heroicons-arrow-left"
          variant="ghost"
          color="gray"
          @click="$router.back()"
        />
        <div class="relative">
          <UAvatar :src="chatPartner.avatar" size="sm" />
          <span
            class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#1a0b16] rounded-full"
          ></span>
        </div>
        <div>
          <h2 class="text-sm font-bold text-white">{{ chatPartner.name }}</h2>
          <p class="text-[10px] text-gray-500">{{ chatPartner.status }}</p>
        </div>
      </div>
      <div class="flex gap-2">
        <UButton
          icon="i-heroicons-phone"
          variant="ghost"
          color="gray"
          size="sm"
        />
        <UButton
          icon="i-heroicons-ellipsis-vertical"
          variant="ghost"
          color="gray"
          size="sm"
        />
      </div>
    </div>

    <div class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="['flex', msg.isMe ? 'justify-end' : 'justify-start']"
      >
        <div
          :class="[
            'max-w-[75%] flex gap-2',
            msg.isMe ? 'flex-row-reverse' : 'flex-row',
          ]"
        >
          <UAvatar
            v-if="!msg.isMe"
            :src="chatPartner.avatar"
            size="xs"
            class="mt-1"
          />
          <div>
            <div
              :class="[
                'px-4 py-2 rounded-2xl text-sm leading-relaxed shadow-lg',
                msg.isMe
                  ? 'bg-gradient-to-br from-neon-pink to-purple-600 text-white rounded-tr-none'
                  : 'bg-[#2d1b2e] text-gray-200 border border-white/5 rounded-tl-none',
              ]"
            >
              {{ msg.text }}
            </div>
            <p
              :class="[
                'text-[10px] text-gray-600 mt-1',
                msg.isMe ? 'text-right' : 'text-left',
              ]"
            >
              {{ msg.time }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4 bg-[#241322]/80 border-t border-white/5 backdrop-blur-md">
      <div class="flex items-center gap-3">
        <UButton
          icon="i-heroicons-face-smile"
          variant="ghost"
          color="gray"
          size="sm"
        />
        <UInput
          v-model="newMessage"
          placeholder="輸入訊息..."
          class="flex-1"
          variant="none"
          ui="input: { base: 'bg-white/5 border-none focus:ring-1 focus:ring-neon-pink rounded-full px-4 text-sm' }"
          @keyup.enter="sendMessage"
        />
        <UButton
          icon="i-heroicons-paper-airplane"
          color="pink"
          class="rounded-full shadow-[0_0_15px_rgba(255,0,127,0.4)]"
          @click="sendMessage"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const newMessage = ref('');

// 模擬數據
const chatPartner = ref({
  name: `Room ${route.params.id} 的代表`,
  avatar: `https://i.pravatar.cc/150?u=${route.params.id}`,
  status: '正在線上',
});

const messages = ref([
  {
    text: '嘿！剛才在排行榜看到你們包廂，唱得不錯喔！',
    time: '22:05',
    isMe: false,
  },
  {
    text: '哈哈謝謝，我們這首杰倫馬拉松快唱完了，等下要 PK 嗎？',
    time: '22:06',
    isMe: true,
  },
  { text: '好啊，來點熱鬧的！你們現在幾個人？', time: '22:07', isMe: false },
]);

const sendMessage = () => {
  if (!newMessage.value.trim()) return;
  messages.value.push({
    text: newMessage.value,
    time: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
    isMe: true,
  });
  newMessage.value = '';
};
</script>
