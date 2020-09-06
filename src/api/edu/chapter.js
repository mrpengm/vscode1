import request from '@/utils/request'


export default{
   //根据课程Id获取章节和小节数据列表
    getAllChapterVideo(courseId){
        return request({
            url:'/eduservice/edu-chapter/getChapterVideo/'+courseId,
            method: 'get'
          })
    },
    //添加章节
    addChapter(chapter){
        return request({
            url:'/eduservice/edu-chapter/addChapter',
            method: 'post',
            data:chapter
          })
    },
    //根据章节id查询
    getChapter(chapterId){
        return request({
            url:'/eduservice/edu-chapter/getChapterInfo/'+chapterId,
            method: 'get'
          })
    },
    //修改章节
    updateChapter(chapter){
        return request({
            url:'/eduservice/edu-chapter/update',
            method: 'post',
            data:chapter
          })
    },
    //删除的方法
    deleteChapter(chapterId){
        return request({
            url:'/eduservice/edu-chapter/'+chapterId,
            method: 'delete'
          })
    },
}

