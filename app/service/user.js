const Service = require('egg').Service;

class UserService extends Service {

    /**
     * 创建用户
     * @param {*} payload
     * @returns {Promise<any[]>}
     */
    async create(payload) {
        const {ctx} = this;
        payload.password = await this.ctx.genHash(payload.password);
        return ctx.model.User.create(payload);
    }

    /**
     * 删除用户
     * @param {*} _id
     * @returns {Promise<DocumentQuery<any | null, any> & {}>}
     */
    async destroy(_id) {
        const {ctx} = this;
        const user = ctx.model.User.findById(_id);
        if (!user) {
            ctx.throw(404, 'user not found');
        }
        return ctx.model.User.findByIdAndRemove(_id);
    }

    /**
     * 更新用户
     * @param {*} _id
     * @param {*} payload
     * @returns {Promise<DocumentQuery<any | null, any> & {}>}
     */
    async update(_id, payload) {
        const {ctx} = this;
        console.log(_id)
        const user = ctx.model.User.findById(_id);
        if (!user) {
            ctx.throw(404, 'user not found');
        }
        payload.password = await this.ctx.genHash(payload.password);
        return ctx.model.User.findByIdAndUpdate(_id, payload, {new: true});
        // return ctx.model.User.updateOne({_id: '5d7e397a6099b11e60ea5189'}, {name: 'hello wa'}, {new: true});
        // return ctx.model.User.update({ mobile: '13716389811' }, {name:'hello wa'});
        // return ctx.model.User.findOneAndUpdate({ mobile: '13716389811' }, {name:'hello wa'});
    }

    /**
     * 查询用户
     * @param {*} _id
     * @returns {Promise<DocumentQuery<any | null, any> & {}>}
     */
    async show(_id) {
        const {ctx} = this;
        const user = await ctx.model.User.findById(_id);
        if (!user) {
            this.ctx.throw(404, 'user not found')
        }
        return user;
    }
    /**
     * 根据手机号查找用户
     * @param {*} mobile
     */
    async findByMobile(mobile) {
        return this.ctx.model.User.findOne({mobile: mobile});
    }
}

module.exports = UserService
