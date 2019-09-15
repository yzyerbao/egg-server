const moment = require('moment');

exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss');

exports.success = ({ctx, res = null, msg = '请求成功'}) => {
    ctx.body = {
        code: 0,
        data: res,
        msg
    }
    ctx.status = 200;
}
