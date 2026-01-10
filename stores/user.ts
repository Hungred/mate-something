import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const profile = ref({
    name: '新玩家Anita ',
    bio: '目前在 302 包廂，杰倫粉歡迎來 PK！不喝酒，只比歌喉 🎤',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky',
    level: 1,
    coins: 25840,
    room: '302',
    roomId: '302',
    info: {
      win: 86,
      winRate: 72,
      popularity: 1200,
      items: 15,
    },
    stealth: false, //隱身模式
    acceptMatch: false, //接收挑戰邀請
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

  return {
    profile,
    isVip,
    updateProfile,
    addCoins,
  };
});
