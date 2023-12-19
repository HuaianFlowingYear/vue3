<template>
    <!-- <div
    :class="[
      'co-button',
      typeClass,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
  >
    按钮
  </div> -->
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
// @plain-ratio:2.8;




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
// &.is-disabled {
  
// //   position: relative;
// //   overflow: hidden;
// }

// .co-button.is-disabled::before {
//   content: "";
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   display: inline-block;
//   background: rgba(255, 255, 255, 0.7);
// }
// .co-button__default {
//   background-color: #ffffff;
//   border-color: #dcdfe6;
//   color: #606266;
// }
// .co-button__default:hover {
//   color: #409eff;
//   background-color: #ecf5ff;
//   border-color: #c6e2ff;
// }
// .co-button__default:active {
//   color: #409eff;
//   border-color: #409eff;
//   background-color: #ecf5ff;
//   outline: none;
// }

// .co-button__default.is-plain:hover {
//   background: #ffffff;
//   border-color: #409eff;
//   color: #409eff;
// }
// .co-button__default.is-plain:active {
//   background: #ffffff;
//   border-color: #409eff;
//   color: #409eff;
//   outline: none;
// }

// .co-button__default.is-disabled {
//   background: #ffffff;
//   border-color: #e4e7ed;
//   color: #a8abb2;
// }






// /* primary */
// .co-button__primary {
//   color: #fff;
//   background-color: #409eff;
//   border-color: #409eff;
// }
// .co-button__primary:hover {
//   background: #66b1ff;
//   border-color: #66b1ff;
//   color: #fff;
// }
// .co-button__primary:active {
//   background: #3a8ee6;
//   border-color: #3a8ee6;
//   color: #fff;
// }

// .co-button__primary.is-disabled {
//   background: #a0cfff;
//   border-color: #a0cfff;
//   color: #ffffff;
// }

// .co-button__primary.is-plain {
//   color: #409eff;
//   background: #ecf5ff;
//   border-color: #a0cfff;
// }
// .co-button__primary.is-plain:hover {
//   background: #409eff;
//   border-color: #409eff;
//   color: #fff;
// }
// .co-button__primary.is-plain:active {
//   background: #337ecc;
//   border-color: #337ecc;
//   color: #fff;
//   outline: none;
// }





// .co-button__success{
//     color: #fff;
//     background-color: #67c23a;
//     border-color: #67c23a;
// }

// .co-button__success:hover {
//   background: #95d475;
//   border-color: #95d475;
//   color: #fff;
// }
// .co-button__success:active {
//   background: #529b2e;
//   border-color: #529b2e;
//   color: #fff;
// }
// .co-button__success.is-plain {
//   color: #67c23a;
//   background: #f0f9eb;
//   border-color: #b3e19d;
// }
// .co-button__success.is-plain:hover {
//   background: #67c23a;
//   border-color: #67c23a;
//   color: #fff;
// }
// .co-button__success.is-plain:active {
//   background: #529b2e;
//   border-color: #529b2e;
//   color: #fff;
//   outline: none;
// }

// .co-button__success.is-disabled {
//     background: #b3e19d;
//     border-color: #b3e19d;
//     color: #ffffff;
// }



// .co-button__info{
//     color: #fff;
//     background-color: #909399;
//     border-color: #909399;
// }

// .co-button__info:hover {
//   background: #b1b3b8;
//   border-color: #b1b3b8;
//   color: #fff;
// }
// .co-button__info:active {
//   background: #73767a;
//   border-color: #73767a;
//   color: #fff;
// }
// .co-button__info.is-plain {
//   color: #909399;
//   background: #f4f4f5;
//   border-color: #c8c9cc;
// }
// .co-button__info.is-plain:hover {
//   background: #909399;
//   border-color: #909399;
//   color: #fff;
// }
// .co-button__info.is-plain:active {
//   background: #73767a;
//   border-color: #73767a;
//   color: #fff;
//   outline: none;
// }

// .co-button__info.is-disabled {
//     background: #c8c9cc;
//     border-color: #c8c9cc;
//     color: #ffffff;
// }



// .co-button__warning{
//     color: #fff;
//     background-color: #e6a23c;
//     border-color: #e6a23c;
// }

// .co-button__warning:hover {
//   background: #eebe77;
//   border-color: #eebe77;
//   color: #fff;
// }
// .co-button__warning:active {
//   background: #b88230;
//   border-color: #b88230;
//   color: #fff;
// }
// .co-button__warning.is-plain {
//   color: #e6a23c;
//   background: #fdf6ec;
//   border-color: #f3d19e;
// }
// .co-button__warning.is-plain:hover {
//   background: #e6a23c;
//   border-color: #e6a23c;
//   color: #fff;
// }
// .co-button__warning.is-plain:active {
//   background: #b88230;
//   border-color: #b88230;
//   color: #fff;
//   outline: none;
// }

// .co-button__warning.is-disabled {
//     background: #f3d19e;
//     border-color: #f3d19e;
//     color: #ffffff;
// }






// .co-button__danger{
//     color: #fff;
//     background-color: #f56c6c;
//     border-color: #f56c6c;
// }

// .co-button__danger:hover {
//   background: #f89898;
//   border-color: #f89898;
//   color: #fff;
// }
// .co-button__danger:active {
//   background: #c45656;
//   border-color: #c45656;
//   color: #fff;
// }
// .co-button__danger.is-plain {
//   color: #f56c6c;
//   background: #fef0f0;
//   border-color: #fab6b6;
// }
// .co-button__danger.is-plain:hover {
//   background: #f56c6c;
//   border-color: #f56c6c;
//   color: #fff;
// }
// .co-button__danger.is-plain:active {
//   background: #c45656;
//   border-color: #c45656;
//   color: #fff;
//   outline: none;
// }

// .co-button__danger.is-disabled {
//     background: #fab6b6;
//     border-color: #fab6b6;
//     color: #ffffff;
// }

</style>