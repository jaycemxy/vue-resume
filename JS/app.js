var app = new Vue({
    el: '#app',
    data: {
        editingName: false,
        resume: {
            name: '姓名',
            gender: '女',
            birthday: '1996.02',
            jobTitle: '前端工程师',
            phone: '18292034074',
            email: 'xxxxxxxxx@qq.com'
        }
    },
    method: {
        onEdit(key, value) {
            this.resume[key] = value
        },
    }
})