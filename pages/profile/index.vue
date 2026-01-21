<template>
  <div class="flex-1 min-h-screen bg-neon-bg text-white p-6 pb-20">
    <header class="relative mb-8 flex w-full">
      <div
        class="flex-1 w-full h-32 bg-gradient-to-r from-neon-pink/20 to-purple-900/40 rounded-3xl border border-white/5 flex justify-center"
      >
        <div class="flex items-center gap-6">
          <div class="relative group">
            <UAvatar
              :src="profile.avatar"
              size="3xl"
              class="ring-4 ring-neon-pink shadow-[0_0_20px_rgba(255,0,127,0.3)]"
            />
            <div
              class="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity"
            >
              <UIcon name="i-heroicons-camera" class="w-8 h-8" />
            </div>
          </div>
          <div class="mb-2">
            <h1 class="text-3xl font-black italic">
              {{ profile.name }} #{{ profile.room_name }}
            </h1>
            <UBadge color="primary" variant="soft" size="md"
              >LV.{{ profile.level }} 社交達人</UBadge
            >
          </div>
        </div>
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-1 space-y-6">
        <UCard class="bg-neon-purple border-none ring-1 ring-white/5">
          <h3
            class="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2"
          >
            <UIcon name="i-heroicons-chart-bar" /> 戰力統計
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center p-3 bg-white/5 rounded-xl">
              <p class="text-2xl font-black text-neon-pink">
                {{ profile.info.win }}
              </p>
              <p class="text-[10px] text-gray-500 uppercase">勝場</p>
            </div>
            <div class="text-center p-3 bg-white/5 rounded-xl">
              <p class="text-2xl font-black text-blue-400">
                {{ profile.info.winRate }}%
              </p>
              <p class="text-[10px] text-gray-500 uppercase">勝率</p>
            </div>
            <div class="text-center p-3 bg-white/5 rounded-xl">
              <p class="text-2xl font-black text-yellow-400">
                {{ profile.info.popularity }}
              </p>
              <p class="text-[10px] text-gray-500 uppercase">人氣值</p>
            </div>
            <div class="text-center p-3 bg-white/5 rounded-xl">
              <p class="text-2xl font-black text-green-400">
                {{ profile.info.items }}
              </p>
              <p class="text-[10px] text-gray-500 uppercase">道具數</p>
            </div>
          </div>
        </UCard>

        <UCard class="bg-neon-purple border-none ring-1 ring-white/5">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-sm font-bold">當前 WiFi 綁定</h3>
            <UBadge color="green" variant="subtle" size="xs">已連線</UBadge>
          </div>
          <p class="text-xs text-gray-500 mb-4 font-mono">
            SSID: HolidayKTV_Guest_5G
          </p>
          <EButton block color="gray" variant="soft" size="xs"
            >重新偵測 WiFi</EButton
          >
        </UCard>
        <UCard class="bg-neon-purple border-none ring-1 ring-white/5">
          <h3
            class="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2"
          >
            <UIcon name="ic:baseline-people" /> 所有包廂用戶列表
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="user in userList"
              class="text-center p-3 bg-white/5 rounded-xl border-1 border-gray-800 hover:border-pink-500/50 transition-colors"
              @click="switchUser(user.user_id)"
            >
              <p class="text-2xl font-black text-neon-pink">
                {{ user.name }}
              </p>
              <p class="text-[10px] text-gray-500 uppercase">
                {{ user.room_name }} #{{ user.room_id }}
              </p>
            </div>
          </div>
        </UCard>
      </div>

      <div class="lg:col-span-2 space-y-6">
        <UCard class="bg-neon-purple border-none ring-1 ring-white/5">
          <h3 class="text-lg font-bold mb-6">基本設定</h3>
          <div class="space-y-6">
            <div class="flex flex-col">
              <UFormField label="顯示暱稱" help="這是在大廳與配對時看到的名稱">
                <UInput
                  v-model="profileEdit.name"
                  variant="padded"
                  :disabled="!isEditingName || isEditingBio"
                  class="border-1 border-gray-700 rounded-md"
                />
              </UFormField>
              <div class="flex justify-end gap-3">
                <EButton
                  v-if="isEditingName"
                  variant="soft"
                  color="gray"
                  @click="stopEdit('name')"
                  >取消</EButton
                >
                <EButton
                  v-if="!isEditingName"
                  variant="solid"
                  color="pink"
                  :disabled="isEditingBio"
                  class="px-8 font-bold"
                  @click="startEdit('name')"
                  >編輯</EButton
                >
                <EButton
                  v-if="isEditingName"
                  variant="solid"
                  color="pink"
                  class="px-8 font-bold"
                  @click="saveProfile('name', profileEdit.name)"
                  >儲存所有變更</EButton
                >
              </div>
            </div>
            <div class="flex flex-col">
              <UFormField label="個性簽名" help="讓其他包廂一眼記住你">
                <UTextarea
                  v-model="profileEdit.bio"
                  :rows="3"
                  variant="padded"
                  color="neutral"
                  size="xl"
                  :disabled="!isEditingBio || isEditingName"
                  placeholder="自我介紹一下吧..."
                  class="border-1 border-gray-700 rounded-md"
                />
              </UFormField>
              <div class="flex justify-end gap-3">
                <EButton
                  v-if="isEditingBio"
                  variant="soft"
                  color="gray"
                  @click="stopEdit('bio')"
                  >取消</EButton
                >
                <EButton
                  v-if="!isEditingBio"
                  variant="solid"
                  color="pink"
                  :disabled="isEditingName"
                  class="px-8 font-bold"
                  @click="startEdit('bio')"
                  >編輯</EButton
                >
                <EButton
                  v-if="isEditingBio"
                  variant="solid"
                  color="pink"
                  class="px-8 font-bold"
                  @click="saveProfile('bio', profileEdit.bio)"
                  >儲存所有變更</EButton
                >
              </div>
            </div>
            <USeparator class="my-6" />

            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-bold">隱身模式</p>
                  <p class="text-xs text-gray-500">
                    在排行榜與公開交誼廳中隱藏頭像
                  </p>
                </div>
                <USwitch v-model="profile.stealth" color="neutral" />
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <p class="font-bold">接收挑戰邀請</p>
                  <p class="text-xs text-gray-500">
                    是否允許其他包廂向您發起 VS 對決
                  </p>
                </div>
                <USwitch v-model="profile.acceptMatch" color="neutral" />
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
const userStore = useUserStore();
const { getUser } = userStore;
const { profile, userList } = storeToRefs(userStore);
const profileEdit = ref({ ...profile.value });

const { locale } = useI18n();
const toast = useToast();
const isSaving = ref(false);
const isEditingName = ref(false);
const isEditingBio = ref(false);

const startEdit = (type) => {
  if (type === 'name') {
    isEditingName.value = true;
  } else {
    isEditingBio.value = true;
  }
};

const stopEdit = (type) => {
  if (type === 'name') {
    isEditingName.value = false;
  } else {
    isEditingBio.value = false;
  }
  profileEdit.value[type] = profile[type];
};

const saveProfile = async (type, text) => {
  isSaving.value = true;
  // 1. 發送給 Gemini 審查
  try {
    const { isSafe, reason, suggestion } = await $fetch('/api/moderate', {
      method: 'POST',
      body: {
        text: text,
        locale: locale.value,
      },
    });
    if (!isSafe) {
      // 2. 如果不安全，顯示警告
      toast.add({
        title: '內容不當',
        description: `原因：${reason}。建議：${suggestion}`,
        icon: 'i-heroicons-shield-check',
        color: 'red',
        // 增加自訂霓虹樣式
        ui: {
          background: 'bg-[#1a0b16] border border-red-500/50',
          ring: 'ring-1 ring-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.4)]',
        },
      });
      return;
    }

    // 3. 安全則執行儲存邏輯
    toast.add({
      title: '個人資料更新成功',
      icon: 'i-heroicons-check-circle',
      color: 'primary',
    });

    profile.name = profileEdit.value.name;
    profile.bio = profileEdit.value.bio;

    stopEdit(type);
  } catch (error) {
    toast.add({ title: '連線異常', color: 'gray' });
  } finally {
    isSaving.value = false;
    stopEdit();
  }
};

const switchUser = (userId) => {
  getUser(userId);
};

watch(
  profile,
  (newProfile) => {
    profileEdit.value = { ...newProfile };
  },
  { deep: true }
);
</script>
