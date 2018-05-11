<template>
  <div>
    <div class="loaddingImg" v-show="isShowImg">
      <img src="../../assets/img/timg.gif">
    </div>
    <div id="movieMain">
      <ul class="ul">
        <li v-for="(movie, index)  in movieList" :key="movie.id" class="movie">
          <div class="movie-img">
            <img :src="movie.img" alt="">
          </div>
          <div class="movie-info">
            <p class="movieName">{{movie.nm}}</p>
            <p>类型:{{movie.ver}}</p>
            <p>主演:{{movie.star}}</p>
            <p>{{movie.showinfo}}</p>
          </div>
        </li>
      </ul>
    </div>


  </div>

</template>

<script>
    import Axios from 'axios'
    import $ from 'jquery'



    export default {
        name: "MovieList",
        data() {
          return {
            movieList: [],
            isShowImg: true,
          };
        },
        created(){
          var self = this;

        },
        methods: {

        },
        mounted(){
          //axios 返回的是promise对象
          Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset="+ this.movieList.length).then((res) =>{
            this.isShowImg = !this.isShowImg;
            this.movieList = res.data.data.movies;
            console.log(this.getScrollTop());
          }).catch(() =>{

          });
        },
        computed: {

        },
        watch: {

        }

    }
</script>

<style scoped>
  .ul{
    margin-top:1rem;
    margin-bottom:1rem;
  }
  .movie{
    display: flex;
    font-size:18px;
    border:1px solid #ccc;

  }
  .movie-img{
    flex-grow: 1;
    width:0;
  }
  .movie-img img{
    width:100%;
  }
  .movie-info{
    flex-grow: 2;
    width:0;
  }
  .movieName{
    font-weight: bolder;
  }

  p{
    margin:0.2rem 0;
  }

  .loaddingImg {
    width:100%;
    text-align: center;
  }
  .loaddingImg img{
    position: absolute;
    width:100%;
    height:3rem;
    left:0rem;
  }
</style>
