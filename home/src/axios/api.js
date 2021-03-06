import axios from "axios"


// axios.defaults.baseURL = 'http://localhost:8000/api/v1'
axios.defaults.timeout = 10000;
axios.defaults.baseURL = "http://api.root2.cn/api/v1";
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //添加头信息
    config.header={
        // "Content-Type":"application/x-www-form-urlencoded"
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

export default{

    getTop:() =>{
        return axios.get("/recommend")
    },
    getNotice:() =>{
        return axios.get("/notice")
    },
    getIndexList:(page) =>{
        if(page=="" || page<=0){
            page=1;
        }
        return axios.get("/blog?page="+page);

    },
    //获取所有文章数量
    getIndexListCount:() =>{
        return axios.get("/blog/count");
    },
    //分类
    getIndexCate:() =>{
        return axios.get("/category")
    },
    //获取该分类下文章列表
    getCateBlog:(cat_id,page) =>{
        if(page=="" || page<=0){
            page=1;
        }
        return axios.get("/category/blog/"+cat_id+"?page="+page)
    },
    //获取该分类下文章数量
    // getCateBlogCount:(cat_id) =>{
    //     return axios.get("/category/count/"+cat_id)
    // },
    // 归档
    getArchives:() =>{
        return axios.get("/archives")
    },
    //标签
    getTags:() =>{
        return axios.get("/tags")
    },
    //标签下文章
    getTagblog:(id) =>{
        return axios.get("/tags/blog/"+id)
    },
    //关于我
    getAbout:() =>{
        return axios.get("/about")
    },
    //友链
    getFriend:() =>{
        return axios.get("/friend")
    },
    //获取文章
    getContent:(id) =>{
        return axios.get("/blog/content/"+id)
    }

}
