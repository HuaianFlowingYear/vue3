<template>
    <div 
    :class="['co-button',`co-button--${type}`,
    {
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    },
    
    ]">按钮</div>
  </template>
  
  <script>
  const buttonTypes = [
    "default",
    "primary",
    "success",
    "info",
    "warning",
    "danger",
  ];
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
    },
    computed: {
      typeClass() {
        if (!buttonTypes.includes(this.type)) return "co-button__default";
        return `co-button__${this.type}`;
      },
    },
  };
  </script>
  
  
  <style scoped  lang="less">
  @types:{
    // default:#ffffff;
    primary:#409eff;
    success:#67c23a;
    info:#909399;
    warning:#e6a23c;
    danger:#f56c6c;
  
  }
  
  @light-ratio:1.1;
  @dark-ratio:0.9;
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
  
    each(@types,{
      &--@{key}{
        color: #fff;
        background-color: @value;
        border-color: @value;
        &:hover{
          background-color: @value *@light-ratio;
          border-color: @value *@light-ratio;
        }
        &:active{
          background-color: @value *@dark-ratio;
          border-color: @value *@dark-ratio;
        }
        &.is-disabled{
          background-color: @value + #444;
          border-color: @value + #444;
          cursor: not-allowed;
        }
        &.is-plain{
          color: @value;
          background-color: @value + #666;
          border-color: @value;
        }
  
        &.is-plain:hover{
          color: #fff;
          background-color: @value;
          border-color: @value;
        }
  
      }
    })
  }
  
  &.is-round {
    border-radius: 15px;
  }
  &.is-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: unset;
    line-height: 32px;
  }
  
  </style>