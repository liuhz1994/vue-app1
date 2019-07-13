<template>
    <div class="newsinfo-container">
       <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间: {{newsinfo.add_time | timeFormart}}</span>
            <span>点击 {{newsinfo.click}} 次</span>
        </p>
        <hr/>
        <div class="content" v-html="newsinfo.content">
           
        </div>
        <!-- 评论组件 -->
        <comment :newid="id"></comment>
    </div>
</template>
<script>

import comment from '../subcomponents/comment.vue'

export default {
    components:{
        comment
    },
    data:function(){
        return{
            id:this.$route.params.id,
            newsinfo:'',
        }
    },
    methods:{
        getNewsinfo:function(){
            var newid = this.id;
            this.$http.get('api/getnew/'+newid).then(response => {
 
                // get body data
                this.newsinfo = response.body.datas[0];
                console.log(this.newsinfo)
            }, response => {
                
            });
        }
    }
    ,
    created:function(){
        this.getNewsinfo();
    }
}
</script>
<style lang="less" scoped>
    .newsinfo-container{
        padding: 0 10px;

        .subtitle{
            display: flex;
            justify-content: space-between;
        }
    }
</style>


