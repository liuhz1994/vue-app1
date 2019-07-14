<template>
  <div>
    <textarea  cols="30" rows="3" placeholder="请输入你的评论" v-model="curComment"></textarea>
    <mt-button type="primary" plain size="large" @click="postComment">发表评论</mt-button>

    <!-- 评论列表 -->
    <div class="cmt-list">
      <div class="cmt-item" v-for="(comment,index) in commentList" :key="comment.id">
        <div class="cmt-title">第{{++index}}楼 用户：{{comment.user_name}} 发表时间：{{comment.add_time | timeFormart}}</div>
        <div class="cmt-content">{{comment.content}}</div>
      </div>
    </div>

    <mt-button type="danger" plain size="large" @click="getMoreComment">查看更多</mt-button>
  </div>
</template>
<script>

export default {
  data: function() {
    return {
      commentList: "",
      pageIndex: 1,
      curComment:''
    };
  },
  methods: {
    //获取评论数据
    getCommentList: function() {
      this.$http
        .get("api/getcomments/" + this.newid + "?pageindex=" + this.pageIndex)
        .then(
          result => {
            console.log("获取成功");
            this.commentList = result.body.datas;
          },
          error => {}
        );
    },
    //查看更多 按钮 查看更多评论
    getMoreComment: function() {
      this.pageIndex++;
      this.$http
        .get("api/getcomments/" + this.newid + "?pageindex=" + this.pageIndex)
        .then(
          result => {
            
            var commentList = result.body.datas;
            this.commentList = this.commentList.concat(commentList) ;
        
          },
          error => {}
        );
    },
    //提交当前评论
    //1.提交当前评论
    //2.提交成功后,给出成功提示,并显示最新评论
    postComment:function(){
        //post请求有三个参数
       
        this.$http.post('api/postcomment/'+this.newid,{comment:this.curComment},{emulateJSON:true})
        .then(result=>{
            console.log("评论成功");
            var newComment = {
                user_name:"新用户",
                add_time:Date.now(),
                content:this.curComment.trim()
            }
            console.log(this.curComment.trim())
            this.commentList.unshift(newComment);
            this.curComment = '';
        },error=>{
            console.log(error)
        })
    }
  },
  created: function() {
    this.getCommentList();
  },
  props: ["newid"]
};
</script>

<style lang="less" scoped>
.cmt-list {
  margin: 5px;

  .cmt-item {
    margin: 5px;

    .cmt-title {
      background-color: gray;
      font-size: 12px;
    }
    .cmt-content {
      padding: 5px 0;
      font-size: 14px;
    }
  }
}
</style>
