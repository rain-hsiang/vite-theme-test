import { replaceStyleVariables } from 'vite-plugin-theme/es/client';
import { useStorage } from '@vueuse/core'
import { ref, watchEffect } from 'vue'

const primary = "#e72528"

export function useTheme() {
  // const theme = ref(localStorage.getItem('theme-schema') || primary)
  // useStorage('theme-schema', theme)
  //不知道为啥上面这种写法，本地为空的时候会报错内存溢出，之前没懂什么意思，现在ok了
  const theme = useStorage('theme-schema', primary)
  
  watchEffect(() => {
    changeTheme(theme.value)
  });
  return theme
}

export async function changeTheme(color: string) {
  return await replaceStyleVariables({
    colorVariables: [color],
  });
}
