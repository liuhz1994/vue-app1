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
    </div>
</template>
<script>

export default {
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


