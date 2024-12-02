<template>
  <view>
    <!-- 轮播图 -->
    <swiper :indicator-dots="true" :autoplay="true" :interval="1000" :duration="1000" :vertical="false" :circular="true" >
      <swiper-item v-for="(item, i) in swiperList" :key="i">
		  <navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id='+item.goods_id"><!--页面跳转-->
			  <image :src="item.image_src"></image> 
			</navigator>
      </swiper-item>
    </swiper>
	<!--分类导航-->
	<view class="nav-list">
		<!--click绑定事件处理函数-->
		<view class="nav-item" v-for="(item,i) in navList" :key="i" @click="navClickHandler(item)">
			<image :src="item.image_src"></image>
		</view>
	</view>
  </view>
</template>
<script>
	export default {
		data() {//数据
			return {
				swiperList:[],
				navList:[]
			};
		},
		onLoad() {//页面加载时触发。
		uni.setNavigationBarTitle({
		        title: '最右'
		      })
			this.getSwiperList()
			this.getNavList()
		},
		methods:{//自定义方法
			navClickHandler(item){
				if(item.name==='分类'){
					uni.switchTab({//页面跳转
						url:'/pages/cate/cate'
					})
				}
			},
			getSwiperList(){
				uni.request({
					url: 'http://127.0.0.1:8080/test/getswiperlist',  // 替换为你需要请求的接口地址
					method: 'GET',
					success: (res) => {
					  this.swiperList = res.data;  // 将数据保存到 data 中
					  return uni.$showMsg('数据获取成功')
					},
					fail: (err) => {
					 return uni.$showMsg()
					}
				});
			},
			getNavList(){
				uni.request({
					url:'http://127.0.0.1:8080/test/getnavlist',
					method:'GET',
					success: (res) => {
					  this.navList = res.data;  // 将数据保存到 data 中
					  return uni.$showMsg('数据获取成功')
					},
					fail: (err) => {
					 return uni.$showMsg()
					}
				});
			}
		}
	}
	
</script>

<style lang="scss">
	swiper{
		height: 330rpx;
		.swiper-item,
		image{
			width: 100%;
			height: 100%;
		}
	}
	.nav-list{
		display: flex;
		justify-content: space-around;
		margin: 15px 0;
		.nav-item{
			image {
			    width: 60px;
			    height: 60px;
			}
			width: 120rpx;
			height: 140rpx;
		}
	}
</style>
