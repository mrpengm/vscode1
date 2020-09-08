import request from '@/utils/request'


export default{
   //课程分类查询
    addCourseInfo(courseInfo){
        return request({
            // url: '/table/list',
            // url:`/eduservice/edu-teacher/pageTeacherCondition/${current}/${limit}`,
            url:'/eduservice/edu-course/addCourseInfo',
            method: 'post',
            data:courseInfo
          })
    },
    //查询所有讲师
    getListTeacher(){
        return request({
            url:'/eduservice/edu-teacher/findAll',
            method: 'get'
          })
    },
    //根据课程id查询课程基本信息
    getCourseInfoId(id){
        return request({
            url:'/eduservice/edu-course/getCourseInfo/'+id,
            method: 'get'
          })
    },
    updateCourseInfo(courseInfo){
        return request({
            url:'/eduservice/edu-course/updateCourseInfo',
            method: 'post',
            data:courseInfo
          })
    },
    //课程确认信息显示
    getPublishCourseInfo(id){
        return request({
            url:'/eduservice/edu-course/getPublishCourseInfo/'+id,
            method: 'get'
          })
    },
    //课程最终发布
    //课程确认信息显示
    publishCourse(id){
        return request({
            url:'/eduservice/edu-course/publishCourse/'+id,
            method: 'post'
          })
    },
    //TODO 课程列表

    //课程最终发布
    getListCourse(){
        return request({
            url:'/eduservice/edu-course/list',
            method: 'get'
          })
    }

}

