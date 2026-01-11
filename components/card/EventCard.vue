<template>
  <UCard
    class="group bg-neon-purple border-none ring-1 ring-white/5 hover:ring-neon-pink/50 transition-all duration-300"
  >
    <div class="relative h-40 -m-4 mb-4 overflow-hidden rounded-t-xl">
      <img
        :src="event.image"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
      ></div>
      <UBadge color="pink" class="absolute top-3 right-3 shadow-lg">{{
        event.tag
      }}</UBadge>
      <div class="absolute bottom-3 left-3 flex items-center gap-2">
        <UAvatar :src="event.hostAvatar" size="xs" class="ring-1 ring-white" />
        <span class="text-xs font-bold">{{ event.roomName }}</span>
      </div>
    </div>

    <div class="space-y-3">
      <h3 class="text-lg font-bold line-clamp-1">{{ event.title }}</h3>
      <p
        class="text-xs text-gray-400 line-clamp-2 leading-relaxed min-h-[40px]"
      >
        {{ event.description }}
      </p>

      <div
        class="flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-wider"
      >
        <span>徵求人數 {{ event.currentPeople }}/{{ event.maxPeople }}</span>
        <span class="text-neon-pink">{{ event.timeLeft }}</span>
      </div>
      <UProgress
        :value="(event.currentPeople / event.maxPeople) * 100"
        color="pink"
        size="xs"
      />

      <div class="flex flex-row pt-2 gap-2">
        <EButton block color="pink" variant="solid" class="flex-1"
          >應徵加入</EButton
        >
        <EButton
          block
          color="pink"
          variant="solid"
          class="flex-1"
          to="/chat/301"
          >私訊房主</EButton
        >
      </div>
    </div>
  </UCard>
</template>
<script setup lang="ts">
interface EventType {
  tag: string;
  image: string;
  hostAvatar: string;
  roomName: string;
  title: string;
  description: string;
  currentPeople: number;
  maxPeople: number;
  timeLeft: number;
}

const props = defineProps<{
  event: EventType;
}>();
</script>
