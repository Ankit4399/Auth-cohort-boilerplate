import Joi from "joi";
import BaseDto from "../../../common/dto/base.dto.js";

class LoginDto extends BaseDto{
    static schema = Joi.object({
        email: Joi.string().email().lowercase().min(2).max(25).required(),
        password:Joi.string().min(8).required()
    })
}

export default LoginDto