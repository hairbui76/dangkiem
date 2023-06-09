import db from '../models/index';

let handleStats = async (userId) => {
    let data = await getRegisterData(userId);
    if (!data) return {
        errCode: 1,
        errMessage: "can't get data from database",
        data: {}
    }

    return data;
}

let getRegisterData = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let register = await db.Register.findAll({
                attributes: ["registerDate", "expireDate"],
                where: { userId: userId },
                raw: true
            });
            resolve(register);
        } catch (error) {
            reject.log(error);
        }
    })
}

module.exports = {
    handleStats: handleStats
}