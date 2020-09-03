import request from '@/utils/request'


export default{
   //课程分类查询
    getAllSubject(){
        return request({
            // url: '/table/list',
            // url:`/eduservice/edu-teacher/pageTeacherCondition/${current}/${limit}`,
            url:'/eduservice/edu-subject/getAllSubject',
            method: 'get'
          })
    }

}

