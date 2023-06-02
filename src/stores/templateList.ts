import { defineStore } from 'pinia';

export const useTemplateListStore = defineStore(
  'templateList',
  () => {
    const templateList = shallowRef(
      Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        url: 'https://static.imooc-lego.com/upload-files/screenshot-889755.png',
        name: '前端架构师直播海报',
        author: 'xiaoli',
        tags: ['hot'],
        usedNumber: 999
      }))
    );

    const getTemplateById = (id: number) => {
      return templateList.value.find((item) => item.id === id);
    };

    return {
      templateList,
      getTemplateById
    };
  }
);
