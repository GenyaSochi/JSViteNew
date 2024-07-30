import { resolve } from 'path'

export default {
  base:'/JSViteNew/',
  build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        main: resolve(__dirname, 'index.html'),
        // @ts-ignore
        idbm: resolve(__dirname, 'idbm.html'),
      }
    }
  }
}