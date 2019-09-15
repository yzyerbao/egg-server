module.exports = {
    createUserRequest: {
        mobile: {
            type: 'string',
            required: true,
            description: '⼿机号',
            example: '13716389811',
            format: /^1[34578]\d{9}$/
        },
        password: {
            type: 'string',
            required: true,
            description: '密码',
            example: '111111'
        },
        name: {
            type: 'string',
            required: true,
            description: '姓名',
            example: 'yang'
        }
    }
};
