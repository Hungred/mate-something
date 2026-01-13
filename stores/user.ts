import { defineStore } from 'pinia';
interface UserFromAPI {
  user_id: string;
  name: string;
  bio: string | null;
  level: number | null;
  coins: number | null;
  avatar_url: string | null;
  room_id: number | null;
  room_name: string | null;
  stealth: boolean | null;
  accept_match: boolean | null;
}

export const useUserStore = defineStore('user', () => {
  const profile = ref({
    user_id: '',
    name: 'user',
    bio: 'bio',
    level: 0,
    coins: 0,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky',
    stealth: false, //隱身模式
    acceptMatch: false, //接收挑戰邀請
    room_id: 0,
    room_name: '',
    info: {
      win: 86,
      winRate: 72,
      popularity: 1200,
      items: 15,
    },
  });

  const isVip = computed(() => profile.value.level > 10);

  function updateProfile(
    newData: Partial<{ name: string; bio: string; avatar: string }>
  ) {
    profile.value = { ...profile.value, ...newData };
  }

  function addCoins(amount: number) {
    profile.value.coins += amount;
  }

  // 新增一個 status
  const loading = ref(false);
  const error = ref(null);

  async function getUser(userId = 'u-001') {
    loading.value = true;
    error.value = null;
    try {
      const data = await $fetch<UserFromAPI>('/api/user', {
        query: { id: userId },
      });
      if (!data) {
        throw new Error('User not found');
      }
      profile.value = {
        user_id: data.user_id,
        name: data.name,
        bio: data.bio || '',
        level: data.level ?? 1,
        coins: data.coins ?? 0,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky',
        room_id: data.room_id ?? 0,
        room_name: data.room_name ?? '',
        stealth: data.stealth ?? false,
        acceptMatch: data.accept_match ?? false,
        info: {
          win: 86,
          winRate: 72,
          popularity: 1200,
          items: 15,
        },
      };
    } catch (err) {
      console.error('fetch user failed', err);
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  return {
    profile,
    isVip,
    updateProfile,
    addCoins,
    getUser,
  };
});
