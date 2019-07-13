<template>
    <div>
        <textarea name="" id="" cols="30" rows="3" placeholder="请输入你的评论"></textarea>	
        <mt-button type="primary" plain size="large">发表评论</mt-button> 

        <!-- 评论列表 -->
        <div class="cmt-list">
            <div class="cmt-item" v-for="(comment,index) in commentList" :key="comment.id">
                <div class="cmt-title">
                    第{{++index}}楼 用户：{{comment.user_name}} 发表时间：{{comment.add_time}}
                </div>
                <div class="cmt-content">
                    {{comment.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" plain size="large">查看更多</mt-button>      

        
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            commentList : '',
            pageIndex : 1,
        }
    },
    methods:{
        getCommentList:function(){

            //获取评论数据
            this.$http.get('api/getcomments/'+this.newid+'?pageindex='+this.pageIndex).then(result => {
                
                console.log("获取成功");
                this.commentList = result.body.datas;
            },error =>{

            })
        }
    },
    created:function(){
    
        this.getCommentList();
    },
    props:['newid']
}
</script>

<style lang="less" scoped>

    .cmt-list{
        margin: 5px;

        .cmt-item{
            margin: 5px;

            .cmt-title{
                background-color: gray;
                font-size: 12px;
            }
            .cmt-content{
                padding: 5px 0;
                font-size: 14px;
            }
        }
    }
</style>
