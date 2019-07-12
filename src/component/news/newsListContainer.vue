<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="news in newslist" :key="news.id">
					<router-link :to='"/home/newsinfo/" + news.id'>
						<img class="mui-media-object mui-pull-left" :src="news.url">
						<div class="mui-media-body">
							{{news.title}}
                            <p class='mui-ellipsis'>
                                <span>{{news.add_time | timeFormart}}</span>
                                <span>点击：{{news.click}}次</span>
                            </p>                       
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
export default {

    data:function(){
        return{
            newslist:'',
        }
    },
    methods:{
        //获取新闻列表
        getNewsList:function(){
            this.$http.get('api/getnewslist').then(response => {
                this.newslist = response.body.datas;
                console.log(this.newslist);
            }, response => {
                console.log('获取失败')
            });
        }
    },
    mounted:function(){
      this.getNewsList();
    },
    
};
</script>
<style lang="less" scoped>
    .mui-ellipsis{
        color: #26a2ff;
        display: flex;
        justify-content: space-between;
    }
   
</style>


