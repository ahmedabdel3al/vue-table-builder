<template>
  <div class="vtb__extras tb__extras--tooltip wrap">
    <span class="tool" :data-tip="text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.vtb__extras {
  * {
    box-sizing: inherit;
    &:before {
      box-sizing: inherit;
    }
    &:after {
      box-sizing: inherit;
    }
  }
  span {
    color: inherit;
    font-family: monospace;
    white-space: nowrap;
    &:after {
      font-family: Arial, sans-serif;
      text-align: left;
      white-space: normal;
    }
    &:focus {
      outline: none;
    }
  }
  .wrap {
    background: #ecf0f1;
    color: #607d8b;
    height: 100%;
    overflow: auto;
    padding: 1em 2.5em;
    text-align: center;
    width: 100%;
    margin: 0 5px;
  }

  .tool {
    cursor: help;
    position: relative;
    margin: 0 5px;

    &::before {
      left: 50%;
      opacity: 0;
      position: absolute;
      z-index: -100;
      border-style: solid;
      border-width: 0.75em 0.5em 0 0.5em;
      border-color: #3e474f transparent transparent transparent;
      bottom: 100%;
      content: "";
      margin-left: -0.5em;
      transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26),
        opacity 0.65s 0.5s;
      transform: scale(0.6) translateY(-90%);
    }
    &::after {
      left: 50%;
      opacity: 0;
      position: absolute;
      z-index: -100;
      background: #3e474f;
      border-radius: 0.25em;
      bottom: 140%;
      color: #edeff0;
      content: attr(data-tip);
      line-height: 1.2;
      margin-left: -1em;
      padding: 5px;
      font-size: 15px;
      transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;
      transform: scale(0.6) translateY(50%);
      width: fit-content;
    }
    &:hover {
      &::before {
        opacity: 1;
        transform: scale(1) translateY(0);
        z-index: 100;
        transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;
      }
      &::after {
        opacity: 1;
        transform: scale(1) translateY(0);
        z-index: 100;
        transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);
      }
    }
    &:focus {
      &::before {
        opacity: 1;
        transform: scale(1) translateY(0);
        z-index: 100;
        transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;
      }
      &::after {
        opacity: 1;
        transform: scale(1) translateY(0);
        z-index: 100;
        transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);
      }
    }
  }

  @media (max-width: 760px) {
    .tool {
      &::after {
        font-size: 0.75em;
        margin-left: -5em;
        width: 10em;
      }
    }
  }
}
</style>