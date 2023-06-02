<template>
  <div class="template-detail">
    <div class="center-wrapper">
      <img :src="templateInfo?.url" class="template-img" alt="" />
      <div class="right-info">
        <h2>{{ templateInfo?.name }}</h2>
        <p>
          该模板由
          <span class="author">
            {{ templateInfo?.author }}
          </span>
          创建
        </p>
        <div class="btn-row">
          <AButton
            type="primary"
            shape="round"
            size="large"
            style="margin-right: 16px"
            @click="useTemplateToEdit"
          >
            使用模版
          </AButton>
          <AButton shape="round" size="large">下载图片海报</AButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTemplateListStore } from '@/stores/templateList';

const router = useRouter();
const { getTemplateById } = useTemplateListStore();

const route = useRoute();
const id = Number(route.params.id);
const templateInfo = getTemplateById(id);

// 使用模版
const useTemplateToEdit = () => {
  router.push({
    name: 'editor',
    params: {
      id: templateInfo!.id
    }
  });
};
</script>
<style scoped lang="scss">
.template-detail {
  margin-top: 88px;
  padding-bottom: 16px;
}
.center-wrapper {
  display: flex;
  justify-content: center;
}
.template-img {
  width: 384px;
  margin-right: 30px;
}
p {
  color: #595959;
}
.author {
  margin: 0 4px;
  color: #333;
}
</style>
