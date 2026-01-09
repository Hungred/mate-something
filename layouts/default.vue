<template>
  <div class="flex min-h-screen bg-[#1a0b16]">
    <LayoutSidebar />

    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <LayoutHeader />

      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
