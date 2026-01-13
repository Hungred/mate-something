<template>
  <UModal
    v-if="isOpen"
    v-model:open="isOpen"
    overlay
    class="bg-[#241322] ring-1 ring-pink-500/30"
  >
    <template #header>
      <div class="flex items-center justify-between w-full">
        <h3 class="text-xl font-bold neon-text-pink">發布社交需求</h3>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          class="-my-1"
          @click="isOpen = false"
        />
      </div>
    </template>
    <template #body>
      <div class="space-y-4 flex flex-col">
        <UFormField label="你想徵求什麼？">
          <UInput
            v-model="form.title"
            placeholder="例如：徵求合唱夥伴"
            size="lg"
            color="pink"
          />
        </UFormField>

        <UFormField label="在哪個包廂？">
          <UInput
            v-model="form.roomId"
            placeholder="302"
            color="pink"
            disabled
          />
        </UFormField>

        <UFormField label="補充說明">
          <UTextarea
            v-model="form.content"
            placeholder="詳細內容..."
            color="pink"
          />
        </UFormField>
      </div>
    </template>
    <template #footer="{ close }">
      <div class="flex justify-end gap-3 w-full">
        <EButton color="gray" variant="solid" @click="isOpen = false"
          >取消</EButton
        >
        <EButton
          color="pink"
          variant="solid"
          :loading="submitting"
          @click="handleSubmit"
        >
          確認發布
        </EButton>
      </div>
    </template>
  </UModal>
</template>

<script setup>
const userStore = useUserStore();
const { profile } = userStore;
const isOpen = defineModel({ default: false });
const submitting = ref(false);
const emit = defineEmits(['success']);

const form = reactive({
  title: '',
  roomId: profile.room_id,
  content: '',
});

const handleSubmit = async () => {
  if (!form.title) return;
  submitting.value = true;
  try {
    await $fetch('/api/requests/create', {
      method: 'POST',
      body: form,
    });

    isOpen.value = false;
    emit('success');

    Object.assign(form, { title: '', roomId: null, content: '' });
  } catch (err) {
    console.error('發布失敗', err);
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped>
.neon-text-pink {
  color: #fff;
  text-shadow: 0 0 7px #ff007f, 0 0 10px #ff007f;
}
</style>
