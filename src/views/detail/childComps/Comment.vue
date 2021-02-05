<template>
  <div class="comment" v-if="rate.list">
    <div class="title">
      <span>用户评论</span>
      <span>更多</span>
    </div>
    <div class="user">
      <div class="user-info">
        <img :src="rate.list[0].user.avatar" alt="">
        <span>{{rate.list[0].user.uname}}</span>
      </div>
      <p>{{rate.list[0].content}}</p>
      <div class="extra-info" v-for="(value,index) in rate.list[0].extraInfo" :key="index">{{value}}</div>
      <div class="style">
        <span>{{rate.list[0].created | showDate}}</span>
        <span>{{rate.list[0].style}}</span>
        </div>
      <div class="img">
        <img :src="value" v-for="(value,index) in rate.list[0].images" :key="index" alt="">
      </div>
    </div>
    <div style="height: 10px;background-color: #f6f6f6;"></div>
  </div>
</template>

<script>
import {dateFormat} from 'common/utils';
export default {
  name: 'Comment',
  props: {
    rate: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value*1000);
      return dateFormat("YYYY-mm-dd HH:MM", date);
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment{
    width: 100%;
    font-size: 14px;
    .title{
      padding: 10px 5px;
      font-size: 18px;
      font-weight: bold;
      background-color: var(--color-tint);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      span:nth-child(2){
        font-size: 14px;
        font-weight: 0;
      }
    }
    .user{
      padding: 10px 5px;
      .user-info{
        padding: 10px 5px;
        display: flex;
        align-items: center;
        img{
          width: 60px;
          height: 60px;
        }
        span{
          font-size: 16px;
          color: #000;
          font-weight: bold;
          margin-left: 20px;
        }
      }
      p{
        line-height: 22px;
      }
      .extra-info{
        line-height: 22px;
      }
      .style{
        line-height: 22px;
        font-size: 12px;
        color: #999;
        span:nth-child(1){
          margin-right: 20px;
        }
      }
      .img{
        img{
          width: 100px;
          height: 100px;
        }
      }
    }
  }
</style>