'use strict'
module.exports = (option, app) => {
    return async function (ctx, next) {
        try {
            await next();
        } catch (e) {
            app.emit('error', e, this);
            const status = e.status || 500;
            const error = status === 500 && app.config.env === 'prod' ? 'Internal Server error' : e.message;
            ctx.body = {
                code: status,
                error: error
            }
            if (status === 422) {
                ctx.body.detail = err.errors;
            }
            ctx.status = 200;
        }
    }
};
