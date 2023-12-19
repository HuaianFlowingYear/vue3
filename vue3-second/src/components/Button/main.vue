<template>
  <!-- 模板代码... -->
  <div :class="['co-button',`co-button--${type}`,{
    'is-plain': plain,
    'is-round': round,				
    'is-circle': circle,
    'is-disabled': disabled,
    'is-text': text,
       
  }]">
    <slot />
  </div>   
</template>

<script>
export default {
  name: "co-button",
  props: {
      type: {
        type: String,
        default: () => "default",
      },
      plain: {
        type: Boolean,
        default: () => false,
      },
      round: {
        type: Boolean,
        default: () => false,
      },
      circle: {
        type: Boolean,
        default: () => false,
      },
      disabled: {
        type: Boolean,
        default: () => false,
      },
      text: {
        type: Boolean,
        default: () => false,
      },
    },
  data() {
    return {
      // 数据...
    }
  },
  computed: {
    // 计算属性...
  },
  methods: {
    // 方法...
  },
  created() {
    // 生命周期钩子...
  }
}
</script>

<style lang="less" scoped>
/* 样式... */
@types: {
    primary: #409eff;
    success: #67c23a;
    warning: #e6a23c;
    danger: #f56c6c;
    info: #909399;
}
@light-ratio: 1.1;
@dark-ratio: 0.9;
@disabled-ratio: 1.4;

.co-button {
    margin: 0 6px;
    user-select: none;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    padding: 8px 15px;
    text-align: center;
    display: inline-block;
    cursor: pointer;

    &.is-round {
        border-radius: 20px;
    }
    &.is-plain{
        opacity: .2; 
    }
    &.is-plain:hover{
        opacity: 1;
    }

    &.is-circle {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        padding: unset;
        line-height: 32px;
    }

    each(@types, {
        &--@{key} {
            color: #fff;
            background-color: @value;
            border-color: @value;

            &:hover {
                background-color: @value * @light-ratio;
                border-color: @value;
            }

            &:active {
                background-color: @value * @dark-ratio;
                border-color: @value;
            }

            &.is-disabled {
                background-color: @value * #444;
                border-color: @value * #444;
                cursor: not-allowed;
            }

            &.is-text {
                /* 样式... */
            }
        }
    })
}
</style>

