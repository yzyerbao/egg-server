const Controller = require('egg').Controller

/**
 * @Controller 用户管理
 */
class UserController extends Controller {
    constructor(ctx) {
        super(ctx);
    }

    /**
     * @summary 创建用户
     * @description 创建用户，记录用户账户/密码/类型
     * @router post /api/user
     * @request body createUserRequest *body
     * @response 200 baseResponse 创建成功
     */
    async create() {
        const {ctx, service} = this;
        ctx.validate(ctx.rule.createUserRequest);
        const payload = ctx.request.body || {};
        const res = await service.user.create(payload);
        ctx.helper.success({ctx, res})
    }


    /**
     * @summary 删除单个用户
     * @description 删除单个用户
     * @router delete /api/user/{id}
     * @request path string *id eg:1 用户ID
     * @response 200 baseResponse 删除成功
     */
    async destroy() {
        const {ctx, service} = this;
        const {id} = ctx.params;
        await service.user.destroy(id);
        ctx.helper.success({ctx})
    }

    /**
     * @summary 更新用户
     * @description 更新用户
     * @router put /api/user/{id}
     * @request path string *id eg:1 用户ID
     * @request body createUserRequest *body
     * @response 200 baseResponse 更新成功
     */
    async update() {
        const {ctx, service} = this;
        ctx.validate(ctx.rule.createUserRequest);
        console.log(ctx.params);
        const {id} = ctx.params;
        const payload = ctx.request.body || {};
        await service.user.update(id, payload);
        ctx.helper.success({ctx});
    }

    /**
     * @summary 获取单个用户
     * @description 获取用户信息
     * @router get /api/user/{id}
     * @request path string *id eg:1 用户ID
     * @response 200 baseResponse 请求成功
     */
    async show() {
        const {ctx, service} = this;
        const {id} = ctx.params;
        const res = await service.user.show(id);
        ctx.helper.success({ctx, res});
    }

}


module.exports = UserController;
