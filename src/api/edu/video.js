import request from '@/utils/request'


export default{
 
    //添加小节
    addChapter(video){
        return request({
            url:'/eduservice/edu-video/addVideo',
            method: 'post',
            data:video
          })
    },
    
    //根据章节id查询
    getVideo(videoId){
        return request({
            url:'/eduservice/edu-video/getVideoInfo/'+videoId,
            method: 'get'
          })
    },
    //修改章节
    updateVideo(video){
        return request({
            url:'/eduservice/edu-video/updateVideo',
            method: 'post',
            data:video
          })
    },
    //删除的方法
    deleteVideo(id){
        return request({
            url:'/eduservice/edu-video/'+id,
            method: 'delete'
          })
    },
     //删除视频的方法
     deleteAliyvod(id){
        return request({
            url:'/eduvod/video/removeAlyVideo/'+id,
            method: 'delete'
          })
    },
}

