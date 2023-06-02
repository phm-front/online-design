<template>
  <ALayoutHeader>
    <div class="logo-wrap" title="figma">
      <LogoIcon
        style="font-size: 25px"
        class="icon"
        @click="$router.push('/')"
      />
      <slot name="logo-right" />
    </div>
    <div class="right-wrap">
      <slot name="right-btns" />
      <AButton
        type="primary"
        shape="round"
        v-if="!isLogin"
      >
        登录
      </AButton>
      <ADropdownButton
        v-else
        @click="$router.push('/setting')"
        class="user-btn"
      >
        <template #overlay>
          <AMenu @click="handleMenuClick">
            <AMenuItem key="1">个人设置</AMenuItem>
            <AMenuItem key="2">登出</AMenuItem>
          </AMenu>
        </template>
        user12138
      </ADropdownButton>
    </div>
  </ALayoutHeader>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { Modal, message } from 'ant-design-vue';

const userStore = useUserStore();
const { isLogin } = toRefs(userStore);
const { setLogin, setUserInfo } = userStore;
const router = useRouter();

const handleMenuClick = ({ key }: any) => {
  if (key === '1') {
    router.push('/setting');
  } else if (key === '2') {
    Modal.confirm({
      title: '提示',
      content: '确认登出？',
      okText: "确认",
      cancelText: "取消",
      onOk() {
        router.replace('/login');
        setLogin(false);
        setUserInfo({});
        message.success('登出成功！')
      }
    });
  }
}
</script>
<style scoped lang="scss">
.ant-layout-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.logo-wrap {
  display: flex;
  align-items: center;
  .icon {
    cursor: pointer;
    margin-right: 4px;
  }
}
.user-btn {
  margin-left: 16px;
  :deep(> .ant-btn:first-child:not(:last-child)) {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  :deep(> .ant-btn:last-child:not(:first-child)) {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}
</style>
