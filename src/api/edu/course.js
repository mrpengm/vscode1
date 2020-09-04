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
    }
}

