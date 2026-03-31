//during any standarization ,classes are best for it

//static is used to define methods that belongs to the class itself,not to  its instance

class ApiResponse {
    static ok(res,message,data = null) {
        return res.status(200).json({
            success: true,
            message,
            data
        })
    }

    static created(res,message,data = null){
        return res.status(201).json({
            success: true,
            message,
            data
        })
    }

    static noContent(res) {
        return res.status(204).send()
    }
}

export default ApiResponse