import request from '@/utils/request'


export default{
   //根据课程Id获取章节和小节数据列表
    getAllChapterVideo(courseId){
        return request({
            url:'/eduservice/edu-chapter/getChapterVideo/'+courseId,
            method: 'get'
          })
    }

}

